import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";
import Gas from "../components/Gas/gas";
import Air from "../components/Air/air";
import queryString from 'query-string'




class Results extends Component {
  componentDidMount() {
    // Now we must save the data into state and figure out how to pass it to where we need it 
    console.log(this.props.location.search) //.search
    const newParams = new URLSearchParams(this.props.location.search);
    const origin = newParams.get('origin');
    const destination = newParams.get('destination');
    const date = newParams.get('date');
    console.log(date, origin, destination);
    // const values = queryString.parse(this.props.location)
    // console.log(values.destination)
    // console.log(values.origin) 
  }
  
  render() {
    return (
    <Container fluid>
      <Jumbotron>
        <h1>Results</h1>
      </Jumbotron>
      <Map />
      <Row>
        <Col size="md-6">
          <Gas lat={30.2672} lng={-97.7431} />
        </Col>
      <Col size="md-6 sm-12">
          <Air  />
        </Col>
      </Row>
    </Container>
    )
  }
}
  
export default Results;

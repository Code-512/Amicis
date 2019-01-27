import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";
import Gas from "../components/Gas/gas";
import Air from "../components/Air/air";

class Results extends Component {
  state = {
    date: '',
    originLat:'',
    originLng:'',
    originCity:'',
    destinationLat:'',
    destinationLng:'',
    destinationCity:''
  };

  componentDidMount() {
    // Now we must save the data into state and figure out how to pass it to where we need it
    // console.log(this.props.location.search);
    const newParams = new URLSearchParams(this.props.location.search);
    const originLat = newParams.get('originLat');
    const originLng = newParams.get('originLng');
    const originCity = newParams.get('originCity');
    const destinationLat = newParams.get('destinationLat');
    const destinationLng = newParams.get('destinationLng');
    const destinationCity = newParams.get('destinationCity');
    const date = newParams.get("date");
    console.log("date from results page", date);
    console.log('originLat from results page', originLat);
    console.log('originLng from results page', originLng)
    console.log('originCity from results page', originCity)
    console.log('destinationLat from results page', destinationLat)
    console.log('destinationLng from results page', destinationLng)
    console.log('destinationCity from results page', destinationCity)
    // console.log("window:", window.location.search);

    this.setState({
      date,
      originLat,
      originLng,
      originCity,
      destinationLat,
      destinationLng,
      destinationCity
    });
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Results</h1>
          DATE: {this.state.date}
        </Jumbotron>
        <Map />

        <Row>
          <Col size="md-6">
          Distance of trip: 
            <Gas lat={30.2672} lng={-97.7431} />
          </Col>
          <Col size="md-6 sm-12">
            <Air />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;

import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";
import Gas from "../components/Gas/gas";
import Air from "../components/Air/air";

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
        listDataFromChild: null,

    date: '',
    originLat:'',
    originLng:'',
    originCity:'',
    destinationLat:'',
    destinationLng:'',
    destinationCity:''
  };    

  }

  componentDidMount() {
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

  myCallback = (dataFromChild) => {
    this.setState({ listDataFromChild: dataFromChild });
}

otherFn = () => {
   console.log(this.state.listDataFromChild)
}

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Results</h1>
          DATE: {this.state.date}
          Distance of trip: 
          originLat {this.state.originLat}
          originLng {this.state.originLng}
          
        </Jumbotron>
        {/* <Map callbackFromParent={this.myCallback.bind(this)}/> */}
        <Map callbackFromParent={this.myCallback.bind(this)}/>
        <Row>
          <Col size="md-6">
          
            <Gas lat={30.0986589} lng={-97.93838289999997} />
                      
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

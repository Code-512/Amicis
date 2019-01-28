import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import PaperSheet from "../components/Paper/paper"
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";
import Gas from "../components/Gas/gas";
import Air from "../components/Air/air";
// import "./Results.css";

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
      <Container >
              <Map />
              <br />
               <Row>
          <Col size="md-6 sm-12">
          <PaperSheet driveTitle={"Driving Results"} driveDist={"234 miles"} driveTime={"Travel Time: 3 hours, 6 minutes"} driveCost={"Cost: $245"} />
            <Gas lat={30.2672} lng={-97.7431} />
          </Col>
          <Col size="md-6 sm-12">
          <PaperSheet airTitle={"Flight Results"} airDist={"234 miles"}empty={""} />
            <Air />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;

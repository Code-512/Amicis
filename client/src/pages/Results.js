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
        // listDataFromChild: null,
    date: '',
    originLat:'',
    originLng:'',
    originCity:'',
    destinationLat:'',
    destinationLng:'',
    destinationCity:'',
    driveDist:'',
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
  handleResult = (result) => {
    if(result){
      console.log(result.routes[0].legs[0].distance.text)
      this.setState({
        driveDist: result.routes[0].legs[0].distance.text
      })
    }
    
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Results</h1>
          DATE: {this.state.date}
          Distance of trip: {this.state.driveDist}
          Drive time: 
          originLat {this.state.originLat}
          originLng {this.state.originLng}
          
        </Jumbotron>
        {/* <Map callbackFromParent={this.myCallback.bind(this)}/> */}
        <Map handleResult = {this.handleResult} Orglat={30.0986589}/>
        <Row>
          <Col size="md-6">
          
            <Gas lat={this.state.originLat} lng={-97.93838289999997} />
                      
          </Col>
          <Col size="md-6 sm-12">
            <Air orgCode={"AUS"} destCode={"BOS"} date={"21/3/2019"}/>
            {/* <Air date={21/10/2019}/> */}
            <Air />
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Results;

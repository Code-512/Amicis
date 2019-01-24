import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DatePickers from "../components/Datepicker/datepicker"
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox"

class PlanTrip extends Component {
  state = {
    origin: null,
    destination: null
};

updateLocation = (place) => {
  console.log('PLACE', place)
  this.setState({
    origin: place,
    destination: place
  });
}


  render() {
    return (
      <Container fluid>
            <Jumbotron>
              <h1>THIS WILL BE PLAN TRIP PAGE</h1>
              
            </Jumbotron>
            <DatePickers />
            <PlacesWithStandaloneSearchBox onLocationChange={this.updateLocation} placeholderText="Where ya startin'?" />
            <PlacesWithStandaloneSearchBox onLocationChange={this.updateLocation} placeholderText="Where ya goin'?" />
            {this.state.origin && 'origin:' + this.state.origin.formatted_address}
            {this.state.destination && 'destination:' + this.state.destination.formatted_address}
            
            {/* <Link to={`/resuts?origin=${this.state.origin}&dest=${this.state.dest}`}>See Results<Link> */}
            
            
      </Container>
    );  
  }
}
  

export default PlanTrip;
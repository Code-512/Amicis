import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ContainedButtons from "../components/SubmitButton/submitButton"
import DatePickers from "../components/Datepicker/datepicker"
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox"
import { Route } from "react-router-dom";
// import queryString from 'query-string'

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
};

getDate = (date) => {
  console.log('date', date)
  this.setState({
    calendar: date
  });
};

// Commenting this out. updateLocation should be what we need. 
// getOrigin = (place) => {
//   this.setState({
//     origin: place
//   });
// }

// getDestination = (place) => {
//   this.setState({
//     destination: place
//   });
// }

// put function here for location information
// pass information down to the map, etc. 
// hold in state at parent level
// pass as props to children




  render() {
    return (
      <Container fluid>
            <Jumbotron>
              <h1>THIS WILL BE PLAN TRIP PAGE</h1>
              
            </Jumbotron>
            <ContainedButtons />
            <DatePickers 
            calendarDate={this.getDate}
            />
            {/* <PlacesWithStandaloneSearchBox getOrigin={this.updateLocation}/>
            <PlacesWithStandaloneSearchBox getDestination={this.updateLocation}/> */}
            <PlacesWithStandaloneSearchBox 
            getOrigin={this.updateLocation}
            onLocationChange={this.updateLocation} 
            placeholderText="Where ya startin'?" />
            <PlacesWithStandaloneSearchBox 
            getDestination={this.updateLocation}
            onLocationChange={this.updateLocation} 
            placeholderText="Where ya goin'?" />

            {this.state.origin && 'origin:' + this.state.origin.formatted_address}
            {this.state.destination && 'destination:' + this.state.destination.formatted_address}
            
            {/* <Link to={`/resuts?origin=${this.state.origin}&dest=${this.state.dest}`}>See Results<Link> */}
       
            <Route path="/results" component={DatePickers} />
      </Container>
      
    );  
  }
}
  

export default PlanTrip;
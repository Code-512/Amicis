import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Submit from "../components/SubmitButton/submit"
import DatePickers from "../components/Datepicker/datepicker"
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox"
import { Link } from "react-router-dom";
import myDatePicker from "../components/DP/dp";
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

// datePickerReceipt() {
//   return({DatePickers})
// }

  render() {
    return (
      <Container fluid>
            <Jumbotron>
              <h1>THIS WILL BE PLAN TRIP PAGE</h1>
              
            </Jumbotron>
                    

            <Submit onClick={this.sendSubmitButton}/>
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

            {/* {this.state.origin && 'origin:' + this.state.origin.formatted_address} */}
            {/* {this.state.destination && 'destination:' + this.state.destination.formatted_address} */}
            
            {/* <Link to={`/resuts?origin=${this.state.origin}&dest=${this.state.dest}`}>See Results<Link> */}
       
            <Link to={`/results?origin=${this.state.origin}&destination=${this.state.destination}&date=${this.state.date}`}>
                     <button>plan trip</button>
              </Link>
      </Container>
      
    );  
  }
}


  

export default PlanTrip;
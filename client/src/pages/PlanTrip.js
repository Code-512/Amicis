import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Submit from "../components/SubmitButton/submit";
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox";
import { Link } from "react-router-dom";
import DatePickTest from "../components/Pickers/pickers";





class PlanTrip extends Component {
  state = {
    cities: [],
    value: "",
    selectedDate: new Date()
  };

  updateLocation = place => {
    // console.log("PLACE", place);
    this.setState({
      cities: [
        ...this.state.cities,
        {
          originLat: place.geometry.viewport.ma.j,
          originLng: place.geometry.viewport.ga.j,
          originCity: place.name,
          destinationLat: place.geometry.viewport.ma.j,
          destinationLng: place.geometry.viewport.ga.j,
          destinationCity: place.name
        }
      ]
    });
    console.log("cities array", this.state.cities);
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  formatDate = () => {
    let stringDate = `${this.state.selectedDate.getDate().toString()}/${(
      this.state.selectedDate.getMonth() + 1
    ).toString()}/${this.state.selectedDate.getFullYear().toString()}`;
    return stringDate;
  };



  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>THIS WILL BE PLAN TRIP PAGE</h1>
        </Jumbotron>

 

        <DatePickTest
          handleDateChange={this.handleDateChange}
          selectedDate={this.state.selectedDate}
        />
        <PlacesWithStandaloneSearchBox
          getOrigin={this.updateLocation}
          onLocationChange={this.updateLocation}
          placeholderText="Where ya startin'?"
        />
        <PlacesWithStandaloneSearchBox
          getDestination={this.updateLocation}
          onLocationChange={this.updateLocation}
          placeholderText="Where ya goin'?"
        />
        {/* Most of code needed to pass props, needs to be tweeked */}
        {/* <Link to={`/results?originLat=${this.state.cities}&originLng=${this.state.cities}&originCity=${this.state.cities}&destinationLat=${this.state.cities}&destinationLng=${this.state.cities}&destinationCity=${this.state.cities}&date=${this.formatDate()}`}> */}

        <Link to={`/results?originLat=30.0986589&originLng=$-97.93838289999997&originCity=Austin&destinationLat=29.8666609&destinationLng=-90.1400739&destinationCity=New Orleans&date=${this.formatDate()}`}>
          <button>plan trip</button>
        </Link>
      </Container>
    );
  }
}



export default PlanTrip;

// org lat 30.0986589
// PlanTrip.js:32 org lng -97.93838289999997
// PlanTrip.js:33 org City Austin
// dest lat  29.8666609
// dest lgn -90.1400739
// dest city New Orleans

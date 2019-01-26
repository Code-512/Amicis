import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Submit from "../components/SubmitButton/submit"
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox"
import { Link } from "react-router-dom";
import DatePickTest from './datePickerTest'


class PlanTrip extends Component {
  state = {
    originLat: null,
    originLng: null,
    originCity: null,
    destinationLat: null,
    destinationLng: null,
    destinationCity: null,
    value: '',
    selectedDate: new Date()

  };

  updateLocation = (place) => {
    console.log('PLACE', place)
    this.setState({
      originLat: place.geometry.viewport.ga.j,
    originLng: null,
    originCity: null,
    destinationLat: null,
    destinationLng: null,
    destinationCity: null,
    });
    console.log('update location', this.state);
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  formatDate = () => {
    let stringDate = `${this.state.selectedDate.getDate().toString()}/${(this.state.selectedDate.getMonth() + 1).toString()}/${(this.state.selectedDate.getFullYear().toString())}`;
    console.log(stringDate)

    return stringDate;
  }

  render() {
    console.log('cool')
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
          placeholderText="Where ya startin'?" />
        <PlacesWithStandaloneSearchBox
          getDestination={this.updateLocation}
          onLocationChange={this.updateLocation}
          placeholderText="Where ya goin'?" />
        <Link to={`/results?origin=${this.state.originLat}&destination=${this.state.destination}$&date=${this.formatDate()}`}
        >
          <button>plan trip</button>
        </Link>
      </Container>

    );
  }
}


export default PlanTrip;
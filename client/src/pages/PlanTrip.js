import React, { Component } from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Submit from "../components/SubmitButton/submit"
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox"
import { Link } from "react-router-dom";
import DatePickTest from './datePickerTest'


class PlanTrip extends Component {
  state = {
    cities:[],
    value: '',
    selectedDate: new Date()

  };

  updateLocation = (place) => {
    console.log('PLACE', place)
    this.setState({
      cities:[...this.state.cities, {
        originLat: place.geometry.viewport.ma.j,
        originLng: place.geometry.viewport.ga.j,
        originCity: place.name,
        destinationLat: place.geometry.viewport.ma.j,
        destinationLng: place.geometry.viewport.ga.j,
        destinationCity: place.name
      }]
    });
    console.log('cities', this.state.cities);
    // console.log(originLng)
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
        <Link to={`/results?originLat=${this.state.cities[0].originCity}&originLng=${this.state.cities[0].originLng}&originCity=${this.state.cities[0].originCity}&destinationLat=${this.state.cities[1].destinationLat}&destinationLng=${this.state.cities[1].destinationLng}&destinationCity=${this.state.cities.[1].destinationCity}&date=${this.formatDate()}`}
        >
          <button>plan trip</button>
        </Link>
      </Container>
    );
  }
}


export default PlanTrip;
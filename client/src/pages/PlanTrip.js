import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Submit from "../components/SubmitButton/submit";
import PlacesWithStandaloneSearchBox from "../components/SearchBox/searchBox";
import { Link } from "react-router-dom";
import DatePickTest from "../components/Pickers/pickers";
import Hero from "../components/Hero/index";
import Avatar from "@material-ui/core/Avatar";
import NavAboutLogin from "../components/Nav/NavAboutLogin"

class PlanTrip extends Component {
  state = {
    cities: [],
    value: "",
    selectedDate: new Date()
  };

  updateLocation = place => {
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
    console.log("cities lat", this.state.cities[0].destinationLat);
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
      <div>
        <NavAboutLogin />
        <Hero backgroundImage="https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80">
          <br />
          <Jumbotron>
            <Avatar
              src={process.env.PUBLIC_URL + "/favicon.png"}
              style={{ margin: "auto" }}
            />
            <br />
            Plan Your Trip
            <DatePickTest
              handleDateChange={this.handleDateChange}
              selectedDate={this.state.selectedDate}
            />
            <br />
            <PlacesWithStandaloneSearchBox
              getOrigin={this.updateLocation}
              onLocationChange={this.updateLocation}
              placeholderText="Where ya startin'?"
            />
            <br />
            <PlacesWithStandaloneSearchBox
              getDestination={this.updateLocation}
              onLocationChange={this.updateLocation}
              placeholderText="Where ya goin'?"
            />
            <br />
            {/* Most of code needed to pass props, needs to be tweeked */}
            {/* <h1>destination   {!(this.state.cities[0].destinationLat) ? null: this.state.cities[0].destinationLat}</h1> */}
            
            {/* <Link to={`/results?originLat=${this.state.cities}&originLng=${this.state.cities}&originCity=${this.state.cities}&destinationLat=${this.state.cities}&destinationLng=${this.state.cities}&destinationCity=${this.state.cities}&date=${this.formatDate()}`}> */}
            <Link
              to={`/results?originLat=30.103352&originLng=-97.869392&originCity=Austin&destinationLat=29.9511&destinationLng=-90.0715&destinationCity=Houston&date=${this.formatDate()}`}
            >
              <Submit>Let's Go!</Submit>
            </Link>
          </Jumbotron>
        </Hero>
        </div>
    );
  }
}
export default PlanTrip;


import React, { Component } from 'react';

import Map, { Marker } from 'google-maps-react';

import styles from './autocomplete';

import {
  GoogleApiWrapper,
} from "google-maps-react";

class Contents extends Component {
  state = {
    positionOrigin: null,
    positionDestination: null,
    redirect: false
   
  };
  handleGo = ()=> {
    //redirect
    this.setState({
      redirect: true
    })
  }
  redirect = () => {
    if(this.state.redirect){
      return <Redirect to= {{ pathname: '/results', state: {position: this.state.position}}}/>
    } 
  }

  componentDidMount() {
    this.renderAutoCompOrigin();
    this.renderAutoCompDest();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderAutoCompOrigin();
    if (this.props !== prevProps.map) this.renderAutoCompDest();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoCompOrigin() {
    const { google, map } = this.props;
    console.log(this.props);

    if (!google || !map) return;

    const autocompOrigin = new google.maps.places.Autocomplete(
      this.autocompOrigin
    );
    autocompOrigin.bindTo("bounds", map);

    autocompOrigin.addListener("place_changed", () => {
      const place = autocompOrigin.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ positionOrigin: place.geometry.location });
    });
  }

  renderAutoCompDest() {
    const { google, map } = this.props;
    console.log(this.props);

    if (!google || !map) return;

    const autocompdest = new google.maps.places.Autocomplete(this.autocompdest);
    autocompdest.bindTo("bounds", map);

    autocompdest.addListener("place_changed", () => {
      const place = autocompdest.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ positionDestination: place.geometry.location });
      console.log(place.geometry.location)
    });
  }

  render() {
    const { positionOrigin } = this.state;
    const { positionDestination } = this.state;

    return (
      <div className={styles.flexWrapper}>
      {this.redirect()}
      <div className={styles.left}>
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="Enter a location"
                ref={ref => (this.autocompOrigin = ref)}
                type="text"
              />
              <input className={styles.button} type="submit" value="Go" />
            </form>

            <div>
              <div>Lat: {positionOrigin && positionOrigin.lat()}</div>
              <div>Lng: {positionOrigin && positionOrigin.lng()}</div>
            </div>
          </div>
          <div className={styles.flexWrapper}>
            <div className={styles.left}>
              <form onSubmit={this.onSubmit}>
                <input
                  placeholder="Enter a location"
                  ref={ref => (this.autocompdest = ref)}
                  type="text"
                />
                <input className={styles.button} type="submit" value="Go" />
              </form>

              <div>
                <div>Lat: {positionDestination && positionDestination.lat()}</div>
                <div>Lng: {positionDestination && positionDestination.lng()}</div>
              </div>
            </div>

            <div className={styles.right}>
          <Map
            {...this.props}
            center={position}
            centerAroundCurrentLocation={false}
            containerStyle={{
              height: '100vh',
              position: 'relative',
              width: '100%'
            }}>
            <Marker position={position} />
          </Map>
        </div>
      </div>
    );
  }
}

const MapWrapper = props => (
  <Map className="map" google={props.google} visible={false}>
    <Contents {...props} />
  </Map>
);
export default GoogleApiWrapper({
  // apiKey: process.env.GAPI_KEY
  apiKey: 'AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA'
})(MapWrapper);
// export default ;
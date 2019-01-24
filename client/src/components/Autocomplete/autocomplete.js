import React, { Component } from 'react';

import Map, { Marker } from 'google-maps-react';

import styles from './autocomplete';

import {
  GoogleApiWrapper,
} from "google-maps-react";

class Contents extends Component {
  state = {
    position1: null,
    position2: null
  };

  componentDidMount() {
    this.renderautoCompOrigin();
    this.renderautoCompDest();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderautoCompOrigin();
    if (this.props !== prevProps.map) this.renderautoCompDest();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderautoCompOrigin() {
    const { google, map } = this.props;
    // console.log(this.props);

    if (!google || !map) return;

    const autoCompOrigin = new google.maps.places.Autocomplete(
      this.autoCompOrigin
    );
    autoCompOrigin.bindTo("bounds", map);

    autoCompOrigin.addListener("place_changed", () => {
      const place = autoCompOrigin.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position1: place.geometry.location });
    });
  }

  renderautoCompDest() {
    const { google, map } = this.props;
    // console.log(this.props);

    if (!google || !map) return;

    const autoCompDest = new google.maps.places.Autocomplete(this.autoCompDest);
    autoCompDest.bindTo("bounds", map);

    autoCompDest.addListener("place_changed", () => {
      const place = autoCompDest.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position2: place.geometry.location });
      console.log("geometry", place.geometry.location)
    });
  }

  render() {
    const { position1 } = this.state;
    const { position2 } = this.state;
    return (
      <>
        <div className={styles.flexWrapper}>
          <div className={styles.left}>
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="Enter a location"
                ref={ref => (this.autoCompOrigin = ref)}
                type="text"
              />
              <input className={styles.button} type="submit" value="Go" />
            </form>

            <div>
              <div>Lat: {position1 && position1.lat()}</div>
              <div>Lng: {position1 && position1.lng()}</div>
            </div>
          </div>
          <div className={styles.flexWrapper}>
            <div className={styles.left}>
              <form onSubmit={this.onSubmit}>
                <input
                  placeholder="Enter a location"
                  ref={ref => (this.autoCompDest = ref)}
                  type="text"
                />
                <input className={styles.button} type="submit" value="Go" />
              </form>

              <div>
                <div>Lat: {position2 && position2.lat()}</div>
                <div>Lng: {position2 && position2.lng()}</div>
              </div>
            </div>

            <div className={styles.right}>
              <Map
                {...this.props}
                center={position1}
                centerAroundCurrentLocation={false}
                containerStyle={{
                  height: "100vh",
                  position1: "relative",
                  width: "100%"
                }}
              />
                
            </div>
          </div>
        </div>
      </>
    );
  }
}

const MapWrapper = props => (
  <Map className="map" google={props.google} visible={true}>
    <Contents {...props} />
  </Map>
);


export default GoogleApiWrapper({
  // apiKey: process.env.GAPI_KEY
  apiKey: 'AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA'
})(MapWrapper);
// export default ;

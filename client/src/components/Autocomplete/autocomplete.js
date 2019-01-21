import React, { Component } from 'react';

import Map, { Marker } from 'google-maps-react';

import styles from './autocomplete';

import {
  GoogleApiWrapper,
} from "google-maps-react";

class Contents extends Component {
  state = {
    position: null,
    redirect: false
   
  };
  // handleGo = ()=> {
  //   //redirect
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // redirect = () => {
  //   if(this.state.redirect){
  //     return <Redirect to= {{ pathname: '/results', state: {position: this.state.position}}}/>
  //   }
  // }

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position: place.geometry.location });
    });
  }

  render() {
    const { position } = this.state;

    return (
      <div className={styles.flexWrapper}>
      {/* {this.redirect()} */}
        <div className={styles.left}>
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
            />

            <input className={styles.button} type="submit" onClick={this.handleGo} value="Go" />
          </form>

          <div>
            <div>Lat: {position && position.lat()}</div>
            <div>Lng: {position && position.lng()}</div>
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
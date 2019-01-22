import React, { Component } from 'react';

import Map, { Marker } from 'google-maps-react';

import styles from './autocomplete';

import {
  GoogleApiWrapper,
} from "google-maps-react";



// class Contents extends Component {
//   state = {
//     position: null,
//     redirect: false
   
//   };
//   handleGo = ()=> {
//     //redirect
//     this.setState({
//       redirect: true
//     })
//   }
//   redirect = () => {
//     if(this.state.redirect){
//       return <Redirect to= {{ pathname: '/polyline', state: {position: this.state.position}}}
//     }
//   }

//   componentDidMount() {
//     this.renderAutoComplete();
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props !== prevProps.map) this.renderAutoComplete();
//   }

//   onSubmit(e) {
//     e.preventDefault();
//   }

//   renderAutoComplete() {
//     const { google, map } = this.props;

//     if (!google || !map) return;

//     const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
//     autocomplete.bindTo('bounds', map);

//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();

//       if (!place.geometry) return;

//       if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
//       else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);
//       }

//       this.setState({ position: place.geometry.location });
//     });
//   }

//   render() {
//     const { position } = this.state;

//     return (
//       <div className={styles.flexWrapper}>
//       {this.redirect()}
//         <div className={styles.left}>
//           <form onSubmit={this.onSubmit}>
//             <input
//               placeholder="Enter a location"
//               ref={ref => (this.autocomplete = ref)}
//               type="text"
//             />

//             <input className={styles.button} type="submit" onClick={this.handleGo} value="Go" />
//           </form>

//           <div>
//             <div>Lat: {position && position.lat()}</div>
//             <div>Lng: {position && position.lng()}</div>
//           </div>
//         </div>

//         <div className={styles.right}>
//           <Map
//             {...this.props}
//             center={position}
//             centerAroundCurrentLocation={false}
//             containerStyle={{
//               height: '100vh',
//               position: 'relative',
//               width: '100%'
//             }}>
//             <Marker position={position} />
//           </Map>
//         </div>
//       </div>
//     );
//   }
// }

// const MapWrapper = props => (
//   <Map className="map" google={props.google} visible={false}>
//     <Contents {...props} />
//   </Map>
// );
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
                {/* <Marker
                  title={"The marker`s title will appear as a tooltip."}
                  name={"SOMA"}
                  position1={{ lat: 37.778519, lng: -122.40564 }}
                />
                <Marker
                  name={"Dolores park"}
                  position1={{ lat: 37.759703, lng: -122.428093 }}
                />
                <Marker />
                <Marker
                  name={"Your position"}
                  position1={{ lat: 37.762391, lng: -122.439192 }}
                  icon={{
                    // url: "/path/to/custom_icon.png",
                    anchor: new google.maps.Point(32, 32),
                    scaledSize: new google.maps.Size(64, 64)
                  }}
                /> */}
                {/* <Marker position1={position1} /> */}
                {/* <Marker position2={position2} /> */}
              {/* </Map> */}
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
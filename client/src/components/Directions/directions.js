/*global google*/
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'



 

const MapWithADirectionsRenderer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();
  
        DirectionsService.route({
          origin: new google.maps.LatLng(41.8507300, -87.6512600),
          destination: new google.maps.LatLng(30.267153, -97.743057),
          travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
              // console.log('result',result)
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
      }
    })
  )(props =>
    <GoogleMap
      defaultZoom={7}
      defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
  
//   <MapWithADirectionsRenderer />



  export default MapWithADirectionsRenderer
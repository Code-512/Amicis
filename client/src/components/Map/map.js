/*global google*/
import React from "react";
import PlanTrip from "../../pages/PlanTrip";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA&libraries=places",
        loadingElement: <div style={{ height: `100vh` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: (
          <div style={{ height: `40vh`, width: `100%`, borderRadius: 2 }} />
        )
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          //To access long and lat or position this.props.state.position
          console.log("originLat on map page,", this.props.Orglat);
          const self = this;
          DirectionsService.route(
            {
              origin: new google.maps.LatLng(30.2672, -97.7431),
              destination: new google.maps.LatLng(29.9511, -90.0715),
              travelMode: google.maps.TravelMode.DRIVING,
              waypoints: [
                {
                   location: new google.maps.LatLng(29.7604, -95.3698)
                },
                {
                   location: new google.maps.LatLng(30.2241,-92.0198)
                }
           ]
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                // console.log('map result', result)
                this.setState({
                  directions: { ...result },
                  result: result,
                  markers: true
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            }
          );
        }
      })
    )(props => (
      <div>
        {/* {this.props.handleResult(props.directions)} */}
        <GoogleMap defaultZoom={3}>
          {props.directions && (
            <DirectionsRenderer
              directions={props.directions}
              // suppressMarkers={props.markers} />}
              suppressMarkers={props.markers}
              panel={document.getElementById("panel")}
            />
          )}
          {/* Display directions panel */}
          {/* <div id="panel"></div> */}
        </GoogleMap>
      </div>
    ));
    return <DirectionsComponent />;
  }
}
export default Map;

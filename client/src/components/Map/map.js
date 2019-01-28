/*global google*/
import React from 'react'
import PlanTrip from '../../pages/PlanTrip';
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps'
import { getOverlappingDaysInIntervals } from 'date-fns/esm';



class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handleResult: this.props.handleResult
    }
    
  }

  render() {

    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA&libraries=places",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{ height: `600px`, width: `600px` }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          //To access long and lat or position this.props.state.position
          console.log("originLat on map page,", this.props.Orglat);
          const self = this;
          DirectionsService.route({
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(30.267153, -97.7430608),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              console.log('map result', result)
              
              this.setState({
                directions: { ...result },
                result: result,
                markers: true
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <div>
        {this.state.handleResult(props.directions)}
      <GoogleMap
        defaultZoom={3}
      >
        {props.directions && <DirectionsRenderer directions={props.directions} 
        // suppressMarkers={props.markers} />}
        suppressMarkers={props.markers} panel={ document.getElementById('panel') }/>}
        {/* <div id="panel"></div> */}
      </GoogleMap>
      </div>
      
    );

  //   someFn = () => {
  //     const listInfo=this.props.callbackFromParent(listInfo)
  // }


  return (

      <DirectionsComponent
      />

    )
  }
}
export default Map
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
  }

  render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA&libraries=places",
        loadingElement: <div style={{ height: `40vh` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{ height: `40vh`, width: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
// ADD POINTS TO POLYLINE
// let map;
// let polyline = null;
// let gmarkers = [];
// var infowindow = new google.maps.InfoWindow();

// polyline.setMap(map);
//         for (var i = 0; i < gmarkers.length; i++) {
//           gmarkers[i].setMap(null);
//         }
//         //321100 meters = about 200 miles
//         var points = polyline.GetPointsAtDistance(321100);
//         for (var i = 0; i < points.length; i++) {
//           var marker = new google.maps.Marker({
//             map: map,
//             position: points[i],
//             title: i * 200 + 200 + " miles"
//           });
//           marker.addListener('click', openInfoWindow);
//           gmarkers.push(marker);
//         }
// // CREATE GAS STOPS EVERY 200 MILES
// function createMarker(latlng, label, html, color) {
//   var contentString = '<b>' + label + '</b><br>' + html;
//   var marker = new google.maps.Marker({
//     position: latlng,
//     map: map,
//     icon: getMarkerImage(color),
//     title: label,
//     zIndex: Math.round(latlng.lat() * -100000) << 5
//   });
//   marker.myname = label;
//   gmarkers.push(marker);

//   google.maps.event.addListener(marker, 'click', function () {
//     infowindow.setContent(contentString);
//     infowindow.open(map, marker);
//   });
//   return marker;
// }
// var icons = new Array();
// icons["red"] = {
//   url: "http://maps.google.com/mapfiles/ms/micons/red.png"
// };

// // DISPLAY MARKERS ON MAP
// function getMarkerImage(iconColor) {
//   if ((typeof (iconColor) == "undefined") || (iconColor == null)) {
//     iconColor = "red";
//   }
//   if (!icons[iconColor]) {
//     icons[iconColor] = {
//       url: "http://maps.google.com/mapfiles/ms/micons/" + iconColor + ".png"
//     };
//   }
//   return icons[iconColor];
// }

// // SHOW LAT/ LONG AND DISTANCE FROM ORIGIN FOR EACH 200 MI POINT
// function openInfoWindow() {
//   var contentString = this.getTitle() + "<br>" + this.getPosition().toUrlValue(6);
//   infowindow.setContent(contentString);
//   infowindow.open(map, this);
// }
// // 
// google.maps.Polyline.prototype.GetPointsAtDistance = function (miles) {
//   var next = miles;
//   var waypoints = [];
//   // Special cases
//   if (miles <= 0) return waypoints;
//   var dist = 0;
//   var oldest = 0;
//   for (var i = 1;
//     (i < this.getPath().getLength()); i++) {
//     oldest = dist;
//     dist += google.maps.geometry.spherical.computeDistanceBetween(this.getPath().getAt(i), this.getPath().getAt(i - 1));
//     while (dist > next) {
//       var p1 = this.getPath().getAt(i - 1);
//       var p2 = this.getPath().getAt(i);
//       var m = (next - oldest) / (dist - oldest);
//       waypoints.push(new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m));
//       next += miles;
//     }
//   }
// }
// 
          DirectionsService.route(
            {
              origin: new google.maps.LatLng(30.2672, -97.7431),
              destination: new google.maps.LatLng(29.9511, -90.0715),
              travelMode: google.maps.TravelMode.DRIVING,
              waypoints: [
                // {
                //   location: new google.maps.LatLng(14.546748, 121.05455)
                // },
                // {
                //   location: new google.maps.LatLng(14.552444, 121.044488)
                // }
              ]
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: result
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            }
          );
        }
      })
    )(props => (
      <GoogleMap defaultZoom={3}>
        {props.directions && (
          <DirectionsRenderer
            directions={props.directions}
            suppressMarkers={props.markers}
          />
        )}
      </GoogleMap>
    ));
    return <DirectionsComponent />;
  }
}
export default Map;

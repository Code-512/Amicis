
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
import React from "react";

const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs,
} = require("react-google-maps");

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDBfd54qyD2BoEk1fzXahImKNPT_KTW4SA&v=3.exp&libraries=geometry,drawing,places",
    // types: ['(cities)'],
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places,
          });
          this.props.onLocationChange(this.state.places[0])
        },
      })
    },
  }),
  withScriptjs
)(props =>
  <div data-standalone-searchbox="">

    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder={props.placeholderText}
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `40vw`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
  </div>
);
 export default PlacesWithStandaloneSearchBox
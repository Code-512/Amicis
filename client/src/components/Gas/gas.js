import React from "react";
import axios from "axios";
import GasCard from "../Cards/gasCard"

const h3Style = {
  color: 'white',
  textAlign: "center"
};

class Gas extends React.Component {
  state = { gaslist: "" };

  retrieveGasData = async () => {
    let long = "30.100315";

    let lat = "-97.874947";
    console.log(typeof this.props.lat);
    let res = await axios.get(
      `http://api.mygasfeed.com/stations/radius/30.100315/-97.874947/5/reg/price/esmbi7wobr.json?`
    );
    // let res = await axios.get(
    //   `http://api.mygasfeed.com/stations/radius/${lat}/${long}/5/reg/price/esmbi7wobr.json?`
    // );
    let data = await res;
    this.setState({ gaslist: data });
  };

  componentDidMount() {
    console.log("component mounted");
    this.retrieveGasData();
  }

  render() {
    return (
      <div>
        {this.state.gaslist ? <></> : <h3 style={h3Style}>Searching for gas stations...</h3>}
        {this.state.gaslist &&
          this.state.gaslist.data.stations.map((station, index) => {
            if (index < 5) {
              return (
                <div>
                {/* <div key={index}>
                   <p>{station.station} </p>
                   <p>{station.address}</p>
                   <p>
                     {station.city}, {station.region}
                   </p>
                   <p>Regular: $ {station.reg_price}</p>
                   <br />
                </div> */}
                <GasCard
                station={station.station} 
                address={station.address} city={station.city} state={station.region} regular={station.reg_price}
                />
                <br></br>
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default Gas;

import React from "react";
import axios from "axios";

class Gas extends React.Component {
  state = { gaslist: "" };

  retrieveGasData = async () => {
    let long = "30.100315";

    let lat = "-97.874947";
    console.log(typeof this.props.lat);
    let res = axios.get(
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
        {this.state.gaslist ? <h1>GAS</h1> : <h1>No Gas Data Found</h1>}
        {this.state.gaslist &&
          this.state.gaslist.data.stations.map((station, index) => {
            if (index < 5) {
              return (
                <div key={index}>
                  <p>{station.station} </p>
                  <p>{station.address}</p>
                  <p>
                    {station.city}, {station.region}
                  </p>
                  <p>Regular: $ {station.reg_price}</p>
                  <br />
                </div>
              );
            }
          })}
      </div>
    );
  }
}

export default Gas;

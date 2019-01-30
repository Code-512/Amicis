import React from "react";
import axios from "axios";
import AirCard from "../Cards/airCard";
// import Iata from '../Iata/iata';
// import iata from ".//"

const h3Style = {
  color: 'white',
  textAlign: "center"
};

class Air extends React.Component {
  state = {
    airList: []
  };

  constructor(props) {
    super(props);
    console.log("air props", props);
  }

  componentDidMount() {
    axios
      .get(
        `https://api.skypicker.com/flights?flyFrom=AUS&to=BOS&dateFrom=18/02/2019&partner=picky`
      )

      // axios
      //   .get(
      //     `http://api.skypicker.com/flights?flyFrom=AUS&to=AUS&dateFrom=${
      //       this.props.date
      //     }&partner=picky`
      //   )

      // axios.get(`https://api.skypicker.com/flights?flyFrom=${this.props.orgCode}&to=${this.props.destCode}&dateFrom=${this.props.date}&partner=picky`)

      .then(response => {
        // let airList = response.data.data
        // return airList.map(item => item.airlines[0] = iata(item.airlines[0]) )
        return response.data.data;

        // return airport code
      })
      .then(airList => {
        this.setState({
          airList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let { airList } = this.state;
    return (
      <div>
        {airList.length > 0 ? (
          airList.map((item, index) => {
            if (index < 5) {
              return (
                <div className="margin-bottom-is-20px" key={index}>
                  {/* <p>Airline: {item.airlines[0]} </p>
                  <p>Flight price: USD ${item.price}</p>
                  <p>Travel Time: {item.fly_duration}</p>
                  <br /> */}
                  {/* </div> */}
                  <AirCard
                    airline={item.airlines[0]}
                    price={item.price}
                    time={item.fly_duration}
                  />
                  <br /> 
                </div>
              );
            }
          })
        ) : (
          <h3 style={h3Style}>Searching for flights...</h3>
        )}
        {}
      </div>
    );
  }
}

export default Air;

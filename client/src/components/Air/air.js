import React from 'react';
import axios from 'axios';
import AirSimpleCard from "../Cards/airCard"

class Air extends React.Component {
  state = {
    airList: []
  };

  constructor(props) {
    super(props);
    console.log("air props", props)
  }

  componentDidMount() {
    axios
      .get(
        "https://api.skypicker.com/flights?flyFrom=AUS&to=BOS&dateFrom=18/02/2019&partner=picky"
      )

      //  axios.get(`https://api.skypicker.com/flights?flyFrom=AUS&to=AUS&dateFrom=${this.props.date}&partner=picky`)

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
        {airList.map((item, index) => {
          if (index < 5) {
            return <div className="margin-bottom-is-20px">
                {/* <p>Airline: {item.airlines[0]} </p>
                <p>Flight price: USD ${item.price}</p>
                <p>Travel Time: {item.fly_duration}</p> */}
                <br />
               <AirSimpleCard airline={item.airlines[0]} price={item.price} time={item.fly_duration}/>
<<<<<<< HEAD
              </div>
=======
              </div>;
>>>>>>> 691a4a6c54f3a452aa7869f5986be4e9c04344b5
          }
        })}
      </div>
    );
  }
}

export default Air;

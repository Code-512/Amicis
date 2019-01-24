import React from 'react';
import axios from 'axios'

class Air extends React.Component {
  state = {
    airlist: ''
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    console.log('hello from air api');
    axios.get('https://api.skypicker.com/flights?flyFrom=AUS&to=BOS&dateFrom=18/02/2019&dateTo=22/02/2019&partner=picky')
      .then((airData) => {
        this.setState({
          airlist: airData
        })
        console.log("data from air api", airData);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
      });
  }

  render() {
    return (
      <div>
        AIR



      </div>

    );
  }
}

export default Air;


// {this.state.airlist && this.state.airlist.airData.data.map((flight, index) => {
//   if (index < 5) {
//     return (
//       <div>
//         <p>Airline: {flight.airlines} </p> this is an array and codes
// <p>Flight price: USD ${flight.price}</p>
//         <p>Travel Time: {flight.fly_duration}</p>
//         <br></br>
//       </div>
//     )
//   }
// })}
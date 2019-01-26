import React from 'react';
import axios from 'axios';
import SimpleCard from "../Card/card"
// import Iata from '../Iata/iata';


// import iata from ".//" 



class Air extends React.Component {
  state = {
    airList: []
  };

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    console.log('hello from air api');
    axios.get('https://api.skypicker.com/flights?flyFrom=AUS&to=BOS&dateFrom=18/02/2019&dateTo=22/02/2019&partner=picky')
      .then(response => {
        // let airList = response.data.data
        // return airList.map(item => item.airlines[0] = iata(item.airlines[0]) )
        return response.data.data
        
        // return airport code
      })
      .then(airList => {
        this.setState({
          airList
        })
      })
      .catch((error) => {
        console.log(error);
      })

  }

  render() {
    let { airList } = this.state
    return (
      <div>
       {airList.map((item, index) => {
          if (index < 5) {
            return <div className="margin-bottom-is-20px">
                <p>Airline: {item.airlines[0]} </p>
                <p>Flight price: USD ${item.price}</p>
                <p>Travel Time: {item.fly_duration}</p>
                <br />
                <SimpleCard airline={item.airlines[0]}/>
              </div>;
          }
        })}
      </div>

    );
  }
}

export default Air;


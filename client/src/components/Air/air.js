import React from 'react';
import axios from 'axios';
import Iata from '../Iata/iata';


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
        // return airList.map(item => item.airlines[0] = Iata(item.airlines[0]) )
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
              </div>;
          }
        })}
      </div>

    );
  }
}

export default Air;


// 100:
// aTime: 1550905440
// aTimeUTC: 1550923440
// airlines: (2) ["DL", "B6"]
// baglimit: {hand_width: 35, hand_length: 55, hold_weight: 22, hand_height: 22, hand_weight: 7}
// bags_price: {1: 76}
// booking_token: "oKWrjE3p79Fphzv+baF3C2h1PDgCet9WaEXSzPuPgCEAv+on9q2YST/DjPlyl3WZuKwoHy5r5npNKffSIiTmgJkWRoKfCyGVfD4ktt8xN6OkBcotbMQLv9wnE4Ms5Kkwi1hnKP7SwCP/N7V1taP/tRbQQl4Wjde5OJ+XeKVfz3pSBuCOCmBjrkBh7K1/1xhXUab0+9AvLeb8WWgLO6z+kHcqY31W1l7HA4hwn6pODIONYMQKsr1zpCHT7ypkDXib0IJ2vHKTqh/ZyZ4Xnp1eA5r02RUoGoKTAZ7zEMqHYRB53T2WkWtOuOberO7IlROKyG0+PbWzG9xxw9UhiK0lIrUaRm0yL09Qa2JlRKMsNWzi+q0F8n9itO83nvz7QwqiOSB80zqwmGmuB28mHykbiLYeWyyelGPHsRH2D++beXL3oQ3ZmUaoofjC22codkNOP1T/Siq2NLlh3wxwd38/o4K6ChwFAMMBayH6ZPdzg8hra+1RZLJtldI6GE4qzafEx8ryTirbQj94GF+t7EAC5oOqPaWZbMY2gLjcYxVQYvmy+LSds906jk5qZlrdQP/EuRK/N9gKkMufkQeYHBwAHRfAnxz+caPWgEK3iTUNfc5qZJBn9OuNQYUik8Mzt0Zh0WuePNxHWjYCoKFE/wDlrfYj6tj0bwO8AJEqNKIFMLgkq3nd3FNf/baAfo9ptlgbbW+uLN/RRcUwvfb0RH5Vm5eI4cb8CAhOsYJhv3HoEdMBCvuFb32YLW7G+uI5dHpRG/0uOVuLnzjhgmZ9FLE+59iYjsqrOXEmXC2VVFPuLNJqzTgnXBZOL74Ugbw5Oe1hqGDG3F8wj7w6D5l1Hon9b0HltghwcZlbJLzxTjxodVE="
// cityFrom: "Austin"
// cityTo: "Boston"
// conversion: {EUR: 200}
// countryFrom: {code: "US", name: "United States"}
// countryTo: {code: "US", name: "United States"}
// dTime: 1550840280
// dTimeUTC: 1550861880
// deep_link: "https://www.kiwi.com/deep?from=AUS&to=BOS&departure=22-02-2019&flightsId=8945627105914544_0%7C8945627105914544_1%7C4535485911143378_0&price=200&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=oKWrjE3p79Fphzv+baF3C2h1PDgCet9WaEXSzPuPgCEAv+on9q2YST/DjPlyl3WZuKwoHy5r5npNKffSIiTmgJkWRoKfCyGVfD4ktt8xN6OkBcotbMQLv9wnE4Ms5Kkwi1hnKP7SwCP/N7V1taP/tRbQQl4Wjde5OJ+XeKVfz3pSBuCOCmBjrkBh7K1/1xhXUab0+9AvLeb8WWgLO6z+kHcqY31W1l7HA4hwn6pODIONYMQKsr1zpCHT7ypkDXib0IJ2vHKTqh/ZyZ4Xnp1eA5r02RUoGoKTAZ7zEMqHYRB53T2WkWtOuOberO7IlROKyG0+PbWzG9xxw9UhiK0lIrUaRm0yL09Qa2JlRKMsNWzi+q0F8n9itO83nvz7QwqiOSB80zqwmGmuB28mHykbiLYeWyyelGPHsRH2D++beXL3oQ3ZmUaoofjC22codkNOP1T/Siq2NLlh3wxwd38/o4K6ChwFAMMBayH6ZPdzg8hra+1RZLJtldI6GE4qzafEx8ryTirbQj94GF+t7EAC5oOqPaWZbMY2gLjcYxVQYvmy+LSds906jk5qZlrdQP/EuRK/N9gKkMufkQeYHBwAHRfAnxz+caPWgEK3iTUNfc5qZJBn9OuNQYUik8Mzt0Zh0WuePNxHWjYCoKFE/wDlrfYj6tj0bwO8AJEqNKIFMLgkq3nd3FNf/baAfo9ptlgbbW+uLN/RRcUwvfb0RH5Vm5eI4cb8CAhOsYJhv3HoEdMBCvuFb32YLW7G+uI5dHpRG/0uOVuLnzjhgmZ9FLE+59iYjsqrOXEmXC2VVFPuLNJqzTgnXBZOL74Ugbw5Oe1hqGDG3F8wj7w6D5l1Hon9b0HltghwcZlbJLzxTjxodVE="
// distance: 2732.71
// duration: {total: 61560, return: 0, departure: 61560}
// facilitated_booking_available: true
// flyFrom: "AUS"
// flyTo: "BOS"
// fly_duration: "17h 6m"
// found_on: ["deprecated"]
// has_airport_change: false
// id: "8945627105914544_0|8945627105914544_1|4535485911143378_0"
// mapIdfrom: "austin"
// mapIdto: "boston"
// nightsInDest: null
// p1: 1
// p2: 1
// p3: 1
// pnr_count: 2
// price: 200
// quality: 348.799628
// route: (3) [{…}, {…}, {…}]
// routes: [Array(2)]
// transfers: []
// type_flights: (2) ["GDS", "lcc-B6"]
// __proto__: Object
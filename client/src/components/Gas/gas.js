import React from 'react';
import axios from 'axios'

class Gas extends React.Component {
  state = {
      gaslist: ''
  };

  constructor(props){
    super(props)
  }

  componentDidMount(){
      
    console.log('hello from gas api');
    axios.get(`http://api.mygasfeed.com/stations/radius/${this.props.lat}/${this.props.lng}/5/reg/price/esmbi7wobr.json?`)
    .then( (data) => {
      // handle success
      
          this.setState({
                  gaslist: data
              })
              console.log("data from gas api", data);        
    })
    .catch( (error) =>{
      // handle error
      console.log(error);
    })
    .then( ()=> {
      // always executed
      
    });
  }
    
  render() {
      return (
        <div>
          GAS
        {this.state.gaslist && this.state.gaslist.data.stations.map( (station, index) => { 
          if (index < 5 ) {
          return (
            <div>
            <p>Station: {station.station} </p>
            <p>City: {station.city}</p>
            <p>Distance: {station.distance}</p>
            <p>Cost: {station.reg_price}</p>
            </div>
          ) 
        }
        })}
      
        </div>

      );
    }
}    

export default Gas;

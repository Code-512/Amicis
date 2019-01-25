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
    axios.get(`http://api.mygasfeed.com/stations/radius/${this.props.lat}/${this.props.lng}/5/reg/price/esmbi7wobr.json?`)
    .then( (data) => {
          this.setState({
                  gaslist: data
              })
    })
    .catch( (error) =>{
      console.log(error);
    })
    .then( ()=> {
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
            <p>{station.station} </p>
            <p>{station.address}</p>
            <p>{station.city}, {station.region}</p>
            <p>Regular: $ {station.reg_price}</p>
            <br></br>
            </div>
          ) 
        }
        })}
      
        </div>

      );
    }
}    

export default Gas;

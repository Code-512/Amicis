

import React from 'react';
import axios from 'axios'

class Gas extends React.Component {
    state = {
        gaslist: ''
    };
    componentDidMount(){
      console.log('hello');
        // this.props.lat
        // this.props.long
        axios.get('http://api.mygasfeed.com/stations/radius/30.394217/-97.833953/20/reg/price/esmbi7wobr.json?', function(data){
            this.setState({
                gaslist: data
            })
        })
    }
    render(){
        return(<div>
            {
                this.state.gaslist ? 
                this.state.gaslist.map(ele => {
                    return(`<div>
                     ${ele.station}
                     <p>${ele.region}</p>
                    </div>`)
                })
                :
                "No stations found"
            }
        </div>)
    }
}

export default Gas;


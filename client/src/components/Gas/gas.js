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
        axios.get('http://api.mygasfeed.com/stations/radius/30.394217/-97.833953/20/reg/price/esmbi7wobr.json?')
        .then(function (data) {
          // handle success
          console.log(response);
              this.setState({
                      gaslist: data
                  })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          console.log("All done")
        });
        
    }
        render(){
            return(<div>
                
            </div>)
        }
    }

export default Gas;

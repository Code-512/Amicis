import React from 'react';
import axios from 'axios'

class Air extends React.Component {
    state = {
        airlist: ''
    };
    componentDidMount(){
        
            console.log('hello from air api');
              // this.props.lat
              // this.props.long
              axios.get('https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2018&dateTo=12/12/2018&partner=picky')
              .then( (data) => {
                // handle success
                console.log("data from air api", data);
                    this.setState({
                            airlist: data
                        })
                        
              })
              .catch( (error) =>{
                // handle error
                console.log(error);
              })
              .then( ()=> {
                // always executed
                console.log("All done from air api")
              });
            }
    


            render() {
                return (
                  <div>AIR</div>
                  
                );
              }
             }    

export default Air;
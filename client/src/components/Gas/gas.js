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
              .then( (data) => {
                // handle success
                console.log("data", data);
                    this.setState({
                            gaslist: data
                        })
                        
              })
              .catch( (error) =>{
                // handle error
                console.log(error);
              })
              .then( ()=> {
                // always executed
                console.log("All done")
              });
            }
    


            render() {
                return (
                  <div>HI</div>
                );
              }
             }    

export default Gas;


// import React from 'react';
// import axios from 'axios'

// class Gas extends React.Component {
    
//       state = {
//         persons: []
//       }
    
//       componentDidMount() {
//         axios.get(`https://jsonplaceholder.typicode.com/users`)
//           .then(res => {
//             const persons = res.data;
//             this.setState({ persons });
//           })
         
//       }
    
//       render() {
//         return (
//           <ul>
//             { this.state.persons.map(person => <li>{person.name}</li>)}
//           </ul>
//         )
//       }
//     }

// export default Gas;

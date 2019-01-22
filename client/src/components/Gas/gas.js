import React from 'react';
import axios from 'axios'

class Gas extends React.Component {
    state = {
        gaslist: ''
    };
    componentDidMount(){
        
            console.log('hello from gas api');
              // this.props.lat
              // this.props.long
              axios.get('http://api.mygasfeed.com/stations/radius/30.394217/-97.833953/20/reg/price/esmbi7wobr.json?')
              .then( (data) => {
                // handle success
                console.log("data from gas api", data);
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
                console.log("All done from gas api")
              });
            }
    


            render() {
                return (
                  <div>GAS</div>



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
//             <div>HI</div>
//           <ul>
//             { this.state.persons.map(person => <li>{person.name}</li>)}
//           </ul>
//         )
//       }
//     }

// export default Gas;

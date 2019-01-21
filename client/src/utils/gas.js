import React from "react";
import axios from "axios";

class Gas extends React.Component {
 state = {
   gaslist: ""
 };
 componentDidMount() {
   // this.props.lat;
   // this.props.long;
   axios
     .get(
       "http://api.mygasfeed.com/stations/radius/29.7604/-95.3698/20/reg/price/esmbi7wobr.json?"
     )
     .then(res => {
       console.log(res);
       this.setState({
         gaslist: res.data
       });
     });
 }
 render() {
   return (
     <ul>
       {this.state.gaslist.map(gaslist => (
         <li key={gaslist.station}>{gaslist.region}</li>
       ))}
     </ul>
   );
 }
}

export default Gas;
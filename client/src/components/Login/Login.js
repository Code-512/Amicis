import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    state  = {
        name: "",
        password: "",
        userDetails: {
            
        }
    }
    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ 
            [name]: value
        })
    }
    handleSubmit = () => {
    axios.get('/api/login', {
        params: 
            {name: this.state.name, password: this.state.password }
      })
      .then( response => {
        console.log(response.data[0])
        this.setState({userDetails: response.data[0]})
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });

    }

    render(){
        return (
        <div>

            <input placeholder="username" 
            value={this.state.name}
            name="name"
            onChange={this.handleChange}/>

            <input placeholder="password" 
            value={this.state.password}
            name="password" 
            onChange={this.handleChange}/>

            <button onClick={this.handleSubmit}>Login</button>

            <a href="/registration"> Need an account? </a>

            <div>

            { this.state.userDetails.name ? <h1> Hi {this.state.userDetails.name}</h1> : <div>You need to Login!</div>}

            </div>
        </div>
        )
    }
}




export default Login
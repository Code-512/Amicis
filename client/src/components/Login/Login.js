import React from 'react';
import axios from 'axios';
import Footer from "../Footer";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import Hero from '../Hero';
// import favicon from '../../public/favicon.png'
import LoginCard from './LoginCard'


class Login extends React.Component {
    state  = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userDetails: {
        }
    }
    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ 
            [name]: value
        })
        console.log(event.target)
    };

    handleSubmit = e => {
        e.preventDefault()
        //add a check for all the params you're sending if(this.state.name) etc...
    axios.get('/api/user/login', {
        params: 
            {email: this.state.name, password: this.state.password }
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
                <Hero backgroundImage="https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80">
                    <br/>
                    <LoginCard
                        name={this.state.userDetails.firstName}
                        handleSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                        email={this.state.email}
                        password={this.state.password} />
                        </Hero>
                <Footer />
            </div>
        )
    }
}  
export default Login
        {/* {this.state.userDetails.firstName ? <h1 className="h3 mb-3 font-weight-normal"> Hi {this.state.userDetails.firstName}</h1> : <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>} */}
        {/* <input type="email"
        id="inputEmail"
        className="form-control"
    placeholder="Email address"
    required autofocus
    value={this.state.email}
    name="email"
    onChange={this.handleChange}
/>
<input type="password"
    id="inputPassword"
    className="form-control"
    placeholder="Password"
    value={this.state.password}
    name="password"
    onChange={this.handleChange}
    required
/>
<button 
    className="btn btn-lg btn-primary btn-block" 
    onClick={this.handleSubmit}
    type="submit">Sign in
</button> */}
{/* <a href="/registration"> Need an account? </a> */}
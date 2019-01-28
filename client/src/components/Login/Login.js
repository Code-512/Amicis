import React from 'react';
import axios from 'axios';
import Footer from "../Footer";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import Hero from '../Hero';


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
    handleSubmit = () => {
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
              <Row>
                <Col size="md-12">
                 <Hero backgroundImage="https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80">
                </Hero>
                </Col>
              </Row>
        
        <img className="mb-4" 
        src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/bootstrap-solid.svg"
        alt="" width="72" height="72">
        </img>

        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

            <input type="email" 
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
            type="submit">Sign in</button>

            <a href="/registration"> Need an account? </a>

            <div>

            { this.state.userDetails.firstName ? <h1> Hi {this.state.userDetails.firstName}</h1> : <div>You need to Login!</div>}

            </div>
        <Footer />
        </div>
        )
    }
}




export default Login
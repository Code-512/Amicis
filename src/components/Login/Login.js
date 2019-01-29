import React from 'react';
import axios from 'axios';
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";


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
            <Container fluid>
              <Row>
                <Col size="md-12">
                 <Jumbotron>
                </Jumbotron>
        <div>

            <input placeholder="email" 
            value={this.state.email}
            name="email"
            onChange={this.handleChange}/>

            <input placeholder="password" 
            value={this.state.password}
            name="password" 
            onChange={this.handleChange}/>

            <button onClick={this.handleSubmit}>Login</button>

            <a href="/registration"> Need an account? </a>

            <div>

            { this.state.userDetails.firstName ? <h1> Hi {this.state.userDetails.firstName}</h1> : <div>You need to Login!</div>}

            </div>
        </div>
            </Col>
          </Row>
        </Container>
        )
    }
}




export default Login
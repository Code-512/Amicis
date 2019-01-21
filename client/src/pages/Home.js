import React from 'react';
// import Container from "../components/Container"
// import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Hero from '../components/Hero';

function Home() {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1508495761350-6a8bf2a2128a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80">
             <h1>TripAround V2.0</h1>
             <h2>We're back, and better than ever</h2>
            </Hero>
             <Container style={{ marginTop: 30 }}>
             <h2>Welcome to TripAroundV2.0</h2>
             </Container>
              <Row>
                <Col size="md-12">
                
                </Col>
              </Row>

        </div>
    )
}

export default Home;
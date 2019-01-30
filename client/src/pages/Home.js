import React from 'react';
import Footer from '../components/Footer'
import './Home.css'
import { Col, Row, Container } from "../components/Grid";
import Hero from '../components/Hero';
import Middle from '../components/Middle';

function Home() {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1508495761350-6a8bf2a2128a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80">
             <div className="center-div-text">
                <h1 className="featurette-heading ">TripAround V2.0</h1>
                <h2 className="featurette-heading"><span className="text-secondary">it's. gonna. blow. your.<span className="hover-king"> fuh-king. </span> mind.</span> </h2>
                <p className="featurette-heading"></p>
             </div>
            </Hero>
             <Container style={{ marginTop: 30 }}>
             <h2>Welcome to TripAroundV2.0</h2>
             </Container>
              <Row>
                <Col size="md-12">
                
                </Col>
              </Row>
              <Middle />
            <Footer />
        </div>
    )
}

export default Home;
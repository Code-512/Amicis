import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";
import Gas from "../components/Gas/gas";
import Air from "../components/Air/air";

function Results() {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Results</h1>
      </Jumbotron>
      <Map />
      <Row>
        <Col size="md-6">
          <Gas lat={30.2672} lng={-97.7431} />
        </Col>
      <Col size="md-6 sm-12">
          <Air  />
        </Col>
      </Row>
    </Container>
  );
}

export default Results;

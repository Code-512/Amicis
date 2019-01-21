import React from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";

function Results() {
  return (
    <Container fluid>
          <Jumbotron>
            <h1>Results</h1>
          </Jumbotron>
          <Map />
    </Container>
  );
}

export default Results;
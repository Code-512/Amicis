import React from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map/map";
import Gas from "../utils/gas";

function Results() {
  return (
    <Container fluid>
          <Jumbotron>
            <h1>Results</h1>
          </Jumbotron>
          <Map />
          <Gas />
    </Container>
  );
}

export default Results;
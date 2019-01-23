import React from "react";
import { Container } from "../components/Grid";
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
          <Gas lat={40.741895} lng={-73.989308}/>
          <Air />
    </Container>
  );
}

export default Results;
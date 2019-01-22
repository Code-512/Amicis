import React from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MapWrapper from '../components/Autocomplete/autocomplete';


function PlanTrip() {
  return (
    <Container fluid>
          <Jumbotron>
            <h1>THIS WILL BE PLAN TRIP PAGE</h1>
            <MapWrapper />
          </Jumbotron>
    </Container>
  );
}

export default PlanTrip;
import React from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import MapWrapper from '../components/Autocomplete/autocomplete';
import Gas from "../utils/gas";

function PlanTrip() {
  return (
    <Container fluid>
          <Jumbotron>
            <h1>THIS WILL BE PLAN TRIP PAGE</h1>
            <MapWrapper />
            <Gas />
            {/* <gasApi lat="234234" long='23434234' /> */}
          </Jumbotron>
    </Container>
  );
}

export default PlanTrip;
import React from "react";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DatePickers from "../components/Datepicker/datepicker"
import MapWrapper from '../components/Autocomplete/autocomplete';


function PlanTrip() {
  return (
    <Container fluid>
          <Jumbotron>
            <h1>THIS WILL BE PLAN TRIP PAGE</h1>
            
          </Jumbotron>
          <DatePickers />
          <MapWrapper />
    </Container>
  );
}

export default PlanTrip;
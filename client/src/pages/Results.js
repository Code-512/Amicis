import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Map from "../components/Map/map";
import Gas from "../components/Gas/gas";
import Air from "../components/Air/air";
import PaperSheet from "../components/Paper/paper";
import NavPlan from "../components/Nav/NavPlan";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      originLat: "",
      originLng: "",
      originCity: "",
      destinationLat: "",
      destinationLng: "",
      destinationCity: "",
      driveDist: "",
      driveTime: ""
    };
  }

  componentDidMount() {
    const newParams = new URLSearchParams(this.props.location.search);
    const originLat = newParams.get("originLat");
    const originLng = newParams.get("originLng");
    const originCity = newParams.get("originCity");
    const destinationLat = newParams.get("destinationLat");
    const destinationLng = newParams.get("destinationLng");
    const destinationCity = newParams.get("destinationCity");
    const date = newParams.get("date");

    this.setState({
      date,
      originLat,
      originLng,
      originCity,
      destinationLat,
      destinationLng,
      destinationCity
    });
  }
  handleResult = result => {
    if (result) {
      // console.log(
      //   "distance array on results page",
      //   result.routes[0].legs[0].distance.text
      // );
      // console.log("time array on results page", result.routes[0].legs[0].duration.text)
      this.setState({
        driveDist: result.routes[0].legs[0].distance.text,
        driveTime: result.routes[0].legs[0].duration.text
      });
    }
  };
  render() {
    return (
      <div style={{ backgroundColor: "#588BAE", padding: 0, margin: 0 }}>
        <NavPlan />
        <Map />
        <Container style={{ padding: 20 }}>
          <br />
          <Row>
            <Col size="md-6 sm-12">
              <PaperSheet
                driveTitle={"Driving Results"}
                driveDist={"517 miles"}
                driveTime={"Travel Time: 7 hours, 58 minutes"}
                driveCost={"Cost: $41.36"}
              />
              <br />
              <Gas lat={30.2672} lng={-97.7431} />
            </Col>
            <Col size="md-6 sm-12">
              <PaperSheet
                airTitle={"Flight Results"}
                airDist={"517 miles"}
                empty={""}
              />
              <br />
              <Air />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Results;

// All of these need to be parsed before they can be sent

//           DATE: {this.state.date}
//           Distance of trip: {this.state.driveDist}
//           Drive time: {this.state.driveTime}
//           originLat {this.state.originLat}
//           originLng {this.state.originLng}
//           {/* <Map callbackFromParent={this.myCallback.bind(this)}/> */}
//           {/* <Map handleResult={this.handleResult} Orglat={30.0986589}/> */}
//           <Gas
//           lat={parseFloat(this.state.originLat)}
//           lng={parseFloat(this.state.originLng)}
//           distance={this.state.driveDist}
//           time={this.state.driveTime}
//           />
//           {/* <Air orgCode={"AUS"} destCode={"BOS"} date={"21/3/2019"}/> */}
//           {/* <Air date={"21/10/2019"}/> */}

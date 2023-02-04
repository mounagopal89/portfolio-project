import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import React from "react";
const Weather = () => {
  return (
    <Container>
      <Row>
        <Col sm={8} lg={6}>
          Weather
        </Col>
        <Col sm={4} lg={6}>
          Climate
        </Col>
      </Row>
      <Row>
        <Col sm={3}>Weather</Col>
        <Col sm={3}>Climate</Col>
      </Row>
    </Container>
  );
};

export default Weather;

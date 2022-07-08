import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Details = (props) => {
  const {item} = props;
  console.log("item:",item)
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Row></Row>
              <Row></Row>
              <Image src={item.image} roundedCircle style={{height:"6vh", width:"5vw"}}/>
            </Col>
            <Col xs={8} md={4}>
              <Row><p class="fw-bold">{item.name}</p></Row>
              <Row><p class="fw-light">{item.status=="Alive"?<span style={{color:"#13ec66"}}>●</span>:<span style={{color:"#757472"}}>●</span>}{item.status}</p></Row>
              
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={6}>
              <Row > <p class="fw-light">Gender</p></Row>
              <Row> <p class="fw-bold">{item.gender}</p></Row>
            
            </Col>
            <Col xs={6} md={6}>
              <Row> <p class="fw-light">Location</p></Row>
              <Row> <p class="fw-bold">{item.location.name}</p></Row>
              
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Row> <p class="fw-light">Species</p></Row>
              <Row> <p class="fw-bold">{item.species}</p></Row>
             
            </Col>
            <Col xs={6} md={6}>
              <Row> <p class="fw-light">Origin</p></Row>
              <Row> <p class="fw-bold">{item.origin.name}</p></Row>
             
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    
    </Modal>
  );
};

export default Details;

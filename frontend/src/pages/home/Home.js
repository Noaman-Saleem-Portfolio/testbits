import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Menubar from "../../components/menubar/Menubar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./home.css";

const Home = () => {
  const [testContainer, setTestContainer] = useState("");
  return (
    <div className="home-page">
      <Menubar></Menubar>
      <Container>
        <div className="hero">
          <h1 className="choose">Choose Your Test</h1>
          <div className="test-category-container">
            <div
              className="test-category"
              onClick={() => setTestContainer("subjectWise")}>
              Subject Wise Tests
            </div>
            <div
              className="test-category"
              onClick={() => setTestContainer("ecat")}>
              ECAT
            </div>
            <div
              className="test-category"
              onClick={() => setTestContainer("mcat")}>
              MCAT
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="test-section" style={{ padding: "20px 0px" }}>
          {testContainer === "subjectWise" ? (
            <div className="tests-container">
              <div className="test test-biology">Biology Test Preparation</div>
              <div className="test test-physics">Physics Test Preparation</div>
              <div className="test test=chemistry">
                Chemistry Test Preparation
              </div>
              <div className="test test-english">English Test Preparation</div>
            </div>
          ) : (
            ""
          )}

          {testContainer === "ecat" ? (
            <Card className="text-center">
              <Card.Header>ECAT</Card.Header>
              <Card.Body>
                <Card.Title>Engineering Entrance Test Preparation</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ) : (
            ""
          )}

          {testContainer === "mcat" ? (
            <Card className="text-center">
              <Card.Header>MCAT</Card.Header>
              <Card.Body>
                <Card.Title>
                  Medical Coleges Entrance Test Preparation
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;

import React from "react";
import { Container, Row } from "react-bootstrap";

const Summary = () => {
  return (
    <section id="summary">
      <Container className="my-5 my-5">
        <Row className="my-5 py-5">
          <div className="col-12 my-5 d-lg-flex flex-wrap justify-content-around text-secondary">
            <h2 className="text-center p-3 border border-success">
              {" "}
              <i className="fas fa-heart text-light-green"></i>{" "}
              <span className="text-cyan">9+ Packages</span>
            </h2>
            <h2 className="text-center p-3 border border-success">
              {" "}
              <i className="fas fa-diagnoses text-light-green"></i>{" "}
              <span className="text-cyan">1400+ Students</span>
            </h2>
            <h2 className="text-center p-3 border border-success">
              {" "}
              <i className="fas fa-hand-holding-heart text-light-green"></i>{" "}
              <span className="text-cyan">27+ Trainers</span>
            </h2>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Summary;

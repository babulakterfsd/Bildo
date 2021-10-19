import React from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import "./Process.css";
import ProcessImg from "../../Assets/Images/mainbg.jpg";
import Guide1 from "../../Assets/Images/trainer1.jpg";
import Guide2 from "../../Assets/Images/trainer2.jpg";
import Guide3 from "../../Assets/Images/trainer3.jpg";
import Guide4 from "../../Assets/Images/trainer4.jpg";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <>
      <section id="process-banner" className="py-5">
        <h2 className="text-center text-abril-white">
          Joining With Us Is Easy
        </h2>
      </section>

      <section className="step py-lg-5 my-lg-5">
        <Container>
          <Row>
            <div className="col-12 col-md-10 mx-auto">
              <div className="d-none d-lg-flex align-items-center">
                <i className="far fa-check-circle fa-3x text-light-green me-3"></i>
                <h3 className="text-cyan me-3">Enroll</h3>
                <hr className="w-25" />
                <i className="fas fa-user-check fa-3x text-light-green mx-3"></i>
                <h3 className="text-cyan me-3">Verification</h3>
                <hr className="w-25" />
                <i className="fas fa-money-check-alt fa-3x text-light-green mx-3"></i>
                <h3 className="text-cyan me-3">Payment</h3>
                <hr className="w-25" />
                <i className="far fa-smile-wink fa-3x text-light-green mx-3"></i>
                <h3 className="text-cyan ">Start</h3>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="process" className="py-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8">
              <img src={ProcessImg} alt="about in home" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-4 d-flex flex-wrap align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div>
                <h6 className="text-light-green mb-3">Enroll Now</h6>
                <h2 className="abril-font mb-3">
                  Choose From Our Awesome Packages
                </h2>
                <p className="text-secondary mb-3">
                  The first and foremost reason that gym class is so important
                  is because of the physical activity. Gym provided us with
                  exercise daily.It is not just physical benefits though, gym
                  also gives us mental benefits which helps us think and
                  function better in our everyday lives.The first and foremost
                  reason that gym class is so important is because of the
                  physical activity. Gym provided us with exercise daily.
                </p>
                <Link to="/allpackages">
                  <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                    Choose A Package
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="team" className="pt-5 mt-lg-5">
        <Container>
          <Row>
            <h6 className="text-light-green text-center">Our Trainers</h6>
            <h2 className="text-center abril-font">
              Our Trainers Are Professional
            </h2>
            <p className="text-center mb-3 mb-lg-5">
              As a personal trainer, your biggest bottleneck is your own time.
              Building a reputation as a team leader for group exercises is one
              of the best ways As a personal trainer, your biggest bottleneck is
              your own time. Building a reputation as a team leader for group
              exercises is one of the best ways
            </p>
          </Row>
        </Container>
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide1} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Jhon Daniel
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab trainer fa-google text-light-green me-4"></i>
                    <i className="fab trainer fa-facebook text-light-green me-4"></i>
                    <i className="fab trainer fa-twitter text-light-green me-4"></i>
                    <i className="fab trainer fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide2} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Alex Febrico
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab trainer fa-google text-light-green me-4"></i>
                    <i className="fab trainer fa-facebook text-light-green me-4"></i>
                    <i className="fab trainer fa-twitter text-light-green me-4"></i>
                    <i className="fab trainer fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide3} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Ercia Xenifar
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab trainer fa-google text-light-green me-4"></i>
                    <i className="fab trainer fa-facebook text-light-green me-4"></i>
                    <i className="fab trainer fa-twitter text-light-green me-4"></i>
                    <i className="fab trainer fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src={Guide4} />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Nadi Sabriham
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab trainer fa-google text-light-green me-4"></i>
                    <i className="fab trainer fa-facebook text-light-green me-4"></i>
                    <i className="fab trainer fa-twitter text-light-green me-4"></i>
                    <i className="fab trainer fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter></NewsLetter>
    </>
  );
};

export default Process;

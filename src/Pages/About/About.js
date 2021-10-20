import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImg from "../../Assets/Images/gymabout.png";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about-banner" className="py-5">
        <h2 className="text-center text-abril-white">About Us</h2>
      </section>
      <section id="about-us" className="py-5">
        <Container className="text-center">
          <Row>
            <h3 className="text-center display-2 mb-5">
              <span className="abril-font">
                <span style={{ color: "#00D690 " }}>WE ARE</span> GymZilla
              </span>
            </h3>
          </Row>
          <Row className="my-5">
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-thumbs-up text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Lots Of Equipments</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan mb-5 mb-lg-0">
                Sponsorships are like unicorns or leprechauns, talked about
                often but they don’t exist. There is one dollars Sponsorships
                are like unicorns or leprechauns, talked about often but they
                don’t exist. There is one dollars
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-heart text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">We Motivate You</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan mb-5 mb-lg-0">
                My response usually harsh. Offended at the that a career that’s
                taken more than a decade to create could beMy response usually
                harsh. Offended at the that a career that’s taken more than a
                decade to create
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-hands-helping text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Great Trainers</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan mb-5 mb-lg-0">
                I have always made a living to make movies, never the other way
                around.I first I washed dishes in a seafoodI have always made a
                living to make movies, never the other way around.I first I
                washed dishes in a seafood
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-universal-access text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Expected Output</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              ></div>
              <p className="text-cyan">
                Sponsorships are like unicorns or leprechauns, talked about
                often but they don’t exist. There is one dollars Sponsorships
                are like unicorns or leprechauns, talked about often but they
                don’t exist. There is one dollars
              </p>
            </div>
          </Row>
        </Container>
      </section>

      <section className="py-5 mt-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8">
              <img src={AboutImg} alt="about in home" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-4 d-flex flex-wrap align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div>
                {/* <h6 className="text-light-green mb-3">About Us</h6> */}
                <h2 className="abril-font mb-3 display-1">
                  Build Body With Us
                </h2>
                <p className="text-secondary mb-3">
                  Donec dapibus mauris id odio ornare tempus. Duis sit amet
                  accumsan justo, quis tempor ligula. Quisque quis pharetra
                  felis. Ut quis consequat orci, at consequat felis. Suspendisse
                  auctor laoreet placerat.
                </p>
                <Link to="/allpackages">
                  <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                    See Our Packages
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default About;

import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutInHomeOverlayImg from "../../../Assets/Images/girls-gym-handup.jpg";

const AboutInHome = () => {
  return (
    <section id="about-in-home" className="py-5 my-5">
      <Container>
        <Row>
          <div className="col-12 col-md-8">
            <img
              src={AboutInHomeOverlayImg}
              alt="about in home"
              className="img-fluid"
            />
          </div>
          <div
            className="col-12 col-md-4 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div>
              <h6 className="text-light-green mb-3">Who We Are</h6>
              <h2 className="abril-font mb-2">
                YOU BIULD YOUR BODY, WE JUST HELP
              </h2>
              <p className="text-secondary mb-3">
                Here at Gym and Fitness, we have a team of approximately forty
                awesome superstars and we owe our success to each and every one
                of them! Because we hire for culture first and foremost, we have
                some pretty awesome people working with us who hustle everyday
                to give you a positive customer experience. You can find them in
                areas such as sales, marketing and ecommerce, customer service,
                warehousing, finance, human resources and management.
              </p>
              <Link to="/about">
                <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                  More About Us
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutInHome;

import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <div className="col-12">
            <div
              className="px-lg-5 d-flex align-items-center justify-content-between"
              style={{ minHeight: "100vh" }}
            >
              <div>
                <h1 className="text-white display-1 fw-bolder px-2 mb-4 pt-3 pt-md-0">
                  Don’t be a brat, burn that fat! Build Yourself.
                </h1>
                <p className="text-white px-2">
                  The first and foremost reason that gym class is so important
                  is because of the physical activity. Gym provided us with
                  exercise daily. ... It is not just physical benefits though,
                  gym also gives us mental benefits which helps us think and
                  function better in our everyday lives.
                </p>
                <Link to="/allpackages">
                  <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                    See Our Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

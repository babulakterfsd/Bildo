import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import "./Events.css";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import { Link } from "react-router-dom";

const Evenets = () => {
  return (
    <>
      <section id="events-banner" className="py-5">
        <h2 className="text-center text-abril-white">Running Events</h2>
      </section>
      <section id="events" className="py-5">
        <Container>
          <Row>
            <h6 className="text-light-green text-center">Get Offer</h6>
            <h2 className="text-center abril-font">
              Our Awesome Events Are Running
            </h2>
            <p className="text-center px-2 px-lg-5">
              Running Offers and Discounts · To create offers and discounts for
              your store, first Navigate to Shop on the left side of the panel.
              · Click on New button to create.Running Offers and Discounts · To
              create offers and discounts for your store.
            </p>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className="col-12 col-md-10 mx-auto">
              <div className="offer-card d-flex justify-content-center py-5">
                <Card className="p-md-3 shadow">
                  <Card.Body>
                    <Card.Title className="text-success">
                      <span className="text-danger fw-bold">65%</span> for
                      Discount Covid-19 Survivors !
                    </Card.Title>
                    <div className="text-secondary">
                      Survivor Corps is one of the largest and fastest growing
                      grassroots movements connecting, supporting, educating,
                      motivating and mobilizing COVID-19 Survivors to.
                      <p className="text-success fw-semi-bold">
                        Use this promo : U25YCH
                      </p>
                    </div>
                    <Link to="/allpackages" className="text-decoration-none">
                      <Button className="btn-success">See Our Packages</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Row>
          <Row>
            <div className="col-12 col-md-10 mx-auto">
              <div className="offer-card d-flex justify-content-center py-5">
                <Card className="p-md-3 shadow">
                  <Card.Body>
                    <Card.Title className="text-success">
                      <span className="text-danger fw-bold">50%</span> for
                      Discount School Students !
                    </Card.Title>
                    <div className="text-secondary">
                      Survivor Corps is one of the largest and fastest growing
                      grassroots movements connecting, supporting, educating,
                      motivating and mobilizing COVID-19 Survivors to.
                      <p className="text-success fw-semi-bold">
                        Use this promo : U95YCH
                      </p>
                    </div>
                    <Link to="/allpackages" className="text-decoration-none">
                      <Button className="btn-success">See Our Packages</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Evenets;

import React from "react";
import { Container, Row, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import user1 from "../../../Assets/Images/student1.jpg";
import user2 from "../../../Assets/Images/student2.jpg";
import user3 from "../../../Assets/Images/student3.jpg";
import "./UserReview.css";

const UserReview = () => {
  return (
    <section
      id="review"
      className="py-5 my-5"
      style={{ backgroundColor: "#F5FBF9" }}
    >
      <Container>
        <Row className="mt-5">
          <div
            className="col-12 col-md-6 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div>
              <h6 className="text-light-green mb-3">Students Feedback</h6>
              <h2 className="abril-font mb-3">
                Our Students Are Important To Us
              </h2>
              <p className="text-secondary mb-3 px-md-2">
                Feedback is predominately negative, studies have shown that it
                can discourage student effort and achievement (Hattie and
                Timperley, 2007, Dinham). In my experience, the only thing I
                knew is that I hated public speaking and I would do anything
                possible to get out of it. As a teacher, most of the time it is
                easy to give encouraging, positive feedback. knew is that I
                hated public speaking and I would do anything possible to get
                out of it. As a teacher.
              </p>
              <Link to="/process">
                <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                  Know Joining Process
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-wrap usercarousel">
            <Carousel className=" pt-5 pt-md-0">
              <Carousel.Item>
                <div className="single-item text-center">
                  <img src={user1} alt="user1" className="userimg" />
                  <h6 className="abril-font my-3">BENJIR WALTON</h6>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                  </div>
                  <p className="text-secondary px-md-2">
                    Feedback is any response regarding a student's performance
                    or behavior. It can be verbal, written or gestural. The
                    purpose of feedback in the assessment and
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="single-item text-center">
                  <img src={user2} alt="user1" className="userimg" />
                  <h6 className="abril-font my-3">AUSTIN ZOZO</h6>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                  </div>
                  <p className="text-secondary px-md-2">
                    Feedback is any response regarding a student's performance
                    or behavior. It can be verbal, written or gestural. The
                    purpose of feedback in the assessment and
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="single-item text-center">
                  <img src={user3} alt="user1" className="userimg" />
                  <h6 className="abril-font my-3">DIMITRI MENDELIF</h6>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                    <i className="fas fa-star text-light-green mb-1"></i>
                  </div>
                  <p className="text-secondary">
                    Feedback is any response regarding a student's performance
                    or behavior. It can be verbal, written or gestural. The
                    purpose of feedback in the assessment and
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default UserReview;

import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetData from "../../../Assets/hooks/getData";
import SinglepackageCard from "../../AllPackages/SinglePackageCard/SinglepackageCard";

const PopularPackages = () => {
  const [packDetails] = GetData();

  return (
    <section
      id="popular-packages"
      className="pt-5 mt-5"
      style={{ background: "#F5FBF9" }}
    >
      <Container>
        <Row className="mt-5">
          <h6 className="text-light-green text-center">Popular Packages</h6>
          <h2 className="text-center abril-font">Our Popular Packages</h2>
          <p className="text-center">
            Gym and Fitness was founded in 2002 as a family owned and operated
            business. The Gym and Fitness founders didn’t want it to be just
            another gym equipment retailer - they wanted to be the best in the
            industry.The Gym and Fitness founders didn’t want it to be just
            another gym
          </p>
        </Row>
        <Row xs={1} md={2} lg={3} className="mt-5">
          {packDetails?.slice(0, 6)?.map((detail) => (
            <SinglepackageCard
              key={detail.id}
              detail={detail}
            ></SinglepackageCard>
          ))}
        </Row>
        <Row className="mb-5">
          <div className="text-center py-5">
            <Link to="/allpackages">
              <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                See All Packages
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PopularPackages;

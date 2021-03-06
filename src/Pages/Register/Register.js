import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import "./Register.css";

const Register = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/";



  const {
    handleEmail,
    handleName,
    handlePassword,
    register, userEmail, userPassword, setUser, setResponse, updateUser, response} = useAuth();

    

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(register);
    register(userEmail, userPassword)
      .then((result) => {
        const user = result.user;
        setUser(user)
        setResponse("Registration Successful");
        updateUser();
          history.push(redirect);
          setResponse('')
      })
      .catch((error) => {
        setResponse(error.message);
      });
  };

  return (
    <section id="register">
      <Container>
        <Row>
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <Form onSubmit={handleSubmit} className="mt-md-5 py-5 px-1 text-center">
              <h2 className="text-white fw-bold mb-5">Please, Register!</h2>
              <Row>
                <div className="col-12 col-md-6 mx-auto">
                  <label htmlFor="name" className="text-muted fw-semi-bold">
                    Name
                  </label>
                  <input onBlur={handleName}
                    id="name"
                    type="text"
                    className="form-control border-0 shadow-none py-2 my-2"
                    style={{ background: "#F8F8F8" }}
                  />
                </div>
              </Row>
              <Row>
                <div className="col-12 col-md-6 mx-auto">
                  <label htmlFor="email" className="text-muted fw-semi-bold">
                    Email
                  </label>
                  <input onBlur={handleEmail}
                    id="email"
                    type="email"
                    className="form-control border-0 shadow-none py-2 my-2"
                    style={{ background: "#F8F8F8" }}
                  />
                </div>
              </Row>
              <Row>
                <div className="col-12 col-md-6 mx-auto">
                  <label htmlFor="pwd" className="text-muted fw-semi-bold">
                    Password
                  </label>
                  <input onBlur={handlePassword}
                    id="pwd"
                    type="password"
                    className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                    style={{ background: "#F8F8F8" }}
                  />
                  <p className="text-white fw-semi-bold">{response}</p>
                  <Button
                    type="submit"
                    className="btn-light-green p-3 fw-bold btn-block w-100 shadow-none"
                  >
                    Register
                  </Button>
                </div>
              </Row>
              <Row>
                <span className="text-white fw-semi-bold mt-5">
                  Already have an account?
                  <Link to="/login" className="fw-semi-bold text-light-green">
                    {" "}
                    Login Now
                  </Link>
                </span>
              </Row>
            </Form>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import "./login.css";

const Login = () => {
  const { signInUsingGoogle, setIsLoading, userEmail, userPassword, login, handleEmail, handlePassword, response, setResponse } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  //handle google login
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(() => {
        history.push(redirect_uri);
      })
      .catch((error) => setResponse(error.message))
      .finally(() => setIsLoading(false));
  };

  //handle email login
  const handleEmailLogin = (event) => {
    event.preventDefault();
    login(userEmail, userPassword)
  }

  return (
    <section id="login">
      <Container>
        <Row style={{ minHeight: "100vh" }} id="login-register">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <Form onSubmit={handleEmailLogin} className="mt-md-5 py-5 px-1 text-center">
              <h2 className="text-white fw-bold mb-5">Please, Login!</h2>
              <Row>
                <div className="col-12 col-md-6 mx-auto">
                  <label htmlFor="email" className="text-muted fw-semi-bold">
                    Email
                  </label>
                  <input
                    onBlur={handleEmail}
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
                  <input
                    onBlur={handlePassword}
                    id="pwd"
                    type="password"
                    className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                    style={{ background: "#F8F8F8" }}
                  />
               
                  <Button
                    type="submit"
                    className="btn-light-green p-3 fw-bold btn-block w-100 shadow-none"
                  >
                    Login
                  </Button>
                </div>
              </Row>
              <Row>
                <h6 className="text-center text-white my-3">or signIn with </h6>
                <div className="d-flex justify-content-center">
                  <i
                    onClick={handleGoogleLogin}
                    className="fab fa-google fa-2x text-light-green me-4 login-icon"
                    title="Google"
                  ></i>
                </div>
                <span className="text-white fw-semi-bold mt-5">
                  Don't have any account?
                  <Link
                    to="/register"
                    className="fw-semi-bold text-light-green"
                  >
                    Register Now
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

export default Login;
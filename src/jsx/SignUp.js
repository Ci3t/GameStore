import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "./login.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function SignUp() {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [regError, setRegError] = useState("");
  const { signup, currentUser } = useAuth();
  // const [isShownLogin, setIsShownLogin] = useState(false);
  const Navigate = useNavigate();
  const handleSignUp = async () => {
    if (regPassword !== regConfirmPassword) {
      return setRegError("Pw Do not Match");
    }
    try {
      setRegError("");
      setIsLoading(true);
      await signup(regEmail, regPassword);
      Navigate("/store");
    } catch (e) {
      setRegError(e);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div class="logInContainerModal">
        <MDBContainer style={{ maxWidth: "60em", paddingTop: "2em" }}>
          <div className="overlay"></div>
          <MDBCard>
            <MDBRow className="g-0">
              {!currentUser && (
                <>
                  <MDBCol md="6">
                    <MDBCardImage
                      src={`/images/login1.jpg`}
                      alt="login form"
                      className="rounded-start w-100"
                    />
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBCardBody className="d-flex flex-column">
                      <div className="d-flex flex-row mt-2">
                        <MDBIcon
                          fas
                          icon="cubes fa-3x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">GameStore</span>
                      </div>

                      <h5
                        className="fw-normal my-4 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Register
                      </h5>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email address"
                        id="formControlLg"
                        type="email"
                        size="lg"
                        value={regEmail}
                        onChange={(e) => {
                          setRegEmail(e.target.value);
                        }}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        value={regPassword}
                        onChange={(e) => {
                          setRegPassword(e.target.value);
                        }}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password Confirm"
                        id="formControlLg"
                        type="password"
                        size="lg"
                        value={regConfirmPassword}
                        onChange={(e) => {
                          setRegConfirmPassword(e.target.value);
                        }}
                      />

                      <MDBBtn
                        disabled={isLoading}
                        onClick={handleSignUp}
                        className="mb-4 px-5"
                        color="dark"
                        size="lg"
                      >
                        Sign Up
                      </MDBBtn>

                      {regError && (
                        <Alert variant={"danger"}>{regError?.message}</Alert>
                      )}
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        {" "}
                        already have an account?{" "}
                        <Link to={"/login"}>Log In</Link>
                      </p>
                    </MDBCardBody>
                  </MDBCol>
                </>
              )}
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
}

export default SignUp;

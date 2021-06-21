import React from "react";
import styled from "@emotion/styled";
import LandingImg from "../image-components/LandingImg";

const Container = styled("div")`
  color: green;
`;

const Landing = () => {
  return (
    <Container>
      <h1>Glucose Trail Crystal Ball</h1>
      <LandingImg/>
    </Container>
  );
};

export default Landing;

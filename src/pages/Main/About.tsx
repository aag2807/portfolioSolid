import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { ViewContainer } from "../../components/containers/containers";
import WaveSvg from "../../components/misc/WaveSvg";
import { createDocumentTitle } from "../../hooks/createDocumentTitle";
import { Colors } from "../../utils/Colors";

const Title = styled("h1")`
  font-size: 2rem;
  font-weight: 500;
  color: ${Colors.dark};
  margin-bottom: 10px;
  text-align: center;
`;

const About: Component = () => {
  return (
    <>
      <WaveSvg
        color1={Colors.dark}
        color2={Colors.dark}
        style={{ position: "relative" }}
      />

      <ViewContainer
        style={{
          display: "flex",
          "flex-direction": "column",
          background: `${Colors.dark}`,
          width: "100%",
          "min-height": "100px",
          "margin-top": "-10px",
          padding: "20px",
        }}
      >
        <Title
          style={{
            color: `${Colors.light}`,
          }}
        >
          I'm Alvaro Guzman,
          <br /> a Developer located in Dominican Republic.
        </Title>
      </ViewContainer>
    </>
  );
};

export default About;

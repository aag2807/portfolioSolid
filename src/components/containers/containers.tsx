import { styled } from "solid-styled-components";
import { Component } from "solid-js";
import { flexBoxMixin } from "../../utils/mixins";

const ViewContainer = styled("section")`
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 48rem) {
    width: 80%;
    padding: 10px;
  }

  @media (min-width: 67.5rem) {
    width: 56rem;
    padding: 0px;
  }
`;

const DividerLine = styled("div")`
  height: 2px;
  background: #b9b8bc;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  align-self: center;
  justify-self: center;
`;

const Divider: Component = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <DividerLine />
    </div>
  );
};

const Hero = styled("section")`
  width: 100%;
  display: flex;
  min-height: 250px;
`;

const CardContainer = styled("section")`
  display: flex;
  width: 100%;
  flex-direction: column;
	margin: auto;

  @media (min-width: 48rem) {
    width: 100%;
    padding: 10px;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (min-width: 67.5rem) {
    width: 56rem;
    padding: 0px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export { ViewContainer, Divider, Hero, CardContainer };

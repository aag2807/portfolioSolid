import { Component } from "solid-js";
import {
  CardContainer,
  ViewContainer,
} from "../../components/containers/containers";
import WaveSvg from "../../components/misc/WaveSvg";
import { Colors } from "../../utils/Colors";
import { styled } from "solid-styled-components";
import Card from "../../components/Cards/Card";
import Loader from "../../components/misc/Loader";

const Title = styled("h1")`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${Colors.dark};
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
`;

const SubP = styled("h1")`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${Colors.dark};
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
`;

const Skills: Component = () => {
  return (
    <>
      <WaveSvg
        color1={Colors.dark}
        color2={Colors.dark}
        style={{ position: "relative", transform: "rotate(180deg)" }}
      />
      <ViewContainer>
        <Title>My skills</Title>
        <SubP>
          I m a self-proclaimed hardcore Javascript lover, name a front-end
          framework/library and rest assured I ve used the technology. From
          Vanilla JS to React, Svelte, Angular, Vue or even GopherJs, I just
          love that pixel perfect finish.
        </SubP>
        <CardContainer style={{ "justify-content": "center" }}>
          <label style={{ "padding-left": "10px" }}>Javascript</label>
          <Loader progress={95} color="#f7df1e" />
          <label style={{ "padding-left": "10px" }}>React</label>
          <Loader progress={90} color="#61D9FB" />
          <label style={{ "padding-left": "10px" }}>Angular</label>
          <Loader progress={85} color="#DD0031" />
          <label style={{ "padding-left": "10px" }}>Vue</label>
          <Loader progress={80} color="#3EBA84" />
          <label style={{ "padding-left": "10px" }}>Svelte</label>
          <Loader progress={93} color="#FF3C00" />
          <label style={{ "padding-left": "10px" }}>Go</label>
          <Loader progress={78} color="#6AD7E4" />
          <label style={{ "padding-left": "10px" }}>C++</label>
          <Loader progress={82} color="#2D5290" />
        </CardContainer>
				<SubP style={{"font-size":'1.2rem', "margin-bottom":"20px", "margin-top":"10px"}}>
          And there's a few not mentioned like haskell, since those are just for fun and haven't been used too deeply in production.
        </SubP>
        <CardContainer style={{ "justify-content": "center" }}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardContainer>
      </ViewContainer>
    </>
  );
};

export default Skills;

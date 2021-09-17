import { Component } from "solid-js";
import { Hero, ViewContainer } from "../../components/containers/containers";
import { createDocumentTitle } from "../../hooks/createDocumentTitle";
import { styled } from "solid-styled-components";
import { Colors } from "../../utils/Colors";
import About from "./About";
import TimeLine from "../../components/misc/TimeLine";
import ProgressBar from "../../components/misc/ProgressBar";
import Skills from "./Skills";



const HeroText = styled("h2")`
  margin: 0;
  padding: 0;
  color: ${Colors.dark};
  font-weight: 600;
  width: 80%;
`;

const Home: Component = () => {
  createDocumentTitle("Home");

  return (
    <main>
      <Hero style={{ "justify-content": "center","flex-direction":"column","align-items":'center' }}>
				<div style={{display:'flex', "justify-content":'center', "align-items":'center', background:'#D3EFF3', "border-radius":'50%', "margin-top":"20px"}}>
	        <img src="src/assets/avatar.png" style={{height:'150px'}}/>
				</div>
				<HeroText style={{ "text-align": "center", "margin-top": "20px","font-size":'1.4rem' }}>
          Programming language enthusiast, full stack Developer & game dev hobbiest
        </HeroText>
				<HeroText style={{"font-size":"1rem", "font-weight":500, "text-align":'center', "margin-top":'20px'}}>
					I code small & big things alike, and I REALLY love what I do.
				</HeroText>
      </Hero>
			<About/>
      <TimeLine/>
      <Skills/>
		</main>
  );
};

export default Home;

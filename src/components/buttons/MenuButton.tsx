import { styled, css } from "solid-styled-components";
import { Component } from "solid-js";
import { Colors } from "../../utils/Colors";

const Wrapper = styled("button")`
  position: absolute;
  border: none;
  outline: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  right: 20px;
	top:5px;
`;

const Row = styled<any>("div")`
  display: flex;
  height: 5px;
  width: 100%;
  justify-content: ${(props) => props.align ?? ""};
`;

const Line = styled<any>("div")`
  background: ${Colors.dark};
  height: 4px;
  width: ${(props) => props.width};
  border-radius: 2px;
`;

const Title = styled("h1")`
	position: absolute;
	font-size: 1.4rem;
	font-weight: 500;
	left: 20px;
	top: 7px;
	text-transform: capitalize;
	color: ${Colors.dark};
`

const MenuButton: Component<any> = ({ title="Title",...props }) => {
  return (
    <div style={{position:'relative', height:'50px',"margin-top":'10px'}}>
      <Title>{title}</Title>
			<Wrapper {...props}>
        <Row>
          <Line width={"15px"}></Line>
        </Row>
        <Row>
          <Line width={"25px"}></Line>
        </Row>
        <Row align={"flex-end"}>
          <Line width={"15px"}></Line>
        </Row>
      </Wrapper>
    </div>
  );
};
export default MenuButton;

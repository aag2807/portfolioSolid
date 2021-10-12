import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { Colors } from "../../utils/Colors";

const CardBody = styled("div")`
  position: relative;
  min-height: 300px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  background: ${Colors.dark};
  border-radius: 8px 16px;
  overflow: hidden;
  transition: all ease-in 250ms;
  &:hover {
    cursor: pointer;

    .upper {
      background: ${Colors.darkLight};
      top: 41%;
    }
  }
`;
const UpperCard = styled("div")`
  height: 60%;
  top: 100%;
  left: 0;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  transition: all ease-in 250ms;
`;

const Card: Component = () => {
  return (
    <div style={{ padding: "10px" }}>
      <CardBody>
        <UpperCard className={"upper"}></UpperCard>
      </CardBody>
    </div>
  );
};

export default Card;

import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { Colors } from "../../utils/Colors";

const LoaderContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
`;

const OuterProgressBar = styled("div")`
  flex: 1 1 auto;
  border-radius: 5px;
  overflow: hidden;
  vertical-align: middle;
`;

const ProgressBarInner = styled("div")`
  background:${Colors.dark};
  border-radius: 5px;
  height: 10px;
`;

const Progress:any = styled<any>("div")`
  width: ${props => props.progress ?? '50%'};
  background-color: ${props => props.color ?? 'yellow'};
  height: 10px;
`;

const ProgressInfo = styled("div")`
  width: 50px;
  flex: 0 0 50px;
  height: 20px;
  padding-left: 12px;
`;

const ProgressData = styled("span")`
  font-size: 16px;
  line-height: 1.25;
`;

interface LoaderComponentProps {
	color: string;
	progress: string | number;
}

const Loader: Component<LoaderComponentProps> = ({
	progress = '50',
	color = 'yellow'
}) => {
  return (
    <LoaderContainer>
      <OuterProgressBar>
        <ProgressBarInner>
          <Progress progress={`${progress}%`} color={color}/>
        </ProgressBarInner>
      </OuterProgressBar>
      <ProgressInfo>
        <ProgressData>
					{progress + '%'}
				</ProgressData>
      </ProgressInfo>
    </LoaderContainer>
  );
};

export default Loader;

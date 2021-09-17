import { Component } from "solid-js";

interface ProgressBarProps {
    width?: number | string;
}

const ProgressBar: Component<ProgressBarProps> = ({
    width ="100%"
}) => {
  return (
    <div style={{width:width,"border-radius":"7px", display:'flex',padding:0,}}>

    </div>
  );
};

export default ProgressBar;

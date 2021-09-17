import { Component } from "solid-js";

interface SVGWave {
    color1?: string;
    color2?:string;
    color3?:string;
    style?:any;
}

const WaveSvg: Component<SVGWave> = ({ 
    color1="#00B4DB",
    color2="#224488",
    color3="#0083B0",
    ...rest
}) => {
  return (
    <>
      <svg
        width="100%"
        height="200px"
        fill="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <linearGradient gradientTransform="rotate(-20)" id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color={color1} />
          <stop offset="50%" stop-color={color2} />
          <stop offset="75%" stop-color={color1} />
        </linearGradient>
        <path
          fill="url(#grad1)"
          style={{'position':"absolute"}}
          d="
          M0 67
          C 200,103
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z"
        >
          <animate
            repeatCount="indefinite"
            fill="url(#grad1)"
            attributeName="d"
            dur="15s"
            attributeType="XML"
            values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            "
          ></animate>
        </path>
      </svg>
    </>
  );
};

export default WaveSvg;

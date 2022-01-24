import React, { useEffect } from "react";
import {
  /*   Cause,
  getFrequency,
  getMedium, */
  Combination,
  //getRandomElement,
} from "./combinations";

interface GeneratorProps {
  handleClick: (c?: Combination) => void;
  combination: Combination;
}

const Generator = (props: GeneratorProps) => {
  useEffect(() => {
    console.log(`props changed: ${JSON.stringify(props.combination)}`);
    //setProd(getRandomElement(prod, products) as string);
  }, [props]);
  //const { event, frequency, setting } = props.cause;
  const { action, timing, reason, medium, reaction } = props.combination;
  return (
    <div className="wordbox">
      <div className="fadeIn" key={Math.random()} style={{ color: "black" }}>
        {/* <h3 className="when">Wenn KundIn</h3> */}
        <h4 className="condition">
          <img src="rating.png" className="subject" />
          {action}, {timing}, {reason}
          {/* {event} {getFrequency(frequency)} */}
        </h4>
        {/* <h3 className="when">Die Post</h3> */}
        <img className="downArrow" src="down-arrow.png"></img>
        <h4 className="condition">
          <img className="subject" src="horn.png" />
          {medium}, {reaction}
          {/* Informieren {getMedium(setting)} über {prod} */}
        </h4>
        <button
          className="generateButton"
          onClick={() => props.handleClick(props.combination)}
        >
          Generieren
        </button>
      </div>
    </div>
  );
};
export default Generator;

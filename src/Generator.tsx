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
        <h3 className="when">Wenn KundIn</h3>
        <h5 className="condition">
          {action}, {timing}, {reason}
          {/* {event} {getFrequency(frequency)} */}
        </h5>
        <h3 className="when">Die Post</h3>
        <h5 className="condition">
          {medium}, {reaction}
          {/* Informieren {getMedium(setting)} über {prod} */}
        </h5>
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

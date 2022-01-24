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
  const { action, timing, reason, medium, reaction, icon } = props.combination;
  return (
    <div className="wordbox">
      <div className="fadeIn" key={Math.random()} style={{ color: "black" }}>
        {/* <h3 className="when">Wenn KundIn</h3> */}

        <h4 className="condition">
          <img src={`${icon}.png`} className="subject" alt="Kunde" />
          <br />
          {action}, {timing}, {reason}
          {/* {event} {getFrequency(frequency)} */}
        </h4>
        {/* <h3 className="when">Die Post</h3> */}
        <img className="downArrow" src="down-arrow.png" alt="dann"></img>
        <h4 className="condition">
          <img className="subject" src="horn.png" alt="Wir" />
          <br />
          {medium}, {reaction}
          {/* Informieren {getMedium(setting)} über {prod} */}
        </h4>

        {/* <button
          className="generateButton"
          onClick={() => props.handleClick(props.combination)}
        >
          Generieren
        </button> */}
      </div>
      <img
        src="magic-wand.png"
        className="generateIcon"
        alt="Generieren"
        onClick={() => props.handleClick(props.combination)}
      />
    </div>
  );
};
export default Generator;

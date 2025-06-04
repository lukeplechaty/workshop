import "./Thing1.css";
import Addon from "./Addon";
import { useState } from "react";

export default function Thing1(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="thing1-div">
      <h2 className="thing1-h2">this is thing {props.id}</h2>
      <button
        className="bg-yellow-200 hover:bg-yellow-500"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "hide" : "show"}
      </button>
      {isVisible ? (
        <>
          <p className="text-lg text-white font-normal">thing 1 is cool</p>
          <p className={`text-lg ${props.colour} font-normal`}>
            this is {props.times}x cool
          </p>
          <Addon passOn={props.passOn} />
        </>
      ) : null}
    </div>
  );
}

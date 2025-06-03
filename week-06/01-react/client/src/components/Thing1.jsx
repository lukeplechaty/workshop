import "./Thing1.css";
import Addon from "./Addon";

export default function Thing1(props) {
  return (
    <div className="thing1-div">
      <h2 className="thing1-h2">this is thing 1</h2>
      <p className="text-lg text-white font-normal">thing 1 is cool</p>
      <p className={`text-lg ${props.colour} font-normal`}>
        this is {props.times}x cool
      </p>
      <Addon passOn={props.passOn} />
    </div>
  );
}

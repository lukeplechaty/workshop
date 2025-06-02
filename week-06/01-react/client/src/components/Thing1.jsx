import Addon from "./Addon";
export default function Thing1(props) {
  return (
    <div>
      <h2>this is thing 1</h2>
      <p>thing 1 is cool</p>
      <p>this is {props.times}x cool</p>
      <Addon passOn={props.passOn} />
    </div>
  );
}

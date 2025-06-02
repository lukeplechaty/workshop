export default function Addon(props) {
  return (
    <div>
      <h3>this is an addon</h3>
      <p>addon will work</p>
      <p>{props.passOn}</p>
    </div>
  );
}

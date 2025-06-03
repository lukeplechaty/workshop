import "./Addon.css";
import { useState } from "react";

export default function Addon(props) {
  let [count, setCount] = useState(0);
  return (
    <div className="addon-div">
      <h3 className="addon-h3">this is an addon</h3>
      <p className="addon-p1">addon will work</p>
      <p className="text-amber-300">{props.passOn}</p>
      <p className="text-lime-400">count is: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-300 hover:bg-blue-600"
      >
        +1
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-green-300 hover:bg-green-600"
      >
        -1
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-red-300 hover:bg-red-600"
      >
        reset
      </button>
    </div>
  );
}

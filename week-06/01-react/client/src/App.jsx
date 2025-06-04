import "./App.css";
import Thing1 from "./components/Thing1";
import Thing2 from "./components/Thing2";
import { data } from "./lib/data";

export default function App() {
  return (
    <div className="app-div">
      <h1 className="app-h1">react app</h1>
      <p className="app-p">hi all</p>
      {data.map((items) => {
        return (
          <Thing1
            key={items.key}
            id={items.key}
            times={items.times}
            colour={items.colour}
            passOn={items.passOn}
          />
        );
      })}
      <Thing2 />
    </div>
  );
}

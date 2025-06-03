import "./App.css";
import Thing1 from "./components/Thing1";
import Thing2 from "./components/Thing2";

export default function App() {
  return (
    <div className="app-div">
      <h1 className="app-h1">react app</h1>
      <p className="app-p">hi all</p>
      <Thing1 times="5" colour="text-red-500" passOn="this is 1st" />
      <Thing1 times="100" colour="text-blue-500" passOn="2en i am" />
      <Thing2 />
    </div>
  );
}

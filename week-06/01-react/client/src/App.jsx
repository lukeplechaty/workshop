import "./App.css";
import Thing1 from "./components/Thing1";
import Thing2 from "./components/Thing2";

export default function App() {
  return (
    <div>
      <h1>react</h1>
      <p>hi all</p>
      <Thing1 times="5" passOn="this is 1st" />
      <Thing1 times="100" passOn="2en i am" />
      <Thing2 />
    </div>
  );
}

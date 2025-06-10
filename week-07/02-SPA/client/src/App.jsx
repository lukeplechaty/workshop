import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import About from "./components/About";
// import { data } from "./lib/data";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* {data.map((item) => {
          return (
            <Route key={item.key} path={item.path} element={item.element} />
          );
        })} */}
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </>
  );
}

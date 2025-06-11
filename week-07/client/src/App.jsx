import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import About from "./components/About";
import User from "./components/User";
import Message from "./components/Message";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/user/:username"} element={<User />}>
          <Route path={"message"} element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

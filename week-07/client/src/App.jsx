import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Glass from "./components/Glass";
import User from "./components/User";
import Message from "./components/Message";
import UserForm from "./components/UserForm";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState(null);
  return (
    <>
      <NavBar username={username} />
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/glass"} element={<Glass />} />
        <Route
          path={"/userform"}
          element={<UserForm setusername={setUsername} />}
        />
        <Route path={"/user/:username"} element={<User />}>
          <Route path={"message"} element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

import { useState } from "react";

export default function UserForm(props) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function handleData(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.setusername(data.username);
  }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>User Details</legend>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            required
            value={data.username}
            onChange={handleData}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            value={data.password}
            onChange={handleData}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}

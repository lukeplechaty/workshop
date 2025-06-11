import { Outlet, useParams, Link } from "react-router";

export default function User() {
  let { username } = useParams();
  return (
    <>
      <h1>user: {username}</h1>
      <Link to={"message"}>Messages</Link>
      <Outlet />
    </>
  );
}

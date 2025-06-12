import { Link } from "react-router";
export default function NavBar(props) {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>|
        {!props.username ? <Link to={"/userform"}>New user</Link> : null}
        {props.username ? (
          <Link to={`/user/${props.username}`}>Profile</Link>
        ) : null}
        |<Link to={"/glass"}>Glass</Link>
      </nav>
    </>
  );
}

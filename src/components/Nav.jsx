import { Link } from "react-router";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/colors">
        <div>Back</div>
      </Link>
    </div>
  );
}

export default Nav;

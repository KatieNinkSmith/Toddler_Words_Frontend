import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { logOut } from "../utilities/users-services.js";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const user = location.state?.user;

  // Update state whenever user information changes
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, [user]);

  function handleLogOut() {
    logOut();
    setUser(null); // Update user state to trigger a re-render
  }

  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/profile">
            <div>PROFILE</div>
          </Link>
          <Link to="" onClick={handleLogOut}>
            <div>SIGN OUT</div>
          </Link>
        </>
      ) : (
        <Link to="/loginsignup">
          <div>LOG IN</div>
        </Link>
      )}
    </div>
  );
}

export default Nav;

import { Link, useLocation } from "react-router"; // Ensure correct import from 'react-router-dom'
import { useState, useEffect } from "react";
import { logOut } from "../utilities/users-services";

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
    setIsLoggedIn(false); // Set logged-in state to false upon logging out
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
        </>
      ) : (
        <>
          <Link to="/loginsignup">
            <div>LOG IN</div>
          </Link>
        </>
      )}
    </div>
  );
}

export default Nav;

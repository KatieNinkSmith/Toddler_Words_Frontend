import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { logOut } from "../utilities/users-services";
import FetchUser from "../components/FetchUser";

function Nav() {
  const { user, loading } = FetchUser(); // Fetch user and loading state

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const location = useLocation(); // Get the current route

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, [user]); // Re-run whenever the user changes

  const handleLogOut = () => {
    logOut();
    setIsLoggedIn(false); // Log out the user and update state
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching user data
  }

  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      {isLoggedIn ? (
        <Link to="/profile">
          <div>PROFILE</div>
        </Link>
      ) : (
        <Link to="/loginsignup">
          <div>LOG IN</div>
        </Link>
      )}
      {isLoggedIn && location.pathname === "/profile" && (
        <Link to="" onClick={handleLogOut}>
          <div>LOG OUT</div>
        </Link>
      )}
    </div>
  );
}

export default Nav;

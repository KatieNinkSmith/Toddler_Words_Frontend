import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { logOut } from "../utilities/users-services";
import { useUser } from "../contexts/UserContext";

function Nav() {
  const { user, loading } = useUser();

  const location = useLocation();

  const handleLogOut = () => {
    logOut();
    setIsLoggedIn(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      {user ? (
        <Link to="/profile">
          <div>PROFILE</div>
        </Link>
      ) : (
        <Link to="/loginsignup">
          <div>LOG IN</div>
        </Link>
      )}
      {location.pathname === "/profile" && (
        <Link to="" onClick={handleLogOut}>
          <div>LOG OUT</div>
        </Link>
      )}
    </div>
  );
}

export default Nav;

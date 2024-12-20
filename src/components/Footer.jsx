import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div>
      <p>
        All images are courtesy of{" "}
        <Link to={"https://unsplash.com/"}>unsplash.com</Link>
      </p>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div>
      <h4>
        All images are courtesy of{" "}
        <Link to={"https://unsplash.com/"}>unsplash.com</Link>
      </h4>
    </div>
  );
}

export default Footer;

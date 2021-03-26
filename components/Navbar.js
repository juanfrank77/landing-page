import React from "react";
import Link from "next/link";

function Navbar(props) {
  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

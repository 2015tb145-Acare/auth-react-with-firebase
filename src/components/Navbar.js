import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthReact
      </Link>
      <div>
        <button className="btn btn-primary">Sign up</button>
        <button className="btn btn-primary ms-2">Sign in</button>
        <button className="btn btn-danger ms-2">logout</button>
      </div>
    </nav>
  );
}

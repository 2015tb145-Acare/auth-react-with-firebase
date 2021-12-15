import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthReact
      </Link>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => toggleModals("signUp")}
        >
          Sign up
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => toggleModals("signIn")}
        >
          Sign in
        </button>
        <button className="btn btn-danger ms-2">logout</button>
      </div>
    </nav>
  );
}

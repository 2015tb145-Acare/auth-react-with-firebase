import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { FirebaseContext } from "../contexts/firebaseContext";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  const { logOut, currentUser } = useContext(FirebaseContext);

  const Logger = () => {
    if (!currentUser) {
      return (
        <>
          <button
            className="btn btn-secondary"
            onClick={() => toggleModals("signUp")}
          >
            Sign up
          </button>
          <button
            className="btn btn-outline-secondary ms-2"
            onClick={() => toggleModals("signIn")}
          >
            Sign in
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="btn btn-danger ms-2" onClick={logOut}>
            logout
          </button>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthReact
      </Link>
      <div>
        <Logger />
      </div>
    </nav>
  );
}

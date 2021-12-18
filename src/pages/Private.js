import React, { useContext } from "react";
import { FirebaseContext } from "../contexts/firebaseContext";
import { Outlet, Navigate } from "react-router-dom";

export default function Index() {
  const { currentUser } = useContext(FirebaseContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

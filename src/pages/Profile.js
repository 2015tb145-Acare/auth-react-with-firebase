import React, { useContext } from "react";
import { FirebaseContext } from "../contexts/firebaseContext";

export default function Profile() {
  const { currentUser } = useContext(FirebaseContext);
  return (
    <>
      <h1 className="display-3 text-light text-center py-4">
        Private {currentUser.email}
      </h1>
    </>
  );
}

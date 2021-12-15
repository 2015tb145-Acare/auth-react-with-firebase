import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";
import { FirebaseContextProvider } from "./contexts/firebaseContext";

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

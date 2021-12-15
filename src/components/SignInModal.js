import React, { useContext, useState, useRef } from "react";
import { UserContext } from "../contexts/userContext";

export default function SignInModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  const inputs = useRef([]);
  const [inputValidation, setInputValidation] = useState("");
  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={() => toggleModals()}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign In</h5>
                  <button
                    className="btn-close"
                    onClick={() => toggleModals()}
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="sign-in-form" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label htmlFor="signInEmail" className="form-label">
                        Adresse Email
                      </label>
                      <input
                        id="signInEmail"
                        ref={addInput}
                        name="email"
                        type="email"
                        required
                        autoFocus
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signInPassword" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        id="signInPassword"
                        ref={addInput}
                        name="password"
                        type="password"
                        required
                        className="form-control"
                      />
                    </div>
                    <p className="text-danger py-1"></p>
                    <button className="btn btn-primary">Envoyer</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useContext, useState, useRef } from "react";
import { UserContext } from "../contexts/userContext";
import { FirebaseContext } from "../contexts/firebaseContext";

export default function SignUpModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  const { signUp } = useContext(FirebaseContext);
  const inputs = useRef([]);
  const [inputValidation, setInputValidation] = useState("");
  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // front inputs validation
    if (inputs.current[1].value.length < 8) {
      setInputValidation("Invalid password format");
      return;
    }
    if (inputs.current[1].value !== inputs.current[2].value) {
      setInputValidation("Passwords don't match");
      return;
    }
    // back inputs validation
    signUp(inputs.current[0].value, inputs.current[1].value).then((result) => {
      if (result.message === "Firebase: Error (auth/invalid-email).") {
        setInputValidation("Email format invalid");
      } else if (
        result.message === "Firebase: Error (auth/email-already-in-use)."
      ) {
        setInputValidation("Email already used");
      } else {
        closeModal();
      }
    });
  };
  const closeModal = () => {
    setInputValidation("");
    toggleModals();
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={closeModal}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-form" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Adresse Email
                      </label>
                      <input
                        id="signUpEmail"
                        ref={addInput}
                        name="email"
                        type="email"
                        required
                        autoFocus
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPassword" className="form-label">
                        Mot de passe
                        <span className="text-muted">
                          {" "}
                          (8 caractères minimum)
                        </span>
                      </label>
                      <input
                        id="signUpPassword"
                        ref={addInput}
                        name="password"
                        type="password"
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="signUpPasswordRepeat"
                        className="form-label"
                      >
                        Vérification du mot de passe
                      </label>
                      <input
                        id="signUpPasswordRepeat"
                        ref={addInput}
                        name="password"
                        type="password"
                        required
                        className="form-control"
                      />
                    </div>
                    <p className="text-danger py-1">{inputValidation}</p>
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

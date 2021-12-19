import React, { useContext, useState, useRef } from "react";
import { UserContext } from "../contexts/userContext";
import { FirebaseContext } from "../contexts/firebaseContext";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  const navigate = useNavigate();
  const { signIn, logOut } = useContext(FirebaseContext);
  const inputs = useRef([]);
  const [inputValidation, setInputValidation] = useState("");
  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signIn(inputs.current[0].value, inputs.current[1].value).then((result) => {
      if (result.message) {
        setInputValidation("Oups, email or password is not valid");
      } else {
        const { user } = result;
        if (user.emailVerified) {
          navigate("/private/profile");
        } else {
          logOut();
          alert(
            "Oups, il semble que vous n'avez pas encore validé votre adresse mail"
          );
        }
        closeModal();
        console.log(user);
      }
    });
  };

  const closeModal = () => {
    setInputValidation("");
    toggleModals();
  };

  return (
    <>
      {modalState.signInModal && (
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
                  <h5 className="modal-title">Sign In</h5>
                  <button className="btn-close" onClick={closeModal}></button>
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

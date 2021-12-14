import React from "react";

export default function SignUpModal() {
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign Up</h5>
                  <button className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Adresse Email
                      </label>
                      <input
                        id="signUpEmail"
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
                      </label>
                      <input
                        id="signUpPassword"
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
      </div>
    </>
  );
}

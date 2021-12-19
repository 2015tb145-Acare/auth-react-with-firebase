import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const FirebaseContext = createContext();

export function FirebaseContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const navigate = useNavigate();

  /**
   * Sign up with email validation
   *
   * @param {String} email
   * @param {String} password
   * @returns Promise<UserCredential>
   */
  const signUp = async (email, password) => {
    try {
      const newUserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(newUserCredential.user, {
        url: "http://localhost:3000",
      });
      logOut();
      return newUserCredential.user;
    } catch (error) {
      return error;
    }
  };

  /**
   * Sign in with email and password
   *
   * @param {String} email
   * @param {String} password
   * @returns Promise<UserCredential>
   */
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      return error;
    }
  };

  /**
   * Log out user
   */
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      alert(
        "Oups, something is wrong ! Please check your internet connexion & retry..."
      );
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider value={{ signUp, signIn, logOut, currentUser }}>
      {!loadingData && props.children}
    </FirebaseContext.Provider>
  );
}

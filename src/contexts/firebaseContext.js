import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

  const signUp = async (email, password) => {
    try {
      const newUserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return newUserCredential;
    } catch (error) {
      return error;
    }
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
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

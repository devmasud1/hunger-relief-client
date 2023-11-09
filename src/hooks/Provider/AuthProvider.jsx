import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [passwordErrMsg, setPasswordErrMsg] = useState([]);

  const GoogleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password, name, imageUrl) => {
    setLoading(true);

    if (password.length <= 6) {
      return setPasswordErrMsg("Password must be at least 6 characters.");
    }

    setPasswordErrMsg("");
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name,
      imageUrl
    ).then(() => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imageUrl,
      });
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post("https://hunger-relief-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("https://hunger-relief-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  });

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    passwordErrMsg,
    GoogleLogIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;

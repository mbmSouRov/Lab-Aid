import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //USER SIGNUP
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //USER LOGIN
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //USER SIGNOUT
  const signoutUser = () => {
    return signOut(auth);
  };
  //USER UPDATE
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    signoutUser,
    user,
    updateUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

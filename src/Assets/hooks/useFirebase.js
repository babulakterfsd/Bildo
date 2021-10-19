import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  let [response, setResponse] = useState("");

  //handle email signup and login
  //handle Email
  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };
  //handle Name
  const handleName = (event) => {
    setName(event.target.value);

  };
  //handle Password
  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };
  //update user info
  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //create new user
  const register = (email, password) => {
    if (userPassword.length < 8) {
      setError("password must be at least 8 characters");
      return;
    } else {
      setError("");
      return createUserWithEmailAndPassword(auth, email, password)
    }
  };
  //login existing user
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        setResponse("Login Successful");
      })
      .catch((error) => {
        setResponse(error.message);
      });
  };


  const googleProvider = new GoogleAuthProvider();

  //sign in with popup provided by google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logsout the user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //firebase observer if user is logged in or not, checking user state
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unSubscribed;
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
    handleEmail,
    handleName,
    handlePassword,
    register,
    login,
    userEmail,
    userPassword,
    response,
    error,
    setUser,
    setResponse,
    updateUser
  };
};

export default useFirebase;

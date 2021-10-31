import initAuth from "../../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  /* for google sign in */
  const googleSignIn = () => {
    setLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result, user);
        setUser(result.user);
      })

      .finally(() => {
        setLoading(false);
      });

    // .catch((error) => {
    //   setError(error.message);
    // });
  };

  /* for logOut */
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })

      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  return { user, error, googleSignIn, logOut,loading };
};

export default useFirebase;

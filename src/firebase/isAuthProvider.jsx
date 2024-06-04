import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/index.js";
import { setIsAuth } from "@/store/slices/isAuthSlice";

const IsAuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      //   console.log(user);
      dispatch(setIsAuth(!!user));
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return children;
};

export default IsAuthProvider;

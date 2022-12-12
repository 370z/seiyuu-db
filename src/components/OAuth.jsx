import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc,setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";



function OAuth() {
  const navigate = useNavigate();


  const onGoogleClick = async (e) => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      console.log(user);
      if (user) {
        toast.success("Signed in!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full py-3 text-sm font-medium text-white transition duration-200 bg-red-600 rounded ease-in-out- hover:bg-red-700 active:bg-red-800 px-7"
    >
      Continue with Google
    </button>
  );
}

export default OAuth;

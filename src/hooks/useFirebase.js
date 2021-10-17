import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState('');
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
    .then(result=>{
        setUser(result.user);
    })
    }

    return{
        user,
        handleGoogleSignIn,
    }
}

export default useFirebase;
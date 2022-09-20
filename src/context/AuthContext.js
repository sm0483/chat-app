import {auth} from '../firebase'
import { createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useContext, useState } from 'react'
import React from 'react';

const AuthContext=React.createContext();

const AuthProvider=({children})=>{
    const [logedIn,setLogedIn]=useState(false);
    const [err,setErr]=useState(false);

    const createUserEmail=async(email,password)=>{
        try{
            return await createUserWithEmailAndPassword(auth,email,password);
        }catch(err){
            setErr(true);
        }
    }
    const provider=new GoogleAuthProvider();

    const loginWithGoogle=async()=>{
        try{
         return await signInWithPopup(auth,provider);
         setErr(false)
        }catch(err){
            setErr(true);
        }
    }

    return(
        <AuthContext.Provider
        value={{
            createUserEmail,
            loginWithGoogle
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}

const useAuthContext=()=>{
    return useContext(AuthContext);
}

export  {useAuthContext,AuthProvider,AuthContext}

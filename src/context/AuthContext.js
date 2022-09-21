import {auth} from '../firebase'
import { useContext, useEffect, useState } from 'react'
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
const AuthContext=React.createContext();

const AuthProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState("");

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            console.log(user);
        })

        return ()=>{
            unsub();
        }
    },[])

    return(
        <AuthContext.Provider
        value={{
            currentUser
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

import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
// import app from '../firebase/firebase/app'
export let AuthContext = createContext(null)
let auth = getAuth(app)
const AuthProvider = ({children}) => {
    let [user, setUser] = useState(null)
    let [loader, setLoader] = useState(true)
    let createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let loginUser = ( email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    let logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=> {
        let unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged User', loggedUser)
            setUser(loggedUser)
            setLoader(false)
        })
        return ()=> {
            unsubscribe()
        }
    },[])
    let authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
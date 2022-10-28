import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitProvider = new GithubAuthProvider();
    const gitSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const logOut =()=>{
        
        return signOut(auth).then(() => {
            setUser("")
          }).catch((error) => {
            
          });
    }
    useEffect(()=>{
        const unMount = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser)
              setLoading(false)

            }
          });
          return ()=>unMount()
    },[])
    

    const authInfo = {loading, auth, user, createUser, signIn, logOut, googleSignIn, gitSignIn}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;



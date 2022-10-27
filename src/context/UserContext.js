import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const gitProvider = new GithubAuthProvider();
    const gitSignIn = ()=>{
        return signInWithPopup(auth, gitProvider)
    }
    
    useEffect(()=>{
        const unMount = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser)
              
            } else {
            
            }
          });
          return ()=>unMount()
    },[])

    const authInfo = {user, createUser, signIn, googleSignIn, gitSignIn}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;



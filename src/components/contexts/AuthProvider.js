import React, { createContext, useEffect, useState } from 'react';
import app from '../FirebaseAuth/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [currentUser, setCurrent] = useState(null);
    const [loading, setLoading] = useState(true)

    const signupWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const forgotPassword = (email) => {

        return sendPasswordResetEmail(auth, email)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setCurrent(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { signupWithEmailAndPassword, signinEmailAndPassword, forgotPassword, googleSignIn, logOut, currentUser, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
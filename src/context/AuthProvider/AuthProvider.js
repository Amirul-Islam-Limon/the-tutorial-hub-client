import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);

    const createUserWithPassword=(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInWithEmailAndPassword=(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email, password)
    }

    const logOut=()=>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log( "onAuthStateChanged",currentUser);
            setUser(currentUser)
            setLoader(false);

            return ()=> unSubscribe();
        })
    },[])
    
    const authInfo={
        createUserWithPassword,user,
        logInWithEmailAndPassword,
        logOut,
        loader
        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
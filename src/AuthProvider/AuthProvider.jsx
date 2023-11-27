/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider(auth);

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
                localStorage.setItem("user", JSON.stringify(result.user));
            })
            .catch(err => console.log(err))
    }
    const createUser = (email, password) => {
        // loading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        // loading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // useEffect(() => {
    //     const tempUser = localStorage.getItem('user');
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         if (currentUser) {
    //             setUser(currentUser)
    //         }
    //         if (tempUser) {
    //             setUser(JSON.parse(tempUser))
    //         }
    //     })
    //     return () => {

    //         unSubscribe()
    //     }
    // }, [])

    const logOut = () => {
        return signOut(auth)
            .then(result => {
                console.log(result);
                localStorage.removeItem('user');
                setUser()
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        login,
        createUser,
        loading,
        googleLogIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
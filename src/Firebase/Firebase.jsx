import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";


export const AuthFirebase = createContext(null);

const Firebase = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const googleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            // const userEmail = currentUser?.email || user?.email;
            // const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);
            // if (currentUser) {
            //     axios.post('http://localhost:5000/token', loggedUser, { withCredentials: true })
            //         .then(res => console.log('token', res.data))
            // }
            // else {
            //      axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
            //        .then(res => console.log('token', res.data))
               
            // }
        });
        return () => {
            unSubscribe();

        }
    }, [])

    const authInfo = {user, setUser, createUser, loginUser, googleUser, logOut, loading}
    return (
        <AuthFirebase.Provider value={authInfo}>
            {children}
        </AuthFirebase.Provider>
    );
};

export default Firebase;
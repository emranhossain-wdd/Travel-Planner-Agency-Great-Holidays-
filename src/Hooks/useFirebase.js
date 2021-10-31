import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            // .catch(error => {
            //     setError(error.massage)
            // })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false));
    }

    // it keeps all user changes sync
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [auth])
    return {
        user,
        isLoading,
        signInWithGoogle,
        logOut

    }
}

export default useFirebase;
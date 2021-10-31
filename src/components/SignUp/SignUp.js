import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <div className="flex flex-col space-y-2 w-3/6 mx-auto items-center border-2 py-20">
                <h2 className="text-2xl font-bold pb-8">Sign up with</h2>
                <button
                    onClick={handleGoogleLogin}
                    className="flex rounded-full px-2 font-semibold py-1 border-2 w-1/3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <span className="px-8">Google Login</span></button>
            </div>
        </div>
    );
};

export default SignUp;
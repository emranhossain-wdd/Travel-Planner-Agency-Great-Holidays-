import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
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
            {/* log in using google */}
            <div className="flex flex-col space-y-2 w-9/12 md:w-3/6 mx-auto items-center border-2 py-20 my-8">
                <h2 className="text-2xl font-bold pb-8">Login with</h2>
                <button
                    onClick={handleGoogleLogin}
                    className="flex rounded-full px-2 font-semibold py-1 border-2 md:w-1/3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <span className="px-8">Google Login</span></button>
                <p className="mt-8">Don't have an Account ? <Link to="/signup" className="text-blue-500">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;
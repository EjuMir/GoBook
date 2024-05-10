import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthFirebase } from "../../Firebase/Firebase";



const SignIn = () => {

    const [password, showPassword] = useState(false);
    const { loginUser, googleUser, githubUser } = useContext(AuthFirebase);

    const { loading } = useContext(AuthFirebase)

    if (loading) {
        return <div className="mx-auto text-center mt-10"><p className="loading loading-bars loading-lg"></p></div>
    }


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        loginUser(email, password)
            .then(() => {
                setTimeout(() => {
                    toast.success('You are logged in successfully');
                }, 1200);
                
            })
            .catch(() => {
                toast.error('Please Put Correct Email/Password')
            })
    }

    const handleGoogleLogin = () => {
        googleUser()
            .then(() => {
                setTimeout(() => {
                    toast.success('You are logged in successfully');
                   
                }, 1000);
            })


    }

    const handleGithubLogin = () => {
        githubUser()
            .then(() => {
                setTimeout(() => {
                    toast.success('You are logged in successfully');
                }, 1000);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })


    }

    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div>
                        <h2 className="text-center mt-10 font-bold text-xl">Please Login !</h2>
                    </div>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="mx-auto mt-5 w-full">
                            <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>
                        </div>
                        <div className="mx-auto mt-5 w-full">
                            <button onClick={handleGithubLogin} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                                <p>Login with GitHub</p>
                            </button>
                        </div>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-600" />
                            <p className="px-3 dark:text-gray-600">OR</p>
                            <hr className="w-full dark:text-gray-600" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div>
                            <ToastContainer></ToastContainer>

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={password ? 'text' : 'password'} placeholder="Password" className="input input-bordered" required />
                            {
                                password || <FaEye onClick={() => { showPassword(true) }} className="absolute top-2/3 left-72"></FaEye>
                            }

                            {
                                password && <FaEyeSlash onClick={() => { showPassword(false) }} className="absolute top-2/3 left-72" />
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                        <div>
                            <h1>Dont have an account? <NavLink to='/signUp' className='underline text-blue-600'>Register here</NavLink></h1>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignIn;
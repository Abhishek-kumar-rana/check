import React, { useEffect, useState } from "react";
import {
    LoginSocialGoogle,
    LoginSocialFacebook,
    LoginSocialApple,
} from "reactjs-social-login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Login = ({ userlogin }) => {

    const google_apiKey = import.meta.env.VITE_GoogleClientid;
    const facebook_apikey=import.meta.env.VITE_Facebookid;
    const apple_apikey=import.meta.env.VITE_Appleid;

    const [provider, setProvider] = useState("");
    const [profile, setProfile] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    

    

    useEffect(() => {
        import.meta.env.GoogleClientid
        if (profile?.access_token && !loggedIn) {
            localStorage.setItem("profile", JSON.stringify(input));
            setLoggedIn(true);
            userlogin(true);
            localStorage.setItem("loggedIn", true);
        }
    }, [profile]);

    return (
        <section>
            <div className="flex justify-center w-full">
                <div className="flex w-full items-center justify-center py-2">
                    <div className="w-full space-y-5">
                        {loading && (
                            <div className="flex justify-center">
                                <FontAwesomeIcon icon={faSpinner} spin size="2x" />
                            </div>
                        )}
                        {!loading && (
                            <>
                                <LoginSocialGoogle
                                    client_id={google_apiKey}
                                    scope="openid profile email"
                                    onLoginStart={() => setLoading(true)}
                                    onResolve={({ provider, data }) => {
                                        setLoading(false);
                                        setProvider(provider);
                                        setProfile(data);
                                        console.log(provider, data);
                                    }}
                                    onReject={(err) => {
                                        setLoading(false);
                                        console.log(err);
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                    >
                                        <span className="mr-2 inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 256 193">
                                                <path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" />
                                                <path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" />
                                                <path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" />
                                                <path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" />
                                                <path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" />
                                            </svg>
                                        </span>
                                        Sign up with Gmail
                                    </button>
                                </LoginSocialGoogle>

                                <LoginSocialFacebook
                                    appId={facebook_apikey}
                                    onLoginStart={() => setLoading(true)}
                                    onResolve={({ provider, data }) => {
                                        setLoading(false);
                                        setProvider(provider);
                                        setProfile(data);
                                    }}
                                    onReject={(err) => {
                                        setLoading(false);
                                        console.log(err);
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                    >
                                        <span className="mr-2 inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 256 256">
                                                <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
                                                <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
                                            </svg>
                                        </span>
                                        Sign up with Facebook
                                    </button>
                                </LoginSocialFacebook>

                                <LoginSocialApple
                                    client_id={apple_apikey}
                                    scope={"name email"}
                                    onLoginStart={() => setLoading(true)}
                                    onResolve={({ provider, data }) => {
                                        setLoading(false);
                                        setProvider(provider);
                                        setProfile(data);
                                    }}
                                    onReject={(err) => {
                                        setLoading(false);
                                        console.log(err);
                                    }}
                                >
                            <button
                                type="button"
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                                <span className="mr-2 inline-block">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 12C22.5 17.796 17.8012 22.5 12 22.5C6.19875 22.5 1.5 17.796 1.5 12C1.5 6.19875 6.19875 1.5 12 1.5C17.8012 1.5 22.5 6.19875 22.5 12Z" fill="#121212" />
                                        <path d="M16.9216 9.34304C16.8643 9.37646 15.5003 10.0819 15.5003 11.6459C15.5646 13.4296 17.2216 14.0551 17.25 14.0551C17.2216 14.0885 16.9998 14.9072 16.343 15.7654C15.8217 16.5047 15.2432 17.25 14.3646 17.25C13.5289 17.25 13.2289 16.7573 12.2646 16.7573C11.229 16.7573 10.936 17.25 10.1431 17.25C9.26458 17.25 8.64315 16.4647 8.09345 15.7324C7.37932 14.7739 6.77233 13.2698 6.7509 11.8256C6.73646 11.0603 6.89392 10.308 7.29361 9.66904C7.85774 8.77699 8.86489 8.17143 9.96473 8.15146C10.8074 8.12498 11.5574 8.6906 12.0717 8.6906C12.5646 8.6906 13.486 8.15146 14.5286 8.15146C14.9786 8.1519 16.1786 8.27822 16.9216 9.34304ZM12.0005 7.99866C11.8505 7.29978 12.2646 6.60089 12.6503 6.15508C13.1432 5.61594 13.9216 5.25 14.5929 5.25C14.6357 5.94889 14.3641 6.63432 13.8787 7.13352C13.4432 7.67266 12.6932 8.07853 12.0005 7.99866Z" fill="white" />
                                    </svg>

                                </span>
                                Sign up with Apple
                            </button>
                        </LoginSocialApple>


                    </>
                        )}
                </div>
            </div>
            </div>
        </section>
    );
};

export default Login;

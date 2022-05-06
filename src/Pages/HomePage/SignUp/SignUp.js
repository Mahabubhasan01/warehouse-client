import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import "../LogIn/Login.css";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading";

const SignUp = () => {
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // access info from form
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // use firebase hook for social
  const [signInWithFacebook, Fbuser, Fbloading, Fberror] =
    useSignInWithFacebook(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const [signInWithTwitter, Twuser, Twloading, Twerror] =
    useSignInWithTwitter(auth);
  // Password and email name signUp
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    if(user||user1||Fbuser||Twuser){
      navigate(from,{replace:true})
    }
  
    if(loading||Fbloading||Twloading||loading1){
      return <Loading></Loading>
    }

    if(error|| error1||Fberror||Twerror){
      toast.error(<p> Error : {error?.message} invalid credentials</p>)
    }


  const handleSubmit = async(event) => {
    event.preventDefault();
   await createUserWithEmailAndPassword(email, password);
    console.log(email, password);
    toast.success('Successfully register')
  };
  

 
  return (
    <div>
      <div className="container login-box">
        <div className="overlay" id="overlay">
          <div className="sign-in" id="sign-in">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={() => navigate("/login")}
              className="switch-button"
              id="slide-right-button"
            >
              Login
            </button>
          </div>
          <div className="sign-up" id="sign-up">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start a journey with us</p>
            <button className="switch-button" id="slide-left-button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="form">
          <div className="sign-in" id="sign-in-info">
            <h1>Sign In</h1>
            <div className="social-media-buttons">
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#000000"
                    d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                  />
                </svg>
              </div>
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#000000"
                    d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"
                  />
                </svg>
              </div>
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#000000"
                    d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                  />
                </svg>
              </div>
            </div>
            <p className="small">or use your email account:</p>
            <form id="sign-in-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <p className="forgot-password">Forgot your password?</p>
              <button className="control-button in">Sign In</button>
            </form>
          </div>
          <div className="sign-up" id="sign-up-info">
            <h1>Create Account</h1>
            <div className="social-media-buttons">
              <div
                className="icon"
                onClick={() => signInWithFacebook(email, password)}
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#000000"
                    d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                  />
                </svg>
              </div>
              <div
                onClick={async() =>{await signInWithGoogle(email, password)}}
                className="icon"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#000000"
                    d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"
                  />
                </svg>
              </div>
              <div
                className="icon"
                onClick={() => signInWithTwitter(email, password)}
              >
                <svg
                  class="twitter"
                  fill="#000000"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
              </div>
            </div>
            <p className="small">or use your email for registration:</p>
            <form onSubmit={handleSubmit} id="sign-up-form">
              <input
                onBlur={handleName}
                type="text"
                placeholder="Name"
                required
              />
            
              <input
                onBlur={handleEmail}
                type="email"
                placeholder="Email"
                required
              />
              <input
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
                required
              />

              <button className="control-button up">Sign Up</button>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

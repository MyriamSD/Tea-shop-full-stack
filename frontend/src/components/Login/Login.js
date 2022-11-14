
import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './Login.css'


// const clientId = "Your-Client-Id";


const Login = () => {
  fetch(
    "http://localhost:4040/users/list")
                .then((res) => res.json())
                .then((json) => {
                    test = json
                })

    // const [showloginButton, setShowloginButton] = useState(true);
    // const [showlogoutButton, setShowlogoutButton] = useState(false);
    // const onLoginSuccess = (res) => {
    //     console.log('Login Success:', res.profileObj);
    //     setShowloginButton(false);
    //     setShowlogoutButton(true);
    // };

    // const onLoginFailure = (res) => {
    //     console.log('Login Failed:', res);
    // };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };


    return (
        <>

        <div>

        <div>console.log({test})</div>
      {/* <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="grapper">
        <div className="left">
          <div className="loginButton google" >
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" >
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" >
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>

      <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
   

            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            } */}
        </div>

        
            
        </>
    )
}

export default Login

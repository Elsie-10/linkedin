import React from "react";

function LoginForm() {
   
  
  return (
    <>  

    <div className="login-container">
      <div className="login-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn Logo"
          className="login-logo"
        />
        <h2>Log in</h2>
        <p className="subtitle">Stay updated on your professional world</p>

        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />

        <button>Log in</button>

        <p className="forgot-password">Forgot password?</p>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="join-now">New to LinkedIn? Join now</button>
      </div>
    </div>
      
    </>
  );
}
export default LoginForm;

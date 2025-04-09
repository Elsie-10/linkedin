import React from "react";

function LoginForm() {
  return (
    <>
      <form>
        <div className="container">
          <label htmlFor="uname">UserName:</label><br/>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          ></input><br></br>

          <label htmlFor="psw">Password:</label><br/>
          <input
            type="text"
            placeholder="Enter Password"
            name="psw"
            required
          ></input><br></br>

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
export default LoginForm;

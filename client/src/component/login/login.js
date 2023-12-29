import React, { useState } from "react";
import LoginForm from "./loginform";

export default function Login() {
  const [login, loginform] = useState(false);
  const handleLogin = () => {
    loginform(!login);
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {login ? <LoginForm /> : null}
    </>
  );
}

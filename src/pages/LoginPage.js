import React from "react";
import { TabTitle } from "../utils/Utils";
import Login from "../components/Login/Login";

function LoginPage() {
  //function to change tab title dinamically
  TabTitle("Login Page");
  return (
    <>
      <Login />
    </>
  );
}

export default LoginPage;

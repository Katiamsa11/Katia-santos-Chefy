import React from "react";
import SignUp from "../components/SignUp/SignUp";
import { TabTitle } from "../utils/Utils";

function SignUpPage() {
  //function to change tab title dinamically
  TabTitle("SignUp Page");
  return <SignUp />;
}

export default SignUpPage;

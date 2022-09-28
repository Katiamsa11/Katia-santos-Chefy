import React from "react";
import { TabTitle } from "../utils/Utils";
import Profile from "../components/Profile/Profile";

function ProfilePage() {
  //function to change tab title dinamically
  TabTitle("My Account");
  return <Profile />;
}

export default ProfilePage;

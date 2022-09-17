import React from "react";
import { TabTitle } from "../utils/Utils";
import MainPage from "../components/MainPage/MainPage";

function ChefsPage() {
  //function to change tab title dinamically
  TabTitle("Chefs Home Page");
  return <MainPage />;
}

export default ChefsPage;

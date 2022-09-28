import React from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import { TabTitle } from "../utils/Utils";

function BookingPage() {
  //function to change tab title dinamically
  TabTitle("Booking");
  window.scrollTo({ top: 0, behavior: "smooth" });
  return <BookingForm />;
}

export default BookingPage;

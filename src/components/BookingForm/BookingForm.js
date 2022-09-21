import React, { useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";

function BookingForm() {
  const API_URL = "http://localhost:8080";
  // Set State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventDate, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");
  const [allergies, setAllergies] = useState("");
  const [details, setDetails] = useState("");
  //create state generate success message
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState("");
  //state for text message body
  const [text, setText] = useState({
    recipient: "",
    textmessage:
      "Your request has been sent to the chef. You will receive a confirmation shortly. Thanks for choosing Chefy!,  find me on www.linkedin.com/in/katiamsa11",
  });

  const sendText = (_) => {
    fetch(
      `${API_URL}/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`
    ).catch((err) => console.error(err));
  };

  //handle change to control the form elements
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleEventName = (event) => {
    setEventName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setEventAddress(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeGuests = (event) => {
    setGuests(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeAllergies = (event) => {
    setAllergies(event.target.value);
  };

  const handleChangeDetails = (event) => {
    setDetails(event.target.value);
  };

  //created new warehouse object to send back to the backend
  const newBooking = {
    fullName: name,
    phone: phone,
    eventName: eventName,
    eventAddress: eventAddress,
    eventDate: eventDate,
    price: price,
    guests: guests,
    restrictions: allergies,
    details: details,
  };

  //reset form inputs function
  const resetForm = () => {
    setName("");
    setEventAddress("");
    setPhone("");
    setEventAddress("");
    setEventName("");
    setGuests("");
    setAllergies("");
    setDate("");
    setDetails("");
    setPrice("");
  }

  //function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //  if (!name) {
    //    setNameError(true);
    //  }
    //  if (!address) {
    //    setAddressError(true);
    //  }
    //  if (!city) {
    //    setCityError(true);
    //  }
    //  if (!country) {
    //    setCountryError(true);
    //  }
    //  if (!managerName) {
    //    setManagerNameError(true);
    //  }
    //  if (!managerPhone) {
    //    setManagerPhoneError(true);
    //  }
    //  if (!managerEmail) {
    //    setManagerEmailError(true);
    //  }
    //  if (!managerPosition) {
    //    setManagerPositionError(true);
    //  }

    axios
      .post(API_URL + "/events", newBooking)
      .then((response) => {
        //  setSuccess(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setIsError(error.response.data.error);
        if (error.response.data.error.length === 0) {
          setIsError("Something went wrong. Try again!");
        }
      });
resetForm();
  };

  return (
    <div className="booking">
      <h2 className="booking__title">Submit Your Chefy Event.</h2>
      <form className="booking__form" onSubmit={handleSubmit}>
        <label className="booking__label">Full Name</label>
        <input
          type="text"
          placeholder="Name"
          className="booking__input"
          onChange={handleChangeName}
          value={name}
        />
        <label className="booking__label"> Phone Number </label>
        <input
          className="booking__input"
          value={text.recipient}
          onChange={(e) => setText({ ...text, recipient: e.target.value })}
        />
        <label className="booking__label">Event Name</label>
        <input
          type="text"
          placeholder="Event Name"
          className="booking__input"
          onChange={handleEventName}
          value={eventName}
        />
        <label className="booking__label">Event Address</label>
        <input
          onChange={handleChangeAddress}
          value={eventAddress}
          type="text"
          placeholder="Event Address"
          className="booking__input"
        />
        <label className="booking__label">Event Date</label>
        <input
          onChange={handleChangeDate}
          value={eventDate}
          type="date"
          className="booking__input"
        />
        <label className="booking__label">Price</label>
        <input
          onChange={handleChangePrice}
          value={price}
          type="text"
          className="booking__input"
        />
        <label className="booking__label">Number Of Guests</label>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Number of Guests"
          className="booking__input"
          onChange={handleChangeGuests}
          value={guests}
        />
        <label className="booking__label">Dietary restrictions</label>
        <textarea
          name="allergies"
          placeholder="tell us about any allergies or restrictions."
          className="booking__text-area"
          onChange={handleChangeAllergies}
          value={allergies}
        ></textarea>
        <label className="booking__label">Tell us more About your Event</label>
        <textarea
          name="Event"
          placeholder="Describe your event."
          className="booking__text-area"
          onChange={handleChangeDetails}
          value={details}
        ></textarea>
        <button onClick={sendText} className="booking__btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../BookingForm/BookingForm.scss";

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
  //States to generate error messages
  const [nameError, setNameError] = useState(false);
  const [eventNameError, setEventNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [guestError, setGuestError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [allergiesError, setAllergiesError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  //state for text message body
  const [text, setText] = useState({
    recipient: "",
    textmessage:
      "Your request has been sent to the chef. You will receive a confirmation shortly. Thanks for choosing Chefy!  find me on www.linkedin.com/in/katiamsa11",
  });

  const sendText = (_) => {
    fetch(
      `${API_URL}/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`
    ).catch((err) => console.error(err));
  };

  //handle change to control the form elements
  const handleChangeName = (event) => {
    if (nameError) {
      setNameError(false);
    }
    setIsError("");
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    if (phoneError) {
      setPhoneError(false);
    }
    setIsError("");
    setPhone(event.target.value);
  };

  const handleEventName = (event) => {
    if (eventNameError) {
      setEventNameError(false);
    }
    setIsError("");
    setEventName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    if (addressError) {
      setAddressError(false);
    }
    setIsError("");
    setEventAddress(event.target.value);
  };

  const handleChangeDate = (event) => {
    if (dateError) {
      setDateError(false);
    }
    setIsError("");
    setDate(event.target.value);
  };

  const handleChangeGuests = (event) => {
    if (guestError) {
      setGuestError(false);
    }
    setIsError("");
    setGuests(event.target.value);
  };

  const handleChangePrice = (event) => {
    if (priceError) {
      setPriceError(false);
    }
    setIsError("");
    setPrice(event.target.value);
  };

  const handleChangeAllergies = (event) => {
    if (allergiesError) {
      setAllergiesError(false);
    }
    setIsError("");
    setAllergies(event.target.value);
  };

  const handleChangeDetails = (event) => {
    if (detailError) {
      setDetailError(false);
    }
    setIsError("");
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
  };

  //function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setNameError(true);
    }
    if (!eventAddress) {
      setAddressError(true);
    }
    if (!phone) {
      setPhoneError(true);
    }
    if (!eventName) {
      setEventNameError(true);
    }
    if (!eventDate) {
      setDateError(true);
    }
    if (!guests) {
      setGuestError(true);
    }
    if (!price) {
      setPriceError(true);
    }
    if (!allergies) {
      setAllergiesError(true);
    }
    if (!details) {
      setDetailError(true);
    }

    axios
      .post(API_URL + "/events", newBooking)
      .then((response) => {
        setSuccess(true);
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
          className={`form__input ${nameError ? "form__input--error" : ""}`}
          onChange={handleChangeName}
          value={name}
        />
        {nameError && <p className="error">Full name is required</p>}
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
          className={`form__input ${
            eventNameError ? "form__input--error" : ""
          }`}
          onChange={handleEventName}
          value={eventName}
        />
        {eventNameError && <p className="error">Event name is required</p>}
        <label className="booking__label">Event Address</label>
        <input
          onChange={handleChangeAddress}
          value={eventAddress}
          type="text"
          placeholder="Event Address"
          className={`form__input ${addressError ? "form__input--error" : ""}`}
        />
        {addressError && <p className="error">Event address is required</p>}
        <label className="booking__label">Event Date</label>
        <input
          onChange={handleChangeDate}
          value={eventDate}
          type="date"
          className={`form__input ${dateError ? "form__input--error" : ""}`}
        />
        {dateError && <p className="error">Event Date is required</p>}
        <label className="booking__label">Choose the experience</label>
        <input
          onChange={handleChangePrice}
          value={price}
          type="text"
          className={`form__input ${priceError ? "form__input--error" : ""}`}
        />
        {priceError && <p className="error">This field is required!</p>}
        <label className="booking__label">Number Of Guests</label>
        <input
          type="number"
          min="2"
          max="10"
          placeholder="Number of Guests"
          className={`form__input ${guestError ? "form__input--error" : ""}`}
          onChange={handleChangeGuests}
          value={guests}
        />
        {guestError && <p className="error">This field is required!</p>}
        <label className="booking__label">Dietary restrictions</label>
        <textarea
          name="allergies"
          placeholder="tell us about any allergies or restrictions."
          className={`form__input ${
            allergiesError ? "form__input--error" : ""
          }`}
          onChange={handleChangeAllergies}
          value={allergies}
        ></textarea>
        {allergiesError && <p className="error">This field is required!</p>}
        <label className="booking__label">Tell us more About your Event</label>
        <textarea
          name="Event"
          placeholder="Describe your event."
          className={`form__input ${detailError ? "form__input--error" : ""}`}
          onChange={handleChangeDetails}
          value={details}
        ></textarea>
        {detailError && <p className="error">This field is required!</p>}
        <button onClick={sendText} className="booking__btn">
          Submit
        </button>
        <p className="newWarehouse-form__error">{isError}</p>
        {success && (
          <div className="modal">
            <h2 className="modal__title">Video Uploaded</h2>
            <p className="modal__text">
              You will be redirected to the home page
            </p>
            <p className="modal__text">Thank you!</p>
            <Link className="modal__button" to={"/profile"}>
              OK
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default BookingForm;

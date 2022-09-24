import React, { useState } from "react";
import axios from "axios";
import eventImg from "../../assets/images/booking.jpg";
import "../BookingForm/BookingForm.scss";
import Modal from "../Modal/Modal";


function BookingForm() {
  const API_URL = "https://chefy-chefs-delivered.herokuapp.com";
  // Set State
  const [name, setName] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventDate, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");
  const [allergies, setAllergies] = useState("");
  const [details, setDetails] = useState("");
  //create state generate success message
  const [success, setSuccess] = useState(false);
  
  //States to generate error messages
  const [nameError, setNameError] = useState(false);
  const [eventNameError, setEventNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
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
   
    setName(event.target.value);
  };

  const handleEventName = (event) => {
    if (eventNameError) {
      setEventNameError(false);
    }
    
    setEventName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    if (addressError) {
      setAddressError(false);
    }
   
    setEventAddress(event.target.value);
  };

  const handleChangeDate = (event) => {
    if (dateError) {
      setDateError(false);
    }
   
    setDate(event.target.value);
  };

  const handleChangeGuests = (event) => {
    if (guestError) {
      setGuestError(false);
    }
   
    setGuests(event.target.value);
  };

  const handleChangePrice = (event) => {
    if (priceError) {
      setPriceError(false);
    }
   
    setPrice(event.target.value);
  };

  const handleChangeAllergies = (event) => {
    if (allergiesError) {
      setAllergiesError(false);
    }
    
    setAllergies(event.target.value);
  };

  const handleChangeDetails = (event) => {
    if (detailError) {
      setDetailError(false);
    }
   
    setDetails(event.target.value);
  };

  // used RegExp to validate the phone number
  // function validatePhoneNumber(input_str) {
  //   const re = /^\+?[0-9]?[- ]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  //   return re.test(input_str);
  // }

  // const validPhone = validatePhoneNumber();

  //created new warehouse object to send back to the backend
  const newBooking = {
    fullName: name,
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
      });
    resetForm();
  };

  return (
    <section className="booking">
      <div className="booking__wrapper">
        <div className="booking__container">
          <h2 className="booking__title">Submit Your Chefy Event</h2>
          <form className="booking__form" onSubmit={handleSubmit}>
            <div className="booking__group">
              <input
                type="text"
                placeholder=""
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
                onChange={handleChangeName}
                value={name}
              />
              <label className="booking__label">Full Name</label>
              {nameError && (
                <p className="booking__error">Full name is required</p>
              )}
            </div>
            <div className="booking__group">
              <input
                className="booking__input"
                value={text.recipient}
                onChange={(e) =>
                  setText({ ...text, recipient: e.target.value })
                }
              />
              <label className="booking__label"> Phone Number </label>
            </div>
            <div className="booking__group">
              <input
                type="text"
                placeholder=""
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
                onChange={handleEventName}
                value={eventName}
              />
              <label className="booking__label">Event Name</label>
              {eventNameError && (
                <p className="booking__error">Event name is required</p>
              )}
            </div>
            <div className="booking__group">
              <input
                onChange={handleChangeAddress}
                value={eventAddress}
                type="text"
                placeholder=""
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
              />
              <label className="booking__label">Event Address</label>
              {addressError && (
                <p className="booking__error">Event address is required</p>
              )}
            </div>
            <div className="booking__group">
              <input
                onChange={handleChangeDate}
                value={eventDate}
                type="date"
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
              />
              <label className="booking__label">Event Date</label>
              {dateError && (
                <p className="booking__error">Event Date is required</p>
              )}
            </div>
            <div className="booking__group">
              <select
                id="event"
                name="event"
                onChange={handleChangePrice}
                value={price}
                type="text"
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
              >
                <option value=""></option>
                <option value="Basic $90-$120">Basic $90-$120</option>
                <option value="Premium $120-$180">Premium $120-$180</option>
                <option value="High End $180-$220">High-End $180-$220</option>
              </select>

              <label className="booking__label">Choose the experience</label>
              {priceError && (
                <p className="booking__error">This field is required!</p>
              )}
            </div>
            <div className="booking__group">
              <input
                type="number"
                min="2"
                max="10"
                placeholder=""
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
                onChange={handleChangeGuests}
                value={guests}
              />
              <label className="booking__label">Number Of Guests</label>
              {guestError && (
                <p className="booking__error">This field is required!</p>
              )}
            </div>
            <div className="booking__group">
              <textarea
                name="allergies"
                placeholder=""
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
                onChange={handleChangeAllergies}
                value={allergies}
              ></textarea>
              <label className="booking__label">Dietary restrictions</label>
              {allergiesError && (
                <p className="booking__error">This field is required!</p>
              )}
            </div>
            <div className="booking__group">
              <textarea
                name="Event"
                placeholder=""
                className={`booking__input ${
                  addressError ? "booking__input--error" : ""
                }`}
                onChange={handleChangeDetails}
                value={details}
              ></textarea>
              <label className="booking__label">
                Tell us more About your Event
              </label>
              {detailError && (
                <p className="booking__error">This field is required!</p>
              )}
            </div>
            <button onClick={sendText} className="booking__btn">
              Submit
            </button>
            {success && (
              <Modal/>
            )}
          </form>
        </div>
        <img
          src={eventImg}
          className="booking__img"
          alt="event table decoration"
        />
      </div>
    </section>
  );
}

export default BookingForm;

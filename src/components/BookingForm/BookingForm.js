import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import eventImg from "../../assets/images/booking.jpg";
import "../BookingForm/BookingForm.scss";

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
  const [isError, setIsError] = useState("");
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
    setIsError("");
    setName(event.target.value);
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
        setIsError(error.response.data.error);
        if (error.response.data.error.length === 0) {
          setIsError("Something went wrong. Try again!");
        }
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
                className="booking__input"
                onChange={handleChangeName}
                value={name}
              />
              <label className="booking__label">Full Name</label>
              {nameError && <p className="error">Full name is required</p>}
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
                className="booking__input"
                onChange={handleEventName}
                value={eventName}
              />
              <label className="booking__label">Event Name</label>
              {eventNameError && (
                <p className="error">Event name is required</p>
              )}
            </div>
            <div className="booking__group">
              <input
                onChange={handleChangeAddress}
                value={eventAddress}
                type="text"
                placeholder=""
                className="booking__input"
              />
              <label className="booking__label">Event Address</label>
              {addressError && (
                <p className="error">Event address is required</p>
              )}
            </div>
            <div className="booking__group">
              <input
                onChange={handleChangeDate}
                value={eventDate}
                type="date"
                className="booking__input"
              />
              <label className="booking__label">Event Date</label>
              {dateError && <p className="error">Event Date is required</p>}
            </div>
            <div className="booking__group">
              <select
                id="cars"
                name="cars"
                onChange={handleChangePrice}
                value={price}
                type="text"
                className="booking__input"
              >
                <option value=""></option>
                <option value="basic $90-$120"> Basic 90-$120</option>
                <option value="premium $120-$180">Premium $120-$180</option>
                <option value="highEnd $180-$220">High-End $180-$220</option>
              </select>

              <label className="booking__label">Choose the experience</label>
              {priceError && <p className="error">This field is required!</p>}
            </div>
            <div className="booking__group">
              <input
                type="number"
                min="2"
                max="10"
                placeholder=""
                className="booking__input"
                onChange={handleChangeGuests}
                value={guests}
              />
              <label className="booking__label">Number Of Guests</label>
              {guestError && <p className="error">This field is required!</p>}
            </div>
            <div className="booking__group">
              <textarea
                name="allergies"
                placeholder=""
                className="booking__input"
                onChange={handleChangeAllergies}
                value={allergies}
              ></textarea>
              <label className="booking__label">Dietary restrictions</label>
              {allergiesError && (
                <p className="error">This field is required!</p>
              )}
            </div>
            <div className="booking__group">
              <textarea
                name="Event"
                placeholder=""
                className="booking__input"
                onChange={handleChangeDetails}
                value={details}
              ></textarea>
              <label className="booking__label">
                Tell us more About your Event
              </label>
              {detailError && <p className="error">This field is required!</p>}
            </div>
            <button onClick={sendText} className="booking__btn">
              Submit
            </button>
            <p className="newWarehouse-form__error">{isError}</p>
            {success && (
              <div className="modal">
                <h2 className="modal__title">Request Submitted</h2>
                <p className="modal__text">
                  You Will Be Redirected to Your Profile Page.
                </p>
                <p className="modal__text">Thank you for choosing Chefy!</p>
                <Link className="modal__button" to={"/profile"}>
                  OK
                </Link>
              </div>
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

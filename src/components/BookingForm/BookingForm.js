import React, { Component, useState } from "react";

function BookingForm() {
  const [text, setText] = useState({
    recipient: "",
    textmessage:
      "Your request has been sent to the chef. You will receive a confirmation shortly. Thanks for choosing Chefy!",
  });

  const sendText = (_) => {
    fetch(
      `http://127.0.0.1:8080/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`
    ).catch((err) => console.error(err));
  };

  return (
    <div className="booking">
      <h2 className="booking__title">Submit Your Chefy Event.</h2>
      <form className="booking__form">
        <label className="booking__label">Full Name</label>
        <input type="text" placeholder="Name" className="booking__input" />
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
        />
        <label className="booking__label">Event Address</label>
        <input
          type="text"
          placeholder="Event Address"
          className="booking__input"
        />
        <label className="booking__label">Event Date</label>
        <input type="date" id="date" name="date" className="booking__input" />
        <label className="booking__label">Number Of Guests</label>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Number of Guests"
          className="booking__input"
        />
        <label className="booking__label">Dietary restrictions</label>
        <textarea
          name="allergies"
          form="usrform"
          placeholder="tell us about any allergies or restrictions."
          className="booking__text-area"
        ></textarea>
        <label className="booking__label">Tell us more About your Event</label>
        <textarea
          name="Event"
          form="usrform"
          placeholder="Describe your event."
          className="booking__text-area"
        ></textarea>
        <button onClick={sendText} className="booking__btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;

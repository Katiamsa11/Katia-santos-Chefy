import React, { Component } from "react";

class BookingForm extends Component {
  state = {
    text: {
      recipient: "",
      textmessage:
        "Your request has been sent to the chef. You will receive a confirmation shortly. Thanks for choosing Chefy!",
    },
  };

  sendText = (_) => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(
      `http://127.0.0.1:8080/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`
    ).catch((err) => console.error(err));
  };

  render() {
    const { text } = this.state;

    return (
      <div className="booking">
        <h2 className="booking__title">Submit Your Chefy Event.</h2>
        <form className="booking__form">
          <label> Your Phone Number </label>
          <input
            value={text.recipient}
            onChange={(e) =>
              this.setState({ text: { ...text, recipient: e.target.value } })
            }
          />
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Event Address</label>
          <input type="text" placeholder="Address" />
          <label>Event Name</label>
          <input type="text" placeholder="Event Name" />
          <label>Number Of Guests</label>
          <input type="text" placeholder="Number of Guests" />
          <label>Dietary restrictions</label>
          <textarea name="allergies" form="usrform">
            input your dietary restrictions or allergies
          </textarea>
          <label>Tell us more About your Event</label>
          <textarea name="Event" form="usrform">
            Tell us more
          </textarea>

          <button onClick={this.sendText}> Submit Request </button>
        </form>
      </div>
    );
  }
}

export default BookingForm;

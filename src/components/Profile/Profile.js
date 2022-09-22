import React from "react";
import { deleteBookings, fetchBookings } from "../../utils/Utils";
import { useState, useEffect } from "react";
import "../../components/Profile/Profile.scss";
import chefyLogo from "../../assets/logo/chefy-logo.JPG"

function Profile() {
  const [allBookings, setAllBookings] = useState([]);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState("");
  //get bookings
  useEffect(() => {
    fetchBookings()
      .then((response) => {
        setAllBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  if (!allBookings) {
    return <h2>Loading Chefs....</h2>;
  }

  if (isError) {
    return <h1>....There was an unexpected Error. Refresh page!</h1>;
  }

  //function to re-render data after deleting bookings
  const getData = () => {
    fetchBookings().then((getData) => {
      setAllBookings(getData.data);
    });
  };

  //delete bookings
  const handleDelete = (id) => {
    deleteBookings(id)
      .then((response) => {
        setSuccess(response.data);
        getData();
      })
      .catch((error) => {
        console.log(error);
        setIsError("Something Went Wrong! Please Try Again.");
      });
  };

  return (
    <section className="profile">
    <div className="profile__wrapper">
    <div className="profile__icon"></div>
    <h2 className="profile__title">Your Events</h2>
    <div className="profile__top">
    </div>
    <h3 className="profile__subtitle">Welcome User</h3>
    </div>
    
      {allBookings.map((booking) => {
        return (
          <div  className="profile__flex-container" key={booking.id}>
          <div className="profile__flex-card">
          <div className="profile__title-container">
            <img src={chefyLogo} className="profile__logo"/>
            <h3 className="profile__event-name">{booking.eventName}</h3>
            </div>
            <div className="profile__description">
            <p className="profile__item">Name: {booking.fullName}</p>
            <p className="profile__item">Event Address: {booking.eventAddress}</p>
            <p className="profile__item">Event Date: {booking.eventDate}</p>
            <p className="profile__item">Experience Price Estimated: ${booking.price}</p>
            <p className="profile__item">Amount of Guests: {booking.guests}</p>
            <p className="profile__item">Allergies and restrictions: {booking.restrictions}</p>
            </div>
            <button
              className="delete__delete button button--delete"
              onClick={() => {
                handleDelete(booking.id);
              }}
            >
              Delete
            </button>
            </div>
            </div>
        );
      })}
    </section>
  );
}

export default Profile;

import React from "react";
import { deleteBookings, fetchBookings } from "../../utils/Utils";
import { useState, useEffect } from "react";
import "../../components/Profile/Profile.scss";

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
    <main className="profile">
      <div className="profile__wrapper">
        <div className="profile__top">
          <div className="profile__icon"></div>
          <h2 className="profile__subtitle">Welcome User</h2>
        </div>
        <h1 className="profile__title">Your Events</h1>
      </div>
      <section className="profile__cards">
        {allBookings.map((booking) => {
          return (
            <div className="profile__flex-container" key={booking.id}>
              <div className="profile__flex-card">
                <div className="profile__title-container">
                  <h2 className="profile__logo">chefy</h2>
                  <h3 className="profile__event-name">{booking.eventName}</h3>
                </div>
                <div className="profile__description">
                  <div className="profile__text-container">
                    Name:
                    <p className="profile__item">{booking.fullName}</p>
                  </div>
                  <div className="profile__text-container">
                    Event Address:
                    <p className="profile__item">{booking.eventAddress}</p>
                  </div>
                  <div className="profile__text-container">
                    Event Date:
                    <p className="profile__item">{booking.eventDate}</p>
                  </div>
                  <div className="profile__text-container">
                    Estimated Price To Pay:
                    <p className="profile__item">${booking.price}</p>
                  </div>
                  <div className="profile__text-container">
                    Amount of Guests:
                    <p className="profile__item">{booking.guests}</p>
                  </div>
                  <div className="profile__text-container">
                    Allergies & Restrictions:
                    <p className="profile__item">{booking.restrictions}</p>
                  </div>
                </div>
                <button
                  className="profile__button"
                  onClick={() => {
                    handleDelete(booking.id);
                  }}
                >
                  Cancel Event
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Profile;

import React from "react";
import { deleteBookings, fetchBookings } from "../../utils/Utils";
import { useState, useEffect } from "react";
import LoadingPage from "../Loading/Loading";
import "../../components/Profile/Profile.scss";
import userIcon from "../../assets/icons/user.svg";

function Profile() {
  const [allBookings, setAllBookings] = useState([]);
  const [isError, setIsError] = useState(false);
  //get bookings
  useEffect(() => {
    fetchBookings()
      .then((response) => {
        setAllBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  if (allBookings.length === 0) {
    return <LoadingPage />;
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
        console.log(response.data);
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
          <img className="profile__icon" src={userIcon} alt="user icon" />
          <h2 className="profile__subtitle">Your Events</h2>
        </div>
        <h1 className="profile__title">Welcome User</h1>
      </div>
      <section className="profile__cards">
        {allBookings.map((booking) => {
          return (
            <div className="profile__flex-container" key={booking.id}>
              <div className="profile__flex-card">
                <div className="profile__title-container">
                  <h3 className="profile__event-name">{booking.eventName}</h3>
                  <h2 className="profile__logo">chefy</h2>
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
                    Estimated Price:
                    <p className="profile__item">{booking.price}</p>
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

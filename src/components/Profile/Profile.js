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
          <div className="profile__container" key={booking.id}>
            <p>{booking.name}</p>
            <p>{booking.phone}</p>
            <p>{booking.eventName}</p>
            <p>{booking.eventAddress}</p>
            <p>{booking.eventDate}</p>
            <p>{booking.guests}</p>
            <p>{booking.price}</p>
            <p>{booking.allergies}</p>
            <p>{booking.details}</p>
            <button
              className="delete__delete button button--delete"
              onClick={() => {
                handleDelete(booking.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Profile;

import React from "react";
import { deleteBookings, fetchBookings } from "../../utils/Utils";
import { useState, useEffect } from "react";

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
        console.log(response);
        setSuccess("The booking Was Deleted Successfully!");
        getData();
      })
      .catch((error) => {
        console.log(error);
        setIsError("Something Went Wrong! Please Try Again.");
      });
  };

  return (
    <div>
      {allBookings.map((booking) => {
        return (
          <div key={booking.id}>
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
    </div>
  );
}

export default Profile;

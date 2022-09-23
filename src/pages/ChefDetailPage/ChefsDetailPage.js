import "../ChefDetailPage/ChefDetailPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  fetchChefsById,
  fetchImagesById,
  fetchReviewsById,
  TabTitle,
} from "../../utils/Utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userIcon from "../../assets/icons/user.png";

function ChefsDetailPage() {
  //function to change tab title dinamically
  TabTitle("Chef Bio");
  //Set State
  const [selectedChef, setSelectedChef] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedReview, setSelectedReview] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchChefsById(id).then((response) => {
      setSelectedChef(response.data[0]);
      console.log(response.data);
    });
  }, [id]);

  useEffect(() => {
    fetchImagesById(id).then((response) => {
      setSelectedImage(response.data);
      console.log(response.data);
    });
  }, [id]);

  useEffect(() => {
    fetchReviewsById(id).then((response) => {
      setSelectedReview(response.data);
      console.log(response.data);
    });
  }, [id]);

  if (!selectedChef) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bio">
      <div className="bio__container">
        <div className="bio__body-content-container">
          <div className="bio__hero-container">
            <div className="bio__profile-container">
              <img
                className="bio__chef-img"
                src={selectedChef.image}
                alt="chef profile portrait"
              />
              <div className="bio__info-container">
                <div className="bio__name-cuisine-rating">
                  <div className="bio__name-cuisine">
                    <h4 className="bio__chef-name">{`${selectedChef.name}, ${selectedChef.location}`}</h4>
                    <p className="bio__cuisines">{selectedChef.cuisine}</p>
                  </div>
                  <p className="bio__chef-rating">★{selectedChef.rating}</p>
                </div>
                <p className="bio__long-bio">{selectedChef.longBio}</p>
              </div>
            </div>
            <div className="bio__img-container">
              {selectedImage.map((image) => {
                return (
                  <img
                    className="bio__images"
                    src={image.images}
                    alt="plating images of food"
                  />
                );
              })}
            </div>
          </div>
          <section className="bio__booking-section">
            <h4 className="bio__booking-header">Book Now</h4>
            <div className="bio__booking-container">
              <Link to="/booking" className="bio__booking-link">
                <div className="bio__booking-card">
                  <h4 className="bio__booking-type">Standard</h4>
                  <p className="bio__booking-price">$90 - $120 per person</p>
                </div>
              </Link>
              <Link to="/booking" className="bio__booking-link">
                <div className="bio__booking-card">
                  <h4 className="bio__booking-type">Premium</h4>
                  <p className="bio__booking-price">$140 - $200 per person</p>
                </div>
              </Link>
              <Link to="/booking" className="bio__booking-link">
                <div className="bio__booking-card">
                  <h4 className="bio__booking-type">High-End</h4>
                  <p className="bio__booking-price">$220 - $320 per person</p>
                </div>
              </Link>
            </div>
          </section>
          <h4 className="bio__review-header">Reviews</h4>
          <div className="bio__reviews-container">
            {selectedReview.map((review) => {
              return (
                <>
                  <div className="bio__review-card">
                    <div className="bio__review-info">
                      <div className="bio__icon-reviewer">
                        <img className="bio__user-icon" src={userIcon} />
                        <p className="bio__reviewer">{review.reviewer}</p>
                      </div>
                      <p className="comment__date">
                        {/* converted timestamp to readable date*/}
                        {new Date(review.updated_at).toLocaleDateString(
                          "en-US",
                          formatDate
                        )}
                      </p>
                    </div>
                    <p className="bio__">{review.description}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="bio__booking">
          <h4 className="bio__book-heading-hidden">Book Now</h4>
          <div className="bio__book-info">
            <h4 className="bio__book-name">{selectedChef.name}</h4>
            <p className="bio__book-location">{selectedChef.location}</p>
          </div>
          <Link to="/booking" className="bio__book-link">
            <div className="bio__book-button">
              <h4 className="bio__book-title">Book Now</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChefsDetailPage;

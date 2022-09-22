import "../ChefDetailPage/ChefDetailPage.scss";
import React from "react";
import {
  formatDate,
  fetchChefsById,
  fetchImagesById,
  fetchReviewsById,
  TabTitle,
} from "../../utils/Utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="bio__chef-card">
        <div className="bio__chef-img-container">
          <img
            className="bio__chef-img"
            src={selectedChef.image}
            alt="chef portrait"
          />
          {selectedImage.map((image) => {
            return (
              <div className="bio__img-container">
                <img
                  className="bio__images"
                  src={image.images}
                  alt="Food display from chef"
                />
              </div>
            );
          })}
        </div>
        <div className="bio__body-container">
          <div className="bio__body-content">
            <div className="bio__info-container">
              <h4 className="bio__chef-name">{`${selectedChef.name}, ${selectedChef.location}`}</h4>
              <p>{selectedChef.cuisine}</p>
              <p>{selectedChef.rating}</p>
            </div>
            <p className="bio__long-bio">{selectedChef.longBio}</p>
            <h4 className="bio__review-header">Reviews</h4>
            {selectedReview.map((review) => {
              return (
                <>
                  <div className="bio__review-card">
                    <div className="bio__review-info">
                      <p className="bio__reviewer">{review.reviewer}</p>
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
          <div className="bio__booking">
            <p>This is the booking section</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefsDetailPage;

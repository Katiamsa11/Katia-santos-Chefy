import React from "react";
import {
  fetchChefsById,
  fetchImagesById,
  fetchReviewsById,
  TabTitle,
} from "../utils/Utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/Utils";

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
    <div className="chef-bio">
      <h4>{selectedChef.name}</h4>
      <img src={selectedChef.image} />
      <p>{selectedChef.bio}</p>
      <p>{selectedChef.rating}</p>
      <p>{selectedChef.cuisine}</p>
      <p>{selectedChef.location}</p>
      <p>{selectedChef.longBio}</p>
      <p className="comment__date">
        {/* converted timestamp to readable date*/}
        {new Date(selectedChef.updated_at).toLocaleDateString(
          "en-US",
          formatDate
        )}
      </p>
      {selectedReview.map((review) => {
        return(
          <>
          <p className="comment__date">
          {/* converted timestamp to readable date*/}
          {new Date(review.updated_at).toLocaleDateString(
            "en-US",
            formatDate
          )}
        </p>
       <p>{review.reviewer}</p>
        <p>{review.description}</p>
        </>
        )
      })}
      
      {selectedImage.map((image) => {
        return <img src={image.images} />;
      })}
    </div>
  );
}

export default ChefsDetailPage;

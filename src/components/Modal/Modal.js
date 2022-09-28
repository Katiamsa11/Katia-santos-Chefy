import React from "react";
import "../Modal/Modal.scss";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div className="modal">
      <div className="modal__text">
        <div className="modal__container">
          <h3 className="modal__heading">
            Thank you for choosing <span className="modal__title">chefy.</span>
          </h3>
          <p className="modal__confirmation">
            You will be redirected to your profile page.
          </p>
          <Link to="/profile" className="modal__confirm">
            ok
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;

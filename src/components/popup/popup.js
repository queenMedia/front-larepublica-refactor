import React, { useState, useEffect } from "react";
import { handleRoute, MODAL } from "../../config";
import iconClose from "../../assets/images/icons/icon-close-black.svg";
import "./popup.css";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModal(true);
    }, 50000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="popup">
          <div className="popup-container">
            <img className="popup-background" src={MODAL} alt="background" />
            <img
              onClick={() => closeModal()}
              className="popup-close"
              src={iconClose}
              alt="close"
            />
            <button onClick={() => handleRoute("popup-button")} className="popup-button">
              Empezar Ahora
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

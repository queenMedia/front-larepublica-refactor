import React, { useState, useEffect } from "react";
import { handleRoute, OFFER_NAME } from "../../config";
import iconClose from '../../assets/images/icons/icon-close.svg';
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
          <div className="popup-content">
            <p className="paragraph">
              ¡No te lo pierdas!<br/>
              Esta es la ÚLTIMA oportunidad de ingresar al<br/>
              <span className="offer">{OFFER_NAME}</span>
            </p>
            <button onClick={()=>closeModal()} type="button" className="close-modal">
              <img src={iconClose} alt="close" />
            </button>
            <div className="popup-body" onClick={handleRoute}>
              <button>Empezar Ahora</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

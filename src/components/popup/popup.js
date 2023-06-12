import React, { useState, useEffect } from "react";
import { handleRoute } from "../../config";
import iconClose from '../../assets/images/icons/icon-close.svg';
import "./popup.css";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModal(true);
    }, 5);

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
              <span className="offer">BITCOIN CODE</span>
            </p>
            <button type="button" className="close-modal">
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

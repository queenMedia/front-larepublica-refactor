import React, { useState, useEffect } from "react";
import { handleRoute, MODAL } from "../../config";
import iconClose from "../../assets/images/icons/icon-close.svg";
import "./popup.css";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const img = new Image();
    img.src = MODAL;

    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
    const interval = setInterval(() => {
      setShowModal(true);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  console.log(dimensions);
  return (
    <>
      {showModal && (
        <div className="popup">
          <div className="popup_container" style={{...dimensions, background: `url(${MODAL}) no-repeat center/cover`}}>
            <div className="popup_container_close_container">
              <img
                onClick={() => closeModal()}
                className="popup_close"
                src={iconClose}
                alt="close"
              />
            </div>
            <p className="popup_container_title_container">
              <span className="popup_container_title">¡No te lo pierdas!</span><br/>
              <span className="popup_container_subtitle">Esta es la ÚLTIMA oportunidad de ingresar al</span>
            </p>
            
            <button onClick={() => handleRoute("popup-button")} className="popup_button">
              Empezar Ahora
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

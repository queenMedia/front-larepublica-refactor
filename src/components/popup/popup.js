import React, { useState, useEffect } from "react";
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
            <div className="popup-header">
              <div className="popup-txt">
                <p>¡No te lo pierdas!</p>
                <p>Esta es la ÚLTIMA oportunidad de ingresar al</p>
                <p>BITCOIN CODE</p>
              </div>
              <div className="popup-close" onClick={closeModal}>
                <span>X</span>
              </div>
            </div>
            <div className="popup-body">
              <button>Empezar Ahora</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

import "./index.scss";
import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleStay = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
      <div className="popup-overlay">
          <div className="popup-content">
                <p>Want to check out my new & improved portfolio?</p>
              <div className="buttons">
                  <a className="b1" href="https://chat-gsc-af573a9b986a.herokuapp.com/">Duh!</a>
                  {/* <div className="divider" /> */}
                  <a className="b2" onClick={handleStay}>Meh</a>  
              </div>
            </div>
        </div>
  );
};

export default Popup;
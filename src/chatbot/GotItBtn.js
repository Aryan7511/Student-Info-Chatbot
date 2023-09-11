import React, { useState } from "react";
import "./GotItBtn.css";

const GotItBtn = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleGotItClick = () => {
    // When the "Got It" button is clicked, hide it.
    setIsVisible(false);
    props.actions.enterNameAction();
    document.getElementsByClassName("react-chatbot-kit-chat-input-container")[0].style.display = "flex";
  };

  return isVisible ? (
    <div>
      <button className="got-btn" onClick={handleGotItClick}>
        Got it!
      </button>
    </div>
  ) : null;
};

export default GotItBtn;

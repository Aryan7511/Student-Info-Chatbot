import React from "react";
import chatImage from '../images/chat.png';
import './MyAvatar.css'; // Import your CSS file

const MyAvatar = () => {
  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        <img src={chatImage} alt="chatbot" className="avatar-image" />
      </div>
    </div>
  );
};

export default MyAvatar;

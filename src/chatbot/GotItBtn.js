import React from "react";
import "./GotItBtn.css";

const GotItBtn = (props) => {
  const initialAction = () => {
    props.actions.enterNameAction();
  };
  return (
    <div>
      <button className="got-btn" onClick={() => initialAction()}>
        Got it!
      </button>
    </div>
  );
};

export default GotItBtn;

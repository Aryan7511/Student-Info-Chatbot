import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { studentActions } from "../studentInfoSlice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  // console.log(children);
  const enterNameAction = () => {
    const message = createChatBotMessage("Enter your Name");
    updateState(message, "age");
  };

  const afterNameMessage = () => {
    const message = createChatBotMessage("Enter your Age", {
      widget: "ageDropdown",
    });
    updateState(message);
  };


  const afterAgeSelection = async (age) => {
    dispatch(studentActions.setAge(age));
    const messages = children.props.children.props.state.messages;
    console.log(messages);
    for (let i = 0; i < messages.length; i++) {
      let obj = messages[i];
      if (obj.message === "Enter your Name") {
        const name = messages[i + 1].message;
        console.log(name);
        dispatch(studentActions.setName(name));
      }
    }
    const message = createClientMessage(age.toString());
    updateState(message);
    const thankYouMessage = createChatBotMessage("Thank you.");
    updateState(thankYouMessage);
    await setInterval(() => {
      dispatch(studentActions.setShowConfirmation());
    }, 3000);
  };

  const updateState = (message, checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { enterNameAction, afterNameMessage, afterAgeSelection },
        });
      })}
    </div>
  );
};

export default ActionProvider;

import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { studentActions } from "../studentInfoSlice";

let counter = 5;
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  // console.log(children);
  const enterNameAction = () => {
    const message = createChatBotMessage("Enter your Name");
    updateState(message, "age");
  };

  const afterNameMessage = () => {
    document.getElementsByClassName(
      "react-chatbot-kit-chat-input-container"
    )[0].style.display = "none";
    const message = createChatBotMessage("Enter your Age", {
      widget: "ageDropdown",
    });
    updateState(message);
  };

  const afterAgeSelection = async (age) => {
    document.getElementsByClassName(
      "react-chatbot-kit-chat-input-container"
    )[0].style.display = "flex";

    document.getElementsByClassName(
      "react-chatbot-kit-chat-input-container"
    )[0].innerHTML = "";

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
    let interval = setInterval(() => {
      if (counter === -1) {
        clearInterval(interval);
        dispatch(studentActions.setShowConfirmation());
      }
      // console.log(counter);
      document.getElementsByClassName(
        "react-chatbot-kit-chat-input-container"
      )[0].innerHTML = `
      <div class= "showfoot">
      <p class="dash">Redirecting to the dashboard</p>
      <p class ="counter"> in ${counter} seconds</p>
      </div>
      `;
      counter--;
    }, 1000);
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

import { createChatBotMessage } from "react-chatbot-kit";
import MyAvatar from "./MyAvatar";
import GotItBtn from "./GotItBtn";
import AgeDropdown from "./AgeDropdown";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotItBtn",
    }),
  ],
  botName: "Student Info Chatbot",
  customComponents: {
    botAvatar: (props) => <MyAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "gotItBtn",
      widgetFunc: (props) => <GotItBtn {...props} />,
    },
    {
      widgetName: "ageDropdown",
      widgetFunc: (props) => <AgeDropdown {...props} />,
    },

  ],
};

export default config;

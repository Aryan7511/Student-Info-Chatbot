import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import "./App.css";
import EnrollPage from "./EnrollPage";
import ConfirmationPage from "./ConfirmationPage";
import {useSelector} from 'react-redux';

const App = () => {

  const {showConfirmation } = useSelector((state) => state.studentInfo);
  const [showEnrollPage, setShowEnrollPage] = useState(true);

   const showEnrollhandler=(value)=>{
       setShowEnrollPage(value);
   }

  return (
    <div className="App">
      {!showConfirmation &&showEnrollPage && <EnrollPage showhandle={showEnrollhandler} />}
      {!showConfirmation&&!showEnrollPage && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      {showConfirmation&&<ConfirmationPage/>}
      
    </div>
  );
};

export default App;

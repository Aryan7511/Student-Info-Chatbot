import React from "react";

const MessageParser = ({ children, actions }) => {
  // console.log(children);
  const parse = (message) => {
    if (children.props.state.checker === "age") {
      actions.afterNameMessage();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

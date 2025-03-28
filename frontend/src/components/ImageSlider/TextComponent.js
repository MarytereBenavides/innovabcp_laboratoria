import React from "react";

function TextComponent(props) {
  return (
    <p className={`text-lg font-semibold mb-2 ${props.className}`}>{props.children}</p>
  );
}

export default TextComponent;
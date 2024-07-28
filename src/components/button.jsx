import React from "react";

function Button({ number, changenumber, activenumber }) {
  return (
    <button
      className={activenumber == number && "active"}
      onClick={() => changenumber(number)}
    >
      {number}
    </button>
  );
}

export default Button;

import React from "react";
import "./../style/card.scss";
import Button from "./button";
import Logo from "./../assets/icon-star.svg";

function Rate({ changesubmit, changenumber, number }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <article>
      <img src={Logo} alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div>
        {numbers.map((int) => (
          <Button
            number={int}
            key={int}
            changenumber={changenumber}
            activenumber={number}
          />
        ))}
      </div>
      <button onClick={() => changesubmit()} disabled={number === 0}>
        Submit
      </button>
    </article>
  );
}

export default Rate;

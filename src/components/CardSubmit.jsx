import React, { PureComponent } from "react";
import img from "../assets/illustration-thank-you.svg";

function CardSubmit({ changesubmit, number }) {
  return (
    <article>
      <img className="submit" src={img} alt="mobile" />

      <p className="orange">You selected {number} out of 5</p>

      <h1 className="submit" onClick={() => changesubmit()}>
        Thank you!
      </h1>

      <p className="submit">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
}

export default CardSubmit;

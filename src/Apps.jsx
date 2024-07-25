import React, { useState } from "react";
import "./style/app.scss";
import CardSubmit from "./components/CardSubmit";
import Rate from "./components/Rate";

function App() {
  const [submit, changesubmit] = useState(false);
  const [number, changenumber] = useState(0);

  function change() {
    changesubmit(!submit);
  }

  return (
    <main>
      {submit ? (
        <CardSubmit changesubmit={change} number={number} />
      ) : (
        <Rate
          changesubmit={change}
          changenumber={changenumber}
          number={number}
        />
      )}
    </main>
  );
}

export default App;

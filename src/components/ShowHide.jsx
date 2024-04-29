import React from "react";
import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(true);

  const handleClick = (event) => {
    setShow(!show);
  };

  return (
    <div>
      {show && <h1>👀</h1>}
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default ShowHide;

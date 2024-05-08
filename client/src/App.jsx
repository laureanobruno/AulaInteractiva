import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import SignIn from "./components/SignIn.jsx";

const apiCall = () => {
  axios.get("http://localhost:5000").then((data) => {
    console.log(data);
  })
}

function App() {

  return (
    <div className="App">
      <div className="flex-column">
        <img src="./N1krpB0d_400x400.jpg" alt="Description of the image" />
        <SignIn />
        <header className="App-header">

          <button onClick={apiCall}>Make API Call</button>

        </header>
      </div>
    </div>
  );
}

export default App;
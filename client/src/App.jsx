import React, {useEffect, useState} from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api").then(
      (res) => res.json()
    ).then(
      (data) => setData(data.message)
    );
  });

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
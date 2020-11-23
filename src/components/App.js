import React from "react";
import "../stylesheets/App.scss";
import api from "../services/api";

api.getApiData().then((data) => {
  console.log(data);
});

function App() {
  return <div className="App">yaaaaa????</div>;
}

export default App;

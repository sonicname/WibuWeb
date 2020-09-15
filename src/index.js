import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Topbar from "./components/Topbar";
import Main from "./components/Maincontent";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

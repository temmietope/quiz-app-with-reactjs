import React from "react";
import "./App.css";
import Header from "./Component/Header";
import QuestionsAndOptions from "./Component/QuestionsAndOptions";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <QuestionsAndOptions />
      </div>
    </div>
  );
}

export default App;

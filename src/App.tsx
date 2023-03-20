import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calender from "./Components/Calender/Calender";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const date = "20/03/2023"; //Modiy Date Form Here

  return (
    <div className="App">
      <ErrorBoundary>
        <Calender date={date} />
        <span>Appliction Made By Nitin Tiwari</span>
      </ErrorBoundary>
    </div>
  );
}

export default App;

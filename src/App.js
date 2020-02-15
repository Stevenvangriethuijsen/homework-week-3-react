import React from "react";
import "./App.css";
import QuoteSearcher from "./components/QuoteSearcher";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Quotes</h1>
      </div>
      <div className="Quotes">
        <QuoteSearcher />
      </div>
    </div>
  );
}

export default App;

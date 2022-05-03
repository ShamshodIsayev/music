import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    document.title = "Uzbek Classic Music";
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

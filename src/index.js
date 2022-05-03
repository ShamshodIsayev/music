import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SongPages from "./pages/SongPage";
import Lists from "./pages/Lists";
import Navbar from "./components/navbar/Navbar";
import AboutPages from "./pages/About";
import AboutArtist from "./pages/AboutArtist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPages />} />
          <Route path="/about/:id" element={<AboutArtist />} />
          <Route path="/" element={<App />} />
          <Route path="/list" element={<Lists />} />
          <Route path="/player" element={<SongPages />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

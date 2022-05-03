import React from "react";
import HomeSlide from "../components/HomeComp";
import "../styles/slider.css";

function Home() {
  return (
    <section className="home">
      <h1 className="home_title">Uzbek classic music</h1>
      <HomeSlide />
    </section>
  );
}

export default Home;

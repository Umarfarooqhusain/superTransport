import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import OurServices from "./components/ourServices/OurServices";
import "./App.css";

const App = () => (
  <div className="app">
    <Navbar />
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="ourServices">
        <OurServices />
      </section>
    </main>
    <Footer />
  </div>
);

export default App;

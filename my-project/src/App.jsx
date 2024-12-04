import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainImg from "./assets/magic.png";

const bgImage = {
  backgroundImage: `url(${MainImg})`,
  height: "100vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
  <>
  <main style={bgImage}>
    <Navbar />
    <Hero />
  </main>
  </>
  );
};

export default App;

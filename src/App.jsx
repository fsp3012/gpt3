import React from "react";
import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possible,
  WhatGPT3,
} from "./containers";
import { Cta, Brand,Navbarr } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbarr />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possible />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

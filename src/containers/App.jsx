import React from "react";
import Header from './Header';
import Home from "./Home"
import ServiceCount from "./ServiceCount";
import About from "./About";

const App = () => {
  return (
    <div className="w-full xl:w-[1200px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 text-white">
      <Header/>
      <Home/>
      <ServiceCount/>
      <About/>
    </div>
  );
};

export default App;

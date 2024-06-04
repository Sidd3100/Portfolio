import React from "react";
import Header from './Header';
import Home from "./Home"

const App = () => {
  return (
    <div className="w-full xl:w-[1200px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 text-white">
      <Header/>
      <Home/>
    </div>
  );
};

export default App;

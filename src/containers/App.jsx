import React from "react";
import Header from './Header';
import Home from "./Home"
import ServiceCount from "./ServiceCount";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
import ParticlesContainer from "./ParticlesContainer";

const App = () => {
  return (
    <div className="w-full xl:w-[1200px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 text-white">
      <ParticlesContainer/>
      <Header/>
      <Home/>
      <ServiceCount/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

      {/* footer */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Siddhartha Rai</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&  
            Socials.map((item,index)=>{
              <HomeSocialLinks key = {index} data={item} index={index}/>
            })}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
            <p className="text-texlight text-center">
              I am open to work on new projects and collaborations. Feel free to contact me.
            </p>
            <p className="text-texlight text-center">
              Let's create something amazing together!
            </p>
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <p className="text-texlight text-center">
                siddraimb@gmail.com
              </p>
              <p className="text-texlight text-center">
                +91 6387566061
              </p>
              <a href = "#" >
                <p className = "text-primary text-center">Hire Me</p>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;

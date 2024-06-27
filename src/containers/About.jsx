import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import { Leaf1 ,Leaf2, about} from "../assets/index.js";

const About = () => {
  return (
  <section id="about" className="flex items-center justify-center flex-col gap-12 my-12 ">

    <div className="w-full flex  items-center justify-center py-24">
      <motion.div 
      initial ={{opacity:0,width:0}}
      animate={{opacity:1,width:200}}
      exit = {{opacity:0,width:0}}
      transition={{delay:0.4}}
      className="flex items-center justify-around w-52">
        <img src={Leaf1} className="w-6 h-auto object-contain" alt=""/>
        <p classname="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">About</p>
        <img src={Leaf2} className="w-6 h-auto object-contain" alt=""/>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
        {/* image */}
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
            <img src={about} className="w-full h-auto object-contain rounded-md" alt=""/>
         
          <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur [5px] -z-10"></div>
        </div>
        </div>
      
      {/* content */}
      <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
        <p className="text-texlight text-base tracking-wide text-justify">
        My journey into web development began with a fascination for technology and a desire to understand how things work behind the scenes. Over the years, I have honed my skills in various programming languages and frameworks, with a particular focus on the MERN stack. 
        </p>
        <p className="text-texlight text-base tracking-wide text-justify">
       <li> Frontend Development: Crafting beautiful and responsive user interfaces using React. </li>
          <li> Backend Development: Building secure and efficient server-side applications with Node.js and Express.</li> 
           <li> Database Management: Designing and managing databases with MongoDB for optimal data storage and retrieval.</li> 
        </p>
        <p className="text-texlight text-base tracking-wide text-justify">
        My goal is to deliver high-quality solutions that meet the expectations and provide real value to users.
        </p>
      </div>
      </div>
      
    

  </section>)
};

export default About;

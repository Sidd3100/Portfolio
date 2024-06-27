import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import { Leaf1 ,Leaf2, about} from "../assets/index.js";
import SkillCard from "../components/SkillCard.jsx";

const Skills = () => {
  return <section id="skills" className="flex items-center justify-center flex-col gap-12 my-12 ">

    <div className="w-full flex  items-center justify-center py-24">
      <motion.div 
      initial ={{opacity:0,width:0}}
      animate={{opacity:1,width:200}}
      exit = {{opacity:0,width:0}}
      transition={{delay:0.4}}
      className="flex items-center justify-around w-52">
        <img src={Leaf1} className="w-6 h-auto object-contain" alt=""/>
        <p classname="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">Skills</p>
        <img src={Leaf2} className="w-6 h-auto object-contain" alt=""/>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
        
      
      {/* content */}
      <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
      <p classname="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">Work Experience</p>

        <li className="text-texlight text-base tracking-wide text-justify">
        SketchSymphony
<li>Role: Full Stack Developer</li>
Description: I developed SketchSymphony, a dynamic platform designed to connect artists with potential buyers. This website allows artists to showcase their work, while buyers can easily browse and purchase art pieces. The project involved creating a responsive user interface with React, managing user data with MongoDB, and implementing secure transactions with Express and Node.js.
        </li>
        <li className="text-texlight text-base tracking-wide text-justify">
        Online Cake Order "(Ongoing)"
<li>Role: Full Stack Developer</li>
Description: I am currently working on an exciting full stack project aimed at simplifying online cake ordering. This project involves building a user-friendly website where customers can browse and order cakes, track their orders, and receive updates. I am utilizing the MERN stack to develop a seamless and efficient ordering process, ensuring a delightful user experience from start to finish.
        </li>
        <li className="text-texlight text-base tracking-wide text-justify">
        EmoWell
<li>Role: Backend Developer</li>
Description: As a backend developer for the Emowell project, I contributed to creating a platform dedicated to the mental wellness of students. Emowell offers resources, tools, and a supportive community for students to improve their mental health. My responsibilities included developing and maintaining server-side logic, ensuring data integrity and security, and integrating various APIs to enhance functionality.
        </li>
      </div>
      {/* image */}
      <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
         <SkillCard skill={"HTML-5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
         <SkillCard skill={"TailwindCSS"} percentage={"75%"} color={"#8DB6CE"} move={false}/> 
         <SkillCard skill={"Javascript"} percentage={"80%"} color={"#F0DB4F"} move={true}/>
         <SkillCard skill={"ReactJs"} percentage={"75%"} color={"#61DBFB"} move={false}/> 
         <SkillCard skill={"MongoDB"} percentage={"60%"} color={"#4DB33D"} move={true}/>
         <SkillCard skill={"NodeJs"} percentage={"70%"} color={"#00684A"} move={false}/> 

        </div>
      </div>
      
    

  </section>;
};

export default Skills;

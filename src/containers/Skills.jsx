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

        <p className="text-texlight text-base tracking-wide text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis fugit sequi omnis similique reiciendis, et at expedita vitae, dolores tempore architecto tenetur recusandae enim praesentium! Et ullam itaque exercitationem.
        </p>
        <p className="text-texlight text-base tracking-wide text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis fugit sequi omnis similique reiciendis, et at expedita vitae, dolores tempore architecto tenetur recusandae enim praesentium! Et ullam itaque exercitationem.
        </p>
        <p className="text-texlight text-base tracking-wide text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis fugit sequi omnis similique reiciendis, et at expedita vitae, dolores tempore architecto tenetur recusandae enim praesentium! Et ullam itaque exercitationem.
        </p>
      </div>
      {/* image */}
      <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
         <SkillCard skill={"HTML-5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
         <SkillCard skill={"CSS-3"} percentage={"75%"} color={"#008FFF"} move={false}/> 
         <SkillCard skill={"HTML-5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
         <SkillCard skill={"CSS-3"} percentage={"75%"} color={"#008FFF"} move={false}/> 
         <SkillCard skill={"HTML-5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
         <SkillCard skill={"CSS-3"} percentage={"75%"} color={"#008FFF"} move={false}/> 

        </div>
      </div>
      
    

  </section>;
};

export default Skills;

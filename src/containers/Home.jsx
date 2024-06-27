import React from "react";
import {HeroTypeWritter, HomeSocialLinks} from '../components'
import {AnimatePresence,motion} from 'framer-motion'
import {myProfile} from "../assets/index.js"
import { Socials } from "../utils/helper.js";

const Home = () => {
  return <>
  <section id= "home" className = "flex items-center justify-center flex-col gap-12 relative">

    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
   <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
    <h2 className="text-3xl lg:text-4xl text-texlight">
      Hello, It's me 
    <span className = "block tracking-wider text-4xl lf:text-6xl mt-4 text-white">
      {" "}
      Siddhartha Rai
      </span>
    </h2>
    <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
      And I'm{" "}
      <HeroTypeWritter
      speed = {100}
      words = {["a Developer..","an Artist..","a Freelancer.."]}
      />
    </h2>
    <p className="text-base text-texlight mt-6 text-center lg:text-left">
    I'm a dedicated web developer specializing in the MERN stack. With a keen eye for detail and a passion for creating dynamic, user-friendly web applications. My strong communication skills ensure smooth collaboration and effective project management. Explore my work and see how I can bring your ideas to life!
    </p>
    {/* Social Links */}
    <div className="flex items-center justify center gap-12 mt-16">
      <AnimatePresence>
        {Socials && Socials.map((item,index)=>(
            <HomeSocialLinks key={index} data={item} index={index}/>
        ))}
      </AnimatePresence>
    </div>
    {/*Hire me link  */}
    <a href='#' style = {{boxShadow:"inset 0px 0px 10px rgba(255,255,255,0.3 )"}} className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary">
      <p className="text-texLight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">Hire Me</p>
    </a>
    </div>
    <div className="w-full h-full flex items-start justify-center lg:item-center">
      <motion.img
      initial = {{y:0}}
      animate ={{y:[-10,10,10]}}
      transition = {{
        repeat:Infinity,
        duration:2,
        ease:"linear",
      }}
      src = {myProfile}
      className="w-72 h-auto object-contain"
      />
    </div>
    </div>
    </section>
  </>
 
};

export default Home;

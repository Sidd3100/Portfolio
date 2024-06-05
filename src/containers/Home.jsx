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
      words = {["a Developer..","an Youtuber..","a Freelancer.."]}
      />
    </h2>
    <p className="text-base text-texlight mt-6 text-center lg:text-left">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam. Quo repellendus natus error maiores qui vel eos commodi animi voluptate labore, nesciunt quia facere sapiente. Omnis unde inventore recusandae.
    </p>
    {/* Social Links */}
    <div className="flex items-center justify center gap-12 mt-16">
      <AnimatePresence>
        {Socials && Socials.map((item,index)=>{
            <HomeSocialLinks key={index} data={item} index={index}/>
        })}
      </AnimatePresence>
    </div>
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

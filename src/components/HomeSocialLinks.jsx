import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomeSocialLinks = ({data,index}) => {
  return (
    <motion.a key={index} className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px]">
      <AnimatePresence>
        <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
          <data.Icon className={`text-texlight`}/>
        </div>
      </AnimatePresence>
    </motion.a>
  )
};

export default HomeSocialLinks;



/* import { motion } from "motion/react" */


import * as motion from "motion/react-client"


export default function TestingPage() {
  return (
    <motion.section className="fle flex-col">
      <motion.div 
        className="w-80 h-[55rem] bg-amber-400" 
        
        />
      <motion.div 
        className="w-80 h-[35rem] bg-red-400" 
        
        />
      <motion.div 
        className="w-80 h-[25rem] bg-green-400"
        initial={{ boxShadow: "0px 0px #fff", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 4 }}
        animate={{ boxShadow: "10px 10px #fff" }}  
        whileInView={{ opacity: 1, x: 100, y: 100 }}
        
        />
      <motion.div 
        className="w-80 h-[65rem] bg-blue-400" 
        
        />
        
    </motion.section>
  );
}
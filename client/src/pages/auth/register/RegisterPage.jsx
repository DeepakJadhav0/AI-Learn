"use client";
import React from "react";
import { motion } from "framer-motion";
import Register from "./Register";

export default function RegisterPage() {
  return (
        <motion.div
          initial={{ x: 100, opacity: 0 }}    
          animate={{ x: 0, opacity: 1 }}     
          transition={{ duration: 0.6, ease: "easeOut" }}  
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-[#f8fffa]" 
          ></motion.div>
    
          {/* Login content */}
          <div className="relative z-10">
            <Login />
          </div>
        </motion.div>
  );
}

    // <motion.div
    //   initial={{
    //     x: 80,
    //     opacity: 0,
    //     scale: 0.98,
    //     filter: "blur(6px)",
    //   }}
    //   animate={{
    //     x: 0,
    //     opacity: 1,
    //     scale: 1,
    //     filter: "blur(0px)",
    //   }}
    //   exit={{
    //     x: -80,
    //     opacity: 0,
    //     scale: 0.98,
    //     filter: "blur(6px)",
    //   }}
    //   transition={{
    //     duration: 0.9,
    //     ease: [0.16, 1, 0.3, 1], 
    //   }}
    // >
    //   <Register />
    // </motion.div>
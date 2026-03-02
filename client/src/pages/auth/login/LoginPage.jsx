"use client";
import React from "react";
import { motion } from "framer-motion";
import Login from "./Login";

export default function LoginPage() {
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

      <div className="relative z-10">
        <Login />
      </div>
    </motion.div>
  );
}
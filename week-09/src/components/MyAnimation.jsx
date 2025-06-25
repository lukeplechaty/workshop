"use client";
import { motion } from "motion/react";
export default function MyAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
    >
      <h1>hello all</h1>
    </motion.div>
  );
}

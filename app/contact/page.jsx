"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className = "container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
<div>text</div>   
<div>
  <Form />
  </div>
</div>
      </div>
  </motion.section>
  );
};

export default Contact;

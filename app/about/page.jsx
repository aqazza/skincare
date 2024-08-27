"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className = "container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          {/* Image */}
          <div className="relative w-[304px] h-[420px] xl:w-[384px] xl:h-[384px] xl:h-[534px] mb-8
          xl:mx-8">
            </div>
          {/* Text */}
          <div className="flex flex-col items-start xl:max-w-[650px] text-center
          xl:text-left mx-auto xl:mx-0">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Committed to your skin's health and beauty
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
              We believe that everyone deserves to have healthy, glowing skin. Our products are designed to help you achieve that.
            </p>
            {/* Items */}
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem />
              </div>
              <div>
                <StatsItem />
              </div>
              <div>
                <StatsItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
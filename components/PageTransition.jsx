"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return 
    <AnimatePresence>
        <Motion.div key={pathname} initial={{ opacity: 1}} />
      {children}
    </AnimatePresence>
};

export default PageTransition;
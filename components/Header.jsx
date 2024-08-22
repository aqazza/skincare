"use client";
import React, { useContext } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";


const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100
        xl:bg-transparent">
    {/* topbar */}
    <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px]
    py-4 xl:py-0">
        topbar
    </div>
    <div className="container">
        {/* logo */}
        <div>
        </div>
    {/* mobile nav trigger */}
    <div>
        <AiOutlineMenu className="text-3x; text-primary" />
    </div>
    </div>
    </header>
    );
};

export default Header;
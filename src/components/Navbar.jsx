import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className=" flex justify-between items-center py-6">
            <div className="flex shrink-0 items-center">
                <h1 className="text-4xl font-semibold bg-gradient-to-r from-pink-300 via-pink-800-500 to-purple-500 bg-clip-text text-transparent tracking-tight">AV</h1>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    )
}
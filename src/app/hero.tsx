"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
        <header className="relative p-8 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent">
      <div className="container mx-auto flex justify-center items-center min-h-[60vh] w-full text-center">
                <div className="text-center space-y-6 animate-fade-in">
          <Typography
            variant="h1"
            color="blue-gray"
                        className="text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif",  textShadow: "10px 10px 4px rgba(235, 13, 13, 0.1)"}}
          >
          Rajesh Sharma 
          </Typography>
           <Typography
            variant="lead"
            color="gray"
            className="mb-4 text-5xl !leading-tight text-3xl text-gray-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
       Software & Data Solutions Engineer
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 max-w-xl mx-auto font-sans text-gray-500"          
            >
              Bridging logic, design, and data to deliver impactful software.

          </Typography>
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/rajeshsharma98" target="_blank" rel="noopener noreferrer">
              <img src="/logos/github.svg" alt="GitHub" className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/rajeshsharma98" target="_blank" rel="noopener noreferrer">
              <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a href="mailto:sharmarajesh98@outlook.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/mail.svg" alt="Mail" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

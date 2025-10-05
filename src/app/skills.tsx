"use client";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Full-Stack Web Development",
    children:
      "Design and build scalable, responsive applications using React, Django, and RESTful APIs to balance performance with maintainability.",  
    },
  {
    icon: FingerPrintIcon,
    title: "Data Engineering & Pipelines",
    children:
      "Develop ETL pipelines, automate multi-source ingestion (APIs, web scraping, databases), and deliver clean, structured data for analytics and ML.",
  },
  {
    icon: SwatchIcon,
    title: "Machine Learning & NLP",
    children:
      "Build models for classification, anomaly detection, and topic extraction using LLMs, Transformers, and traditional ML, focusing on impact and interpretability.",    },
  {
    icon: HashtagIcon,
    title: "Cloud & DevOps",
    children:
      "Deploy and monitor cloud-native apps using AWS (EC2, S3, Lambda), Docker, and CI/CD pipelines — optimizing performance and cost.",
  },
  {
    icon: EyeIcon,
    title: "Dashboarding & Analytics",
    children:
      "Create interactive dashboards with drill-down metrics, executive summaries, and real-time insights to support informed decision-making.",
  },
  {
    icon: DocumentTextIcon,
    title: "System Design & API Architecture",
    children:
      "Architect secure, token-authenticated, modular systems that enable multi-tenant SaaS platforms, scalable microservices, and efficient backend design.",  
    },
];
const scrollToAbout = () => {
  const section = document.getElementById("about");
  if (section) {
    const offset = section.offsetTop;
    window.scrollTo({
      top: offset + 140, // scrolls 60px above the section
      behavior: "smooth",
    });
  }
};

export function Skills() {
  return (
    <section id="about" className="px-8 ">
      <div className="container mx-auto mb-20 text-center">
          {/* <a href="#about" className="inline-block mt-8 animate-bounce">
          <ChevronDoubleDownIcon className="h-8 w-8 text-blue-500 mx-auto" />
        </a> */}
        <button onClick={scrollToAbout} className="inline-block mt-8 animate-bounce py-16">
          <ChevronDoubleDownIcon className="h-8 w-8 text-blue-500 mx-auto" />
        </button>
        {/* <Typography color="blue-gray" className="mb-2 font-bold uppercase">
        </Typography> */}
        <Typography variant="h1" color="blue-gray" className="mb-4 mt-16 ">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I build intelligent, scalable, and 
          automation-first systems that power real-time decisions, optimize processes, and unlock data-driven growth. 
          From architecting multi-tenant platforms and orchestrating ETL pipelines to deploying NLP and LLM-powered applications, 
          I bring together software engineering, data science, and cloud expertise to turn complex problems into seamless digital products. My systems have served more than 10K users, 
          improved engagement by over 20 percent, reduced manual workloads by 60 percent, and saved more than $20K per month in operational costs while driving measurable business growth and efficiency.
          Whether it’s accelerating research with ML, scaling nonprofit platforms, or automating customer intelligence : I engineer solutions that create measurable impact.
        </Typography>
  
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

"use client";

import { Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  TrophyIcon,
  BeakerIcon,
  DocumentCheckIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  LightBulbIcon
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

export function Resume() {
  const [activeTab, setActiveTab] = useState<"education" | "experience" | "extras">("education");

  const educationItems = [
    {
      icon: AcademicCapIcon,
      children: (
        <>
          <strong>MS in Computer Science</strong> - Indiana University Bloomington
        </>
      ),      className: "h-5 w-5",
    },
    {
      icon: BuildingLibraryIcon,
      children: 
      <>
          <strong>Specialization Data Science & AI</strong> - IIIT Delhi
        </>,
      className: "h-5 w-5",
    },
    {
      icon: AcademicCapIcon,
      children: 
          <>
          <strong>B.Tech in Computer Science</strong> - Guru Nanak Dev University
        </>,

      className: "h-5 w-5",
    },
  ];

  const experienceItems = [
  {
    icon: BriefcaseIcon,
    children: (
      <>
        <strong>[ Current ] Senior Data Scientist </strong> - Upper Hand AI
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: BeakerIcon,
    children: (
      <>
        <strong>Founding Full Stack</strong> - Smart Charity
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: ChartBarIcon,
    children: (
      <>
        <strong>ML Engineer</strong> - Project 990 (NPO)
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: CodeBracketIcon,
    children: (
      <>
        <strong>Backend Software Engineer</strong> - Indiana University
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: ChartBarIcon,
    children: (
      <>
        <strong>Data Scientist</strong> - Indiana University
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: ChartBarIcon,
    children: (
      <>
        <strong>Data Scientist</strong> - SCEE IIT Mandi
      </>
    ),
    className: "h-5 w-5",
  },
];

const extrasItems = [
  {
    icon: TrophyIcon,
    children: (
      <>
        <strong>Winner</strong> – IU AWS GameDay 2023
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: TrophyIcon,
    children: (
      <>
        <strong>Finalist</strong> – Colts Crossroads Classic Analytic Challenge 2023
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: CursorArrowRaysIcon,
    children: (
      <>
        <strong>Diploma in Yoga Therapy</strong> – Global Vocational Center
      </>
    ),
    className: "h-5 w-5",
  },
  {
    icon: DocumentCheckIcon,
    children: (
      <>
        <strong>Publication</strong> – Magnetization in iron based compounds
      </>
    ),
    className: "h-5 w-5",
  },
];
  const currentItems =
    activeTab === "education"
      ? educationItems
      : activeTab === "experience"
      ? experienceItems
      : extrasItems;

  return (
    <section id="resume" className="px-6 sm:px-8 py-16 lg:py-24 lg:h-[750px] lg:overflow-hidden">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Skilled in full-stack engineering, machine learning, data engineering, and cloud deployment. 
            I bring a product-first mindset and engineering depth to solve business, research, and nonprofit challenges at scale.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            <a
              href="/resume/Resume-Rajesh_Sharma.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Resume
            </a>
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
          <div className="col-span-1 grid w-full pr-0 lg:pr-10 xl:pr-32 lg:-ml-5">
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={activeTab === "education" ? "filled" : "outlined"}
              onClick={() => setActiveTab("education")}
              className="flex-1 min-w-[110px]"
            >
              Education
            </Button>
            <Button
              variant={activeTab === "experience" ? "filled" : "outlined"}
              onClick={() => setActiveTab("experience")}
              className="flex-1 min-w-[110px]"
            >
              Experience
            </Button>
            <Button
              variant={activeTab === "extras" ? "filled" : "outlined"}
              onClick={() => setActiveTab("extras")}
              className="flex-1 min-w-[110px]"
            >
              Extras
            </Button>
          </div>
          <div className="grid gap-y-6 lg:h-[500px] lg:overflow-y-auto">
            {currentItems.map((props, idx) => (
              <ResumeItem key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

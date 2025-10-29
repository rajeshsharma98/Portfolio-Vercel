"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { link } from "fs";

const PROJECTS = [
        {
    img: `${getImagePrefix()}image/rag.png`,
    title: "AI-Powered Grocery Planner with Custom RAG Implementation",
    desc: "Built a production-grade full-stack application featuring custom RAG (Retrieval-Augmented Generation) from scratch to solve meal planning and food waste challenges. Engineered hybrid search combining BM25 keyword matching (60%) and vector similarity (40%) across 768-dimensional embeddings to retrieve relevant recipes with 95%+ accuracy. Integrated local LLM (Llama 3.2) via Ollama for privacy-first conversational AI with zero API costs. Developed intelligent algorithms for unit normalization using Pint library, ingredient consolidation across recipes, and shelf-life optimization that reduces food waste by 30% through graph-based meal sequencing. ",
     link: "https://github.com/rajeshsharma98/Grocery-Planner-RAG",

  },

     {
    img: `${getImagePrefix()}image/mdp.png`,
    title: "Cryptocurrency & NFT Market Data Pipeline",
    desc: "Built an end-to-end data intelligence system to collect, process, and analyze 584K+ digital asset records for market research and policy impact studies. Developed resilient ETL pipelines using Python to extract 84K+ cryptocurrency transactions,  plus 500K+ NFT records from OpenSea's marketplace API. Automated pipeline that achieved 95%+ data completeness while reducing API failures by 80%.Conducted comprehensive analysis of OpenSea's January 2022 policy changes, quantifying impacts on creator behavior, collection monetization, and secondary market dynamics to deliver actionable insights for fundraising strategies and platform economics research.",
    link: "https://github.com/rajeshsharma98/",
  },
      {
    img: `${getImagePrefix()}image/hme.png`,
    title: "HathiMine - Automated OCR Extraction Library",
    desc: "Built a Python library to automate OCR text extraction from HathiTrust's 17M+ book database using OAuth1 authentication and parallel processing. Designed fault-tolerant data extraction workflows with checkpointing, retry logic, and session management to handle multi-GB datasets efficiently. Implemented chunked file processing (200K rows/batch) and concurrent API requests (100 workers) with intelligent rate-limiting strategies, reducing text retrieval time by 70% across 10,000+ pages while ensuring 100% completion on interrupted workflows.",
    link: "https://github.com/rajeshsharma98/Experiments-Implementations",
  },
  {
    img: `${getImagePrefix()}image/ump.png`,
    title: "Unique Meal Plan Prepration",
    desc: "Built a bipartite graph-based system to recommend meal plans based on nutritional values and ingredient compatibility. Designed a custom graph embedding (not based on conventional DeepWalk) and applied K-Means clustering to group similar ingredients. Enabled allergy-aware substitutions for dietary constraints. The model supports ingredient-level personalization and aims to assist hospitals and individuals in preparing nutrition-optimized recipes with minimal human intervention.",
    link: "https://github.com/rajeshsharma98/Unique_Meal_plan",
  },
 
  {
    img: `${getImagePrefix()}image/rtr.png`,
    title: "Rent the Runway",
    desc: "Performed in-depth exploratory data analysis on Rent the Runway dataset, uncovering trends in customer behavior, product ratings, and fit satisfaction. Analyzed rental patterns across age groups, body types, and seasons. Applied sentiment analysis on reviews and visualized insights using 2D/3D plots to inform customer segmentation and occasion-based marketing strategies.",
    link: "https://github.com/rajeshsharma98/Rent_the_Runway-EDA",
  },
  {
    img: `${getImagePrefix()}image/ge.png`,
    title: "Graph Embedding",
    desc: "Designed a custom embedding approach for a bipartite ingredient-nutrient graph to represent nutritional relationships in lower-dimensional space. Built a biased random walk algorithm influenced by edge weights (normalized nutrition values) to better preserve feature significance during embedding. This technique improved ingredient clustering for dietary recommendation systems.",
    link: "https://github.com/rajeshsharma98/graph_embedding",
  },
  {
    img: `${getImagePrefix()}image/bge.png`,
    title: "Blender Game Engine",
    desc: "Created interactive game prototypes and 3D models using Blender Game Engine (v2.79). Built multiple .blend files demonstrating mechanics like player movement, collisions, shooting, and scene rendering.",    
    link: "https://github.com/rajeshsharma98/Blender_Game_Engine",
  },
  {
    img: `${getImagePrefix()}image/dre.png`,
    title: "Delegates Relation Extraction",
    desc: "Built an NLP-powered pipeline to extract executive names and job titles (e.g., CEO, VP) from M&A press releases using web scraping, Named Entity Recognition, and relationship extraction. Automated the analysis of SEC filings and business blogs to identify key delegates involved in high-value deals, reducing manual effort in business intelligence workflows.",    
    link: "https://github.com/rajeshsharma98/Delegates_Relation_Extraction",
  },
  
  {
    img: `${getImagePrefix()}image/pfr.png`,
    title: "Personalized Fashion Recommendation",
    desc: "Developed a recommendation system using H&M’s customer, article, and transaction data (31M+ records) to generate personalized fashion suggestions based on purchase history and demographic clusters. Leveraged association rules, unsupervised clustering (by age), and metadata preprocessing to enhance the shopping experience and reduce decision fatigue. Optimized data handling using GPU-based processing (cudf) and memory-efficient formats (.parquet) for scalable insights.",
    link: "https://github.com/rajeshsharma98/Personalized_Fashion_Recommendation",
  },



 
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          From Ideas to Deployments
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">        
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
      <div className="mt-20 mb-6 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-blue-gray-200"></div>
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/rajeshsharma98"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-gray-900 px-6 py-3 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-gray-800"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;

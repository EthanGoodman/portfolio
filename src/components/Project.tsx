import React, { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import sentiment from '../assets/images/portfolio-sentiment.png';
import cafe from '../assets/images/portfolio-wolfcafe.png'
import thriftbuddy from '../assets/images/portfolio-thriftbuddy.png'
import contentinsights from '../assets/images/portfolio-content-insights.png'
import cacheforge from '../assets/images/portfolio-cacheforge.svg'
import safewolf from '../assets/images/portfolio-safewolf.svg'
import packscheduler from '../assets/images/portfolio-packscheduler.svg'
import os from '../assets/images/portfolio-os.svg'
import c from '../assets/images/portfolio-c.svg'

import '../assets/styles/Project.scss';

type ProjectInfo = {
    title: string;
    image: string;
    description: string;
    tags: string[];
    links?: { label: string; url: string }[];
};

const projects: ProjectInfo[] = [
    {
        title: 'ThriftBuddy',
        image: thriftbuddy,
        description: 'An AI resale profit identifier. A multi-stage, guided AI pipeline for product identification and resale analysis built with React and FastAPI, combining OpenAI inference, marketplace search APIs, and CLIP-based image similarity to refine item matching. A serverless image ingestion and hosting workflow on Cloudflare Workers and R2 generates the short-lived public image URLs required for Google Lens-based product discovery.',
        tags: ['React', 'FastAPI', 'OpenAI', 'CLIP', 'Cloudflare'],
        links: [{ label: 'Code', url: 'https://github.com/EthanGoodman/ThriftBuddy' }],
    },
    {
        title: 'CacheForge',
        image: cacheforge,
        description: 'LLM-guided CPU cache optimization. Applied large language models to explore and optimize cache replacement strategies under strict hardware constraints, evaluating generated policies via architectural simulation and performance metrics. A meta-prompting pipeline has a larger LLM iteratively refine prompts for a smaller open-source model, driving automated policy generation past a state-of-the-art baseline.',
        tags: ['LLMs', 'Meta-Prompting', 'CPU Architecture', 'Simulation'],
    },
    {
        title: 'Content Insights',
        image: contentinsights,
        description: 'Predicts YouTube video performance from pre-publication metadata like titles, thumbnails, and tags, helping creators gauge content before posting. Engineered visual and textual features and trained a Random Forest model on 150K+ scraped videos.',
        tags: ['Machine Learning', 'Random Forest', 'Feature Engineering', 'Web Scraping'],
        links: [
            { label: 'Site', url: 'https://github.com/EthanGoodman/youtube-performance-predictor-site' },
            { label: 'Model', url: 'https://github.com/EthanGoodman/YouTube-Video-Performance-Predictor' },
        ],
    },
    {
        title: 'Twitter Sentiment Stock Price Predictor',
        image: sentiment,
        description: 'My team and I analyzed historical stock price data and Twitter sentiment for companies like Netflix, Tesla, Google, Meta, AMD, and more. Examining a variety of predictive models, we analyzed whether including sentiment scores improved prediction accuracy for short-term stock price movements. This work culminated in a formal research paper covering our methodology, findings, and implications for both data science and financial forecasting.',
        tags: ['Sentiment Analysis', 'Predictive Modeling', 'Research'],
        links: [{ label: 'Code', url: 'https://github.com/EthanGoodman/Twitter-Sentiment-Stock-Price-Prediction' }],
    },
    {
        title: 'SafeWolf',
        image: safewolf,
        description: 'A threat intelligence database. Leveraged Python and Docker to extend MISP, an open-source platform, with custom modules that enrich events with over 1,000,000 attributes from internal and external feeds. Optimized MySQL configurations, improving database performance.',
        tags: ['Python', 'Docker', 'MySQL', 'MISP'],
    },
    {
        title: 'WolfCafe',
        image: cafe,
        description: 'A coffee maker application developed in collaboration with multiple teams. Implemented frontend and backend functionality using Java, HTML, JavaScript, and a REST API, and used Git to maintain code quality, collaboration, and project integrity.',
        tags: ['Java', 'JavaScript', 'REST API', 'Git'],
    },
    {
        title: 'PackScheduler',
        image: packscheduler,
        description: 'A course scheduler for school, built in collaboration with many teams over a semester. Used the Model View Controller (MVC) pattern, implemented custom data structures to fit our needs, and relied on unit and system testing to ensure quality.',
        tags: ['Java', 'MVC', 'Data Structures', 'Testing'],
    },
    {
        title: 'Operating Systems Portfolio',
        image: os,
        description: 'Designed and implemented a custom shell interpreter with built-in command execution. Developed multi-threaded client-server applications with encrypted communication, and analyzed and resolved deadlock scenarios in multi-threaded programs.',
        tags: ['Concurrency', 'Networking', 'Encryption', 'Shell'],
    },
    {
        title: 'C Portfolio',
        image: c,
        description: 'Five projects in C: a Madlib Generator, a Base 20 to Base 10 Converter, a Record Store Application, a Custom File Hashing Algorithm, and a Map Modifier Tool, spanning data processing, security, and application design.',
        tags: ['C', 'Data Processing', 'Security'],
    },
];

function ProjectCard({ project }: { project: ProjectInfo }) {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [overflows, setOverflows] = useState(false);

    useEffect(() => {
        const measure = () => {
            const el = textRef.current;
            if (el && !expanded) setOverflows(el.scrollHeight > el.clientHeight + 1);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [expanded]);

    return (
        <div className="project">
            <div className="project-image">
                <img src={project.image} className="zoom" alt={`${project.title} preview`} />
            </div>
            <div className="project-body">
                <h2>{project.title}</h2>
                <p ref={textRef} className={`description${expanded ? ' expanded' : ''}`}>
                    {project.description}
                </p>
                {(overflows || expanded) && (
                    <button className="more" onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Less' : 'More'}
                    </button>
                )}
                <div className="tags">
                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {project.links && (
                    <div className="links">
                        {project.links.map((link) => (
                            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                                <span className="link-icon"><GitHubIcon /></span>{link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
    </div>
    );
}

export default Project;

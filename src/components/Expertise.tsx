import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const roles = [
    {
        icon: faPython,
        title: "AI/ML Engineer Intern",
        org: "Glen Raven",
        dates: "May 2026 – Present",
        points: [
            "Built an end-to-end ML pipeline on 16 years of test data, training ensemble models at ~80% accuracy to predict fabric performance pre-testing, reducing testing spend and screening designs worth $1M+.",
            "Deployed a RAG-powered AI agent with custom OpenAPI/MCP connectors and a live prediction model, retrieving from 300+ technical documents to cut research cycles from weeks to minutes.",
            "Designed a company-wide agentic AI framework for rapid development, multi-platform deployment, and centralized tracking/maintenance, shipping production automations across business units.",
        ],
        skills: ["Python", "Machine Learning", "scikit-learn", "RAG", "MCP", "Multi-Agent Systems", "Azure"],
    },
    {
        icon: faAngular,
        title: "Software Engineer Intern",
        org: "Wingswept",
        dates: "May 2025 – April 2026",
        points: [
            "Developed full-stack features across Angular (TypeScript) and Spring Boot (Java), shipping RESTful APIs and dynamic UI components while optimizing MySQL queries powering user-facing data reports.",
            "Helped rebuild the production Vertical Markets platform serving auto repair shops nationwide, delivering customer management and online-presence features to live users.",
            "Owned features from design through testing and production release in an Agile team, resolving bugs and shipping improvements each sprint.",
        ],
        skills: ["Angular", "TypeScript", "Spring Boot", "Java", "REST APIs", "MySQL", "Agile"],
    },
    {
        icon: faDocker,
        title: "Cyber Security Research Assistant",
        org: "NC State University",
        dates: "June 2024 – Dec 2024",
        points: [
            "Enhanced MISP, an open-source threat intelligence platform, using Python, Docker, and MySQL.",
            "Scaled data ingestion to 1M+ attributes and improved performance with automated workflows.",
        ],
        skills: ["Python", "Docker", "MySQL", "Git", "Linux", "Automation"],
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                {roles.map((role) => (
                    <div className="skill" key={role.title}>
                        <FontAwesomeIcon icon={role.icon} size="3x"/>
                        <h3>{role.title}</h3>
                        <p className="role-meta">{role.org} · {role.dates}</p>
                        <ul className="detail-points">
                            {role.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {role.skills.map((label) => (
                                <Chip key={label} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;

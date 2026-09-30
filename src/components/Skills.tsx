import React from 'react';

/* Programming Languages */
import pythonLogo from '../assets/images/skills/python-original.svg';
import javaLogo from '../assets/images/skills/java-original.svg';
import typescriptLogo from '../assets/images/skills/typescript-original.svg';
import javascriptLogo from '../assets/images/skills/javascript-original.svg';
import cLogo from '../assets/images/skill-c.png';
import sqlLogo from '../assets/images/skills/azuresqldatabase-original.svg';
import htmlLogo from '../assets/images/skills/html5-original.svg';
import cssLogo from '../assets/images/skills/css3-original.svg';

/* Frameworks & Web */
import fastapiLogo from '../assets/images/skills/fastapi-original.svg';
import reactLogo from '../assets/images/skills/react-original.svg';
import angularLogo from '../assets/images/skills/angular-original.svg';
import springLogo from '../assets/images/skills/spring-original.svg';
import nodeLogo from '../assets/images/skills/nodejs-original.svg';

/* Machine Learning */
import sklearnLogo from '../assets/images/skills/scikitlearn-original.svg';
import pandasLogo from '../assets/images/skills/pandas-original.svg';
import numpyLogo from '../assets/images/skills/numpy-original.svg';
import jupyterLogo from '../assets/images/skills/jupyter-original.svg';

/* Cloud, DevOps & Tools */
import azureLogo from '../assets/images/skills/azure-original.svg';
import dockerLogo from '../assets/images/skills/docker-original.svg';
import cloudflareLogo from '../assets/images/skills/cloudflare-original.svg';
import modalLogo from '../assets/images/skills/modal.svg';
import gitLogo from '../assets/images/skills/git-original.svg';
import linuxLogo from '../assets/images/skills/linux-original.svg';
import mysqlLogo from '../assets/images/skills/mysql-original-wordmark.svg';

/* Monochrome brands, drawn in the page text color */
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiNextdotjs } from 'react-icons/si';

/* Concept skills (no brand logo) */
import mcpLogo from '../assets/images/skills/mcp.svg';
import restApiLogo from '../assets/images/skills/rest-api.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleNodes,
  faBookOpenReader,
  faDiagramProject,
  faSliders,
  faArrowsToDot,
  faArrowsRotate,
  faInfinity,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';


/* Updated SCSS file with scoped styling for Skills only */
import '../assets/styles/Skills.scss';

type SkillIcon = { name: string; logo?: string; icon?: React.ReactNode };

const languages: SkillIcon[] = [
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'C', logo: cLogo },
  { name: 'SQL', logo: sqlLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
];

const frameworks: SkillIcon[] = [
  { name: 'FastAPI', logo: fastapiLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Next.js', icon: <SiNextdotjs style={{ fontSize: '75px', color: 'var(--text)' }} /> },
  { name: 'Angular', logo: angularLogo },
  { name: 'Spring Boot', logo: springLogo },
  { name: 'Node.js', logo: nodeLogo },
];

const machineLearning: SkillIcon[] = [
  { name: 'scikit-learn', logo: sklearnLogo },
  { name: 'pandas', logo: pandasLogo },
  { name: 'NumPy', logo: numpyLogo },
  { name: 'Jupyter', logo: jupyterLogo },
];

const cloudAndTools: SkillIcon[] = [
  { name: 'Azure', logo: azureLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'Cloudflare', logo: cloudflareLogo },
  { name: 'Modal', logo: modalLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', icon: <GitHubIcon sx={{ fontSize: 80, color: 'var(--text)' }} /> },
  { name: 'Linux', logo: linuxLogo },
  { name: 'MySQL', logo: mysqlLogo },
];

const aiAndAgents: SkillIcon[] = [
  { name: 'Multi-Agent Systems', icon: <FontAwesomeIcon icon={faCircleNodes} /> },
  { name: 'RAG', icon: <FontAwesomeIcon icon={faBookOpenReader} /> },
  { name: 'Model Context Protocol', logo: mcpLogo },
  { name: 'LLM Orchestration', icon: <FontAwesomeIcon icon={faDiagramProject} /> },
];

const mlConcepts: SkillIcon[] = [
  { name: 'Feature Engineering', icon: <FontAwesomeIcon icon={faSliders} /> },
  { name: 'Embeddings & Vector Search', icon: <FontAwesomeIcon icon={faArrowsToDot} /> },
];

const practices: SkillIcon[] = [
  { name: 'Agile Development', icon: <FontAwesomeIcon icon={faArrowsRotate} /> },
  { name: 'REST API Design', logo: restApiLogo },
  { name: 'CI/CD Pipelines', icon: <FontAwesomeIcon icon={faInfinity} /> },
  { name: 'Software Testing', icon: <FontAwesomeIcon icon={faListCheck} /> },
];

function ConceptGrid({ skills }: { skills: SkillIcon[] }) {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="concept-item" key={skill.name}>
          <div className="concept-icon">
            {skill.icon ?? <img src={skill.logo} alt={`${skill.name} Logo`} />}
          </div>
          <span className="concept-label">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

function IconGrid({ skills }: { skills: SkillIcon[] }) {
  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-item" key={skill.name}>
          {skill.icon ?? <img src={skill.logo} alt={`${skill.name} Logo`} />}
          <span className="skill-text">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-page" id="skills">
      <h1>Skills & Expertise</h1>

      <div className="skill-section">
        <h2>Programming Languages</h2>
        <IconGrid skills={languages} />
      </div>

      <div className="skill-section">
        <h2>Frameworks & Web</h2>
        <IconGrid skills={frameworks} />
      </div>

      <div className="skill-section">
        <h2>Machine Learning</h2>
        <IconGrid skills={machineLearning} />
        <ConceptGrid skills={mlConcepts} />
      </div>

      <div className="skill-section">
        <h2>Cloud, DevOps & Tools</h2>
        <IconGrid skills={cloudAndTools} />
      </div>

      <div className="skill-section">
        <h2>AI &amp; Agents</h2>
        <ConceptGrid skills={aiAndAgents} />
      </div>

      <div className="skill-section">
        <h2>Software Engineering</h2>
        <ConceptGrid skills={practices} />
      </div>
    </div>
  );
}

export default Skills;

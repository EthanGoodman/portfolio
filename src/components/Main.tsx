import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.jpeg'

function Main() {

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Ethan Goodman" />
        </div>
        <h1>Ethan Goodman</h1>
        <p className="role">AI/ML &amp; Full Stack Software Engineer</p>
        <p className="tagline">
          <span>I build machine learning pipelines, AI agents, and full-stack products that ship to real users.</span>{' '}
          <span>AI/ML Engineer Intern at Glen Raven and M.S. Computer Science student at NC State.</span>
        </p>
        <div className="social_icons">
          <a href="https://github.com/EthanGoodman" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/ethan-goodman-ecg/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          <a href="mailto:ethangoodman45@gmail.com" aria-label="Email"><EmailOutlinedIcon/></a>
        </div>
      </div>
    </div>
  );
}

export default Main;

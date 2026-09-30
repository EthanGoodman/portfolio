import React, {useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Skills,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className="main-container">
        <Navigation/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Skills/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
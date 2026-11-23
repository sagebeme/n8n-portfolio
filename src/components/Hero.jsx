import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">I automate the busywork</h1>
        <p className="hero-lead">
          I'm sagebeme, an automation builder in East Africa. I build n8n workflows and AI agents
          for startups and small businesses: sorting email, finding leads, researching the web.
        </p>
        <Link to="/projects" className="hero-action">
          See all {projects.length} workflows
        </Link>
        <figure className="hero-figure">
          <Link to="/projects/email-agent">
            <img
              src="/images/projects/email-agent.png"
              alt="The AI Email Agent workflow open in the n8n editor"
              width="1319"
              height="621"
              loading="eager"
            />
          </Link>
          <figcaption>AI Email Agent, as built in n8n</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

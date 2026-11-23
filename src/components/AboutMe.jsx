const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-location">Based in East Africa</p>
            <p className="about-description">
              I'm an AI Agent expert specializing in building intelligent automation workflows and AI-powered agents 
              that transform business operations. I help startups and SMBs create autonomous systems using n8n, OpenAI, 
              and advanced workflow automation tools. My AI agents handle complex tasks, make intelligent decisions, 
              and integrate seamlessly across platforms to save time, reduce errors, and scale businesses efficiently.
            </p>
            <div className="cv-link-section">
              <p>
                <strong>Looking for my software engineering portfolio?</strong>
              </p>
              <a 
                href="https://sagebeme.github.io/CV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cv-link"
              >
                View Software Engineering CV →
              </a>
            </div>
            <div className="skills">
              <h3>AI Agent & Automation Expertise</h3>
              <p className="skills-list">AI Agents, Workflow Automation, n8n, OpenAI Integration, AI-Powered Workflows, Intelligent Automation, Airtable, API Integration, HubSpot, LinkedIn API, Webhooks, REST APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://github.com/sagebeme.png" 
              alt="sagebeme - AI Agent Expert & Workflow Automation Specialist" 
              className="profile-photo"
              loading="eager"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="profile-placeholder" style={{ display: 'none' }}>
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <h1 className="profile-name">sagebeme</h1>
            <p className="about-location">📍 East Africa</p>
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
              <div className="skills-list">
                <span className="skill-tag">AI Agents</span>
                <span className="skill-tag">Workflow Automation</span>
                <span className="skill-tag">n8n</span>
                <span className="skill-tag">OpenAI Integration</span>
                <span className="skill-tag">AI-Powered Workflows</span>
                <span className="skill-tag">Intelligent Automation</span>
                <span className="skill-tag">Airtable</span>
                <span className="skill-tag">API Integration</span>
                <span className="skill-tag">HubSpot</span>
                <span className="skill-tag">LinkedIn API</span>
                <span className="skill-tag">Webhooks</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



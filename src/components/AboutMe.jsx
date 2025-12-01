const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://github.com/sagebeme.png" 
              alt="sagebeme - Fullstack Software Engineer & Workflow Automation Specialist" 
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
              I'm a fullstack software engineer and workflow automation specialist, helping startups and SMBs 
              build scalable applications and streamline operations through intelligent automation solutions. 
              With expertise in fullstack development, DevOps, and automation tools like n8n, Airtable, and OpenAI, 
              I build systems that save time, reduce errors, and scale businesses efficiently.
            </p>
            <div className="experience-section">
              <h3>Notable Projects</h3>
              <ul className="experience-list">
                <li><strong>Verido Dashboard</strong> - Fullstack development</li>
                <li><strong>Tyde Real Estate</strong> - Backend & DevOps</li>
                <li><strong>TWSolarSolutions</strong> - Fullstack development</li>
                <li><strong>The Social Hub</strong> - Trainer & Mentor (Innovation, Entrepreneurship, Leadership & Design Thinking)</li>
              </ul>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">Fullstack Development</span>
                <span className="skill-tag">Backend Engineering</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">Workflow Automation</span>
                <span className="skill-tag">API Integration</span>
                <span className="skill-tag">n8n</span>
                <span className="skill-tag">Airtable</span>
                <span className="skill-tag">OpenAI</span>
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



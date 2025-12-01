const WhatIDo = () => {
  return (
    <section id="what-i-do" className="what-i-do-section">
      <div className="container">
        <h2>What I Do</h2>
        <p className="section-intro">
          I help businesses build scalable applications, automate workflows, and integrate systems 
          to improve efficiency and reduce manual work. Here's what I specialize in:
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Fullstack Development</h3>
            <p>
              Build end-to-end applications from frontend to backend, creating scalable and maintainable 
              solutions using modern frameworks and best practices.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>
            <h3>Backend & DevOps</h3>
            <p>
              Design robust backend architectures, implement CI/CD pipelines, and manage infrastructure 
              for reliable, scalable applications with automated deployment workflows.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>n8n Workflow Automation</h3>
            <p>
              Design and implement complex automation workflows using n8n, connecting multiple 
              services and platforms to create seamless business processes.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3>Airtable Integrations</h3>
            <p>
              Build custom integrations for Airtable, connecting it with external APIs, databases, 
              and services to create powerful data management solutions.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>AI-Driven Workflows</h3>
            <p>
              Leverage OpenAI and other AI services to create intelligent automation that can 
              process content, make decisions, and generate insights automatically.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3>API Integrations</h3>
            <p>
              Connect various platforms like HubSpot, LinkedIn, payment processors, and more 
              through custom API integrations and webhooks.
            </p>
          </div>
        </div>
        <div className="target-audience">
          <p>
            <strong>I work with:</strong> Startups and SMBs looking to build scalable applications, 
            automate repetitive tasks, improve data flow between systems, and scale their operations 
            without proportionally increasing manual work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;



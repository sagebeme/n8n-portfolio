const WhatIDo = () => {
  return (
    <section id="what-i-do" className="what-i-do-section">
      <div className="container">
        <h2>What I Do</h2>
        <p className="section-intro">
          I specialize in building AI Agents and intelligent automation workflows that transform how businesses operate. 
          Here's what I focus on:
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>AI Agent Development</h3>
            <p>
              Build intelligent AI agents that can autonomously handle complex tasks, make decisions, 
              and interact with multiple systems to automate entire business processes.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Intelligent Workflow Automation</h3>
            <p>
              Design and implement AI-powered workflows that learn, adapt, and optimize themselves 
              to continuously improve business operations and decision-making.
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
              process content, make decisions, generate insights, and learn from patterns automatically.
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
            <h3>Multi-Platform AI Integration</h3>
            <p>
              Connect AI agents across platforms like HubSpot, LinkedIn, Airtable, payment processors, 
              and more through intelligent API integrations and webhooks.
            </p>
          </div>
        </div>
        <div className="target-audience">
          <p>
            <strong>I work with:</strong> Startups and SMBs looking to implement AI agents and intelligent automation 
            to handle complex workflows, automate decision-making processes, improve data flow between systems, 
            and scale their operations with autonomous AI-powered solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;



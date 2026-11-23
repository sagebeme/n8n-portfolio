import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

// Each service points at the real workflows that show it (by project id).
const services = [
  {
    title: 'AI agents',
    text: 'Agents that read, sort and reply to email, answer questions from your own documents, or search the web and write up what they find.',
    examples: ['email-agent', 'chatbot-rag-voice', 'web-research-agent'],
  },
  {
    title: 'Lead generation',
    text: 'Workflows that collect business and contact details from Google Search, Google Maps and LinkedIn into one list you can work from.',
    examples: ['lead-generation-agent', 'google-map-business-scraper', 'linkedin-profile-scraper'],
  },
  {
    title: 'Connecting your apps',
    text: 'n8n workflows that pass data between the tools you already use, triggered by a form, a schedule or a webhook.',
    examples: ['n8n-lead-generation', 'social-media-automation'],
  },
];

const projectById = (id) => projects.find((project) => project.id === id);

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="what-i-do-section">
      <div className="container">
        <h2>What I build</h2>
        <p className="section-intro">
          Three kinds of work, each with real workflows you can open. I work with startups and
          small businesses that want repetitive work off their plate.
        </p>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.title} className="service-row">
              <h3>{service.title}</h3>
              <div>
                <p>{service.text}</p>
                <p className="service-examples">
                  Examples:{' '}
                  {service.examples.map((id, idx) => (
                    <span key={id}>
                      {idx > 0 && ', '}
                      <Link to={`/projects/${id}`}>{projectById(id).title}</Link>
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

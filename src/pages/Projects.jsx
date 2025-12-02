import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Projects = () => {
  return (
    <>
      <SEO
        title="AI Agent Projects - sagebeme Portfolio | Workflow Automation & AI Agents"
        description="Explore AI Agent and workflow automation projects. Intelligent agents that autonomously handle business processes, make decisions, and optimize workflows using n8n, OpenAI, and advanced automation."
        keywords="AI agent projects, workflow automation, AI agents, n8n automation, OpenAI integration, intelligent automation, autonomous agents, workflow optimization"
        url="/projects"
      />
      <StructuredData />
      <main className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1>Projects</h1>
          <p className="page-intro">
            Explore my AI Agent and workflow automation projects. Each AI agent is designed to autonomously 
            handle complex business processes, make intelligent decisions, and continuously optimize operations.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="project-card"
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="project-placeholder" style={{ display: 'none' }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="project-tech">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default Projects;



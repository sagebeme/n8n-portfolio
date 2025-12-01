import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO
        title={`${project.title} - sagebeme Portfolio`}
        description={project.description}
        keywords={project.techStack.join(', ')}
        url={`/projects/${project.id}`}
        image={project.image}
        type="article"
      />
      <StructuredData />
      <main className="project-detail-page">
      <div className="container">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
        <article className="project-detail">
          <div className="project-header">
            <span className="project-category">{project.category}</span>
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-image-main">
            <img 
              src={project.image} 
              alt={`${project.title} - ${project.description}`}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="project-placeholder-large" style={{ display: 'none' }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <p>Project Image</p>
            </div>
          </div>
          <div className="project-details-grid">
            <div className="detail-section">
              <h2>Tech Stack</h2>
              <div className="tech-stack-list">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag-large">{tech}</span>
                ))}
              </div>
            </div>
            <div className="detail-section">
              <h2>Key Outcomes</h2>
              <ul className="outcomes-list">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
          {(project.demoLink || project.githubLink) && (
            <div className="project-links">
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  View Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </article>
      </div>
    </main>
    </>
  );
};

export default ProjectDetail;



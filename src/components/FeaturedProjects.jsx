import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

// The first featured project is the hero picture, so this list starts after it.
const featured = projects.filter((project) => project.featured).slice(1);

const FeaturedProjects = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <h2>More workflows I've built</h2>
        <div className="featured-list">
          {featured.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="featured-item">
              <img
                src={project.image}
                alt={`${project.title} workflow in the n8n editor`}
                width="1319"
                height="621"
                loading="lazy"
              />
              <div className="featured-text">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <p className="featured-tech">{project.techStack.join(', ')}</p>
                <span className="featured-more">How it works →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

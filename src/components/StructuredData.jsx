import { useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

const StructuredData = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Person/Profile Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "sagebeme",
    "alternateName": "sagebeme",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "image": typeof window !== 'undefined' ? `${window.location.origin}/https://github.com/sagebeme.png` : '',
    "jobTitle": "Fullstack Software Engineer & Workflow Automation Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "East Africa"
    },
    "email": "eudicus5k@gmail.com",
    "telephone": "+254113180148",
    "sameAs": [
      "https://github.com/sagebeme"
    ],
    "knowsAbout": [
      "Fullstack Development",
      "Backend Engineering",
      "DevOps",
      "Workflow Automation",
      "API Integration",
      "n8n",
      "Airtable",
      "OpenAI"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "sagebeme Portfolio",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "description": "Fullstack software engineer and workflow automation specialist portfolio",
    "author": {
      "@type": "Person",
      "name": "sagebeme"
    }
  };

  // Portfolio/Collection Schema for Projects page
  let portfolioSchema = null;
  if (pathname === '/projects' || pathname.startsWith('/projects/')) {
    portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Portfolio Projects",
      "description": "Collection of automation and software development projects",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": typeof window !== 'undefined' ? `${window.location.origin}/projects/${project.id}` : '',
          "keywords": project.techStack.join(", ")
        }
      }))
    };
  }

  // Individual Project Schema
  let projectSchema = null;
  if (pathname.startsWith('/projects/')) {
    const projectId = pathname.split('/projects/')[1];
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
      projectSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "url": typeof window !== 'undefined' ? `${window.location.origin}/projects/${project.id}` : '',
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "keywords": project.techStack.join(", "),
        "creator": {
          "@type": "Person",
          "name": "sagebeme"
        }
      };
    }
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": (() => {
      const items = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": typeof window !== 'undefined' ? window.location.origin : ''
        }
      ];

      if (pathname === '/projects') {
        items.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": typeof window !== 'undefined' ? `${window.location.origin}/projects` : ''
        });
      } else if (pathname.startsWith('/projects/')) {
        items.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": typeof window !== 'undefined' ? `${window.location.origin}/projects` : ''
        });
        const projectId = pathname.split('/projects/')[1];
        const project = projects.find(p => p.id === projectId);
        if (project) {
          items.push({
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": typeof window !== 'undefined' ? `${window.location.origin}/projects/${project.id}` : ''
          });
        }
      } else if (pathname === '/contact') {
        items.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": typeof window !== 'undefined' ? `${window.location.origin}/contact` : ''
        });
      }

      return items;
    })()
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {portfolioSchema && (
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      )}
      {projectSchema && (
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </>
  );
};

export default StructuredData;


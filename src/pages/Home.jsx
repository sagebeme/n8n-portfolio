import AboutMe from '../components/AboutMe';
import WhatIDo from '../components/WhatIDo';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Home = () => {
  return (
    <>
      <SEO
        title="sagebeme - Fullstack Software Engineer & Workflow Automation Specialist"
        description="Fullstack software engineer and workflow automation specialist. Expert in building scalable applications, backend development, DevOps, n8n, Airtable, and OpenAI integrations. Based in East Africa."
        keywords="fullstack developer, software engineer, workflow automation, n8n, Airtable, API integration, OpenAI, backend development, DevOps, East Africa, sagebeme"
        url="/"
        image="https://github.com/sagebeme.png"
      />
      <StructuredData />
      <main className="home-page">
        <AboutMe />
        <WhatIDo />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;



import AboutMe from '../components/AboutMe';
import WhatIDo from '../components/WhatIDo';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Home = () => {
  return (
    <>
      <SEO
        title="sagebeme - AI Agent Expert & Workflow Automation Specialist"
        description="AI Agent expert specializing in building intelligent automation workflows and AI-powered agents. Expert in n8n, OpenAI, Airtable, and creating autonomous systems that transform business operations. Based in East Africa."
        keywords="AI agent expert, workflow automation, AI agents, n8n, OpenAI, intelligent automation, autonomous agents, workflow optimization, Airtable, East Africa, sagebeme"
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



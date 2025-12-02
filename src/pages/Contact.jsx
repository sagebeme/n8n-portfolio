import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact - sagebeme | AI Agent Expert"
        description="Get in touch with sagebeme for AI Agent development, workflow automation, and intelligent automation solutions. Based in East Africa."
        keywords="contact, hire AI agent expert, workflow automation consultant, AI automation specialist, East Africa"
        url="/contact"
      />
      <StructuredData />
      <main className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p className="page-intro">
            Ready to automate your workflows? Let's discuss how I can help streamline your 
            business processes and integrate your systems.
          </p>
        </div>
      </div>
      <ContactSection />
    </main>
    </>
  );
};

export default Contact;



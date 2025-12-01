import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact - sagebeme | Get In Touch"
        description="Get in touch with sagebeme for workflow automation, fullstack development, backend engineering, and DevOps solutions. Based in East Africa."
        keywords="contact, hire developer, workflow automation consultant, fullstack developer, East Africa"
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



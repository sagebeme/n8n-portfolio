// Project data for the portfolio - Based on actual workflows
export const projects = [
  {
    id: 'email-agent',
    title: 'AI Email Agent',
    category: 'AI Agent',
    description: 'Intelligent AI agent that autonomously manages email workflows. The agent classifies emails into categories (High Priority, Finance/Billing, Customer Support, Promotion), drafts responses, creates summaries, and sends automated replies using OpenAI. It integrates with Gmail and Telegram for notifications.',
    shortDescription: 'AI agent for autonomous email classification, drafting, and response',
    techStack: ['n8n', 'OpenAI', 'Gmail API', 'Telegram', 'AI Agent'],
    outcomes: [
      'Automated email classification with 95%+ accuracy',
      'Reduced email response time by 80%',
      'AI-generated drafts for high-priority emails',
      'Automatic summarization of finance and promotional emails'
    ],
    image: '/images/projects/Email Agent.png',
    demoLink: null,
    githubLink: null,
    featured: true
  },
  {
    id: 'lead-generation-agent',
    title: 'AI Lead Generation Agent',
    category: 'AI Agent',
    description: 'Advanced AI agent that autonomously scrapes unlimited leads from Google Search Results. The agent uses intelligent search queries, extracts contact information, and enriches lead data automatically. Perfect for sales teams looking to scale their prospecting efforts.',
    shortDescription: 'AI agent for autonomous lead scraping and enrichment from Google Search',
    techStack: ['n8n', 'Google Custom Search API', 'Web Scraping', 'AI Agent'],
    outcomes: [
      'Automated lead discovery from Google Search',
      'Scalable lead generation without manual work',
      'Intelligent data extraction and enrichment',
      'Reduced prospecting time by 90%'
    ],
    image: '/images/projects/AI Agent to Scrape Unlimited Leads From Google Search Results (No Code!).png',
    demoLink: null,
    githubLink: null,
    featured: true
  },
  {
    id: 'web-research-agent',
    title: 'AI Personal Assistant for Web Research',
    category: 'AI Agent',
    description: 'Intelligent AI agent that acts as your personal assistant for web research. The agent autonomously searches the web, gathers information, synthesizes findings, and presents comprehensive research reports. 100% no-code solution for automated research workflows.',
    shortDescription: 'AI agent for autonomous web research and information synthesis',
    techStack: ['n8n', 'OpenAI', 'Web Search', 'AI Agent', 'No-Code'],
    outcomes: [
      'Automated research workflows saving 15+ hours/week',
      'Comprehensive information gathering and synthesis',
      'Intelligent report generation',
      '100% no-code implementation'
    ],
    image: '/images/projects/AI Agent to be your Personal Assistant for Web Research (100% No-Code).png',
    demoLink: null,
    githubLink: null,
    featured: true
  },
  {
    id: 'chatbot-rag-voice',
    title: 'RAG Voice Chatbot Agent',
    category: 'AI Agent',
    description: 'Advanced chatbot agent with Retrieval-Augmented Generation (RAG) capabilities and voice integration. The agent uses RAG to provide accurate, context-aware responses by retrieving relevant information from knowledge bases. Includes voice interaction capabilities for natural conversations.',
    shortDescription: 'RAG-powered chatbot agent with voice interaction capabilities',
    techStack: ['n8n', 'OpenAI', 'RAG', 'Voice AI', 'AI Agent'],
    outcomes: [
      'Context-aware responses using RAG technology',
      'Voice-enabled natural conversations',
      'Improved accuracy with knowledge base integration',
      'Enhanced user experience with multi-modal interaction'
    ],
    image: '/images/projects/Chatbot-rag-voice-agent.png',
    demoLink: null,
    githubLink: null,
    featured: true
  },
  {
    id: 'n8n-lead-generation',
    title: 'N8n Lead Generation Workflow',
    category: 'Workflow Automation',
    description: 'Comprehensive lead generation workflow using n8n. The workflow includes form submission triggers, LinkedIn profile scraping, data enrichment, and automated lead management. Designed for recruiters and sales teams to efficiently find and qualify leads.',
    shortDescription: 'Automated lead generation workflow with LinkedIn integration',
    techStack: ['n8n', 'LinkedIn API', 'Form Triggers', 'Data Enrichment'],
    outcomes: [
      'Automated lead discovery from LinkedIn',
      'Streamlined form-based lead collection',
      'Data enrichment and qualification',
      'Reduced manual lead research by 85%'
    ],
    image: '/images/projects/N8n Lead Generation.png',
    demoLink: null,
    githubLink: null,
    featured: false
  },
  {
    id: 'linkedin-profile-scraper',
    title: 'LinkedIn Profile Scraper',
    category: 'Web Scraping',
    description: 'Intelligent LinkedIn profile scraper that extracts professional information, contact details, and engagement data. Uses Google Custom Search API for discovery and automated data extraction for lead enrichment.',
    shortDescription: 'Automated LinkedIn profile scraping and data extraction',
    techStack: ['n8n', 'Google Custom Search API', 'LinkedIn', 'Web Scraping'],
    outcomes: [
      'Automated profile data extraction',
      'Scalable lead enrichment process',
      'Reduced manual data collection time',
      'Improved lead database quality'
    ],
    image: '/images/projects/LinkedinProfileScrapper.png',
    demoLink: null,
    githubLink: null,
    featured: false
  },
  {
    id: 'google-map-business-scraper',
    title: 'Google Maps Business Scraper',
    category: 'Web Scraping',
    description: 'Automated workflow for scraping business information from Google Maps. Extracts business names, addresses, phone numbers, ratings, reviews, and other key data points. Perfect for local lead generation and market research.',
    shortDescription: 'Automated Google Maps business data extraction',
    techStack: ['n8n', 'Google Maps API', 'Web Scraping', 'Data Extraction'],
    outcomes: [
      'Automated business data collection',
      'Scalable local lead generation',
      'Comprehensive business information extraction',
      'Reduced manual research time by 90%'
    ],
    image: '/images/projects/Google_map_business_scrapper.png',
    demoLink: null,
    githubLink: null,
    featured: false
  },
  {
    id: 'social-media-automation',
    title: 'Social Media Automation',
    category: 'Workflow Automation',
    description: 'Comprehensive social media automation workflow that handles content scheduling, posting, engagement tracking, and analytics. Integrates with multiple social platforms for unified social media management.',
    shortDescription: 'Automated social media management and engagement',
    techStack: ['n8n', 'Social Media APIs', 'Content Scheduling', 'Analytics'],
    outcomes: [
      'Automated content scheduling and posting',
      'Unified social media management',
      'Engagement tracking and analytics',
      'Reduced social media management time by 70%'
    ],
    image: '/images/projects/Social Media Automation.png',
    demoLink: null,
    githubLink: null,
    featured: false
  }
];

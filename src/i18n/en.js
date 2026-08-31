import { Shield, Wifi, Wrench, Zap } from "lucide-react";

const en = {
  // Navbar
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
    cta: "CALL 6055",
    closeMenu: "Close menu",
    toggleMenu: "Toggle navigation menu",
  },

  // Hero
  hero: {
    badge1: "Solution",
    badge2: "Service",
    headline1: "+ 20 years ",
    headlineHighlight: " of experience",
    subtext:
      "Since 2004, and for over twenty years, we have been building a telecommunications network to be the first choice for individuals and institutions in service speed and stability. ",
    ctaSupport: "Instant Support",
    ctaServices: "Discover Services",
    partners: "Our Partners",
    nationalFiberTitle: "National Fiber Backbone",
    nationalFiberDesc:
      "The digital foundation crossing cities and provinces of Iraq.",
    expertsOnCall: "We're here for you, ",
    partnerCardTitle: "Trusted global partners",
    partnerCardDesc:
      "Such as Cisco, Google, and Huawei supporting your growth.",
    partnershipCardTitle: "Official partnership",
    partnershipCardDesc: "With the Iraqi Ministry of Communications & the CMC.",
  },

  // About Page & Section
  about: {
    heroBanner: "About Us",
    headline: "Connecting People, Empowering Iraq's",
    headlineHighlight: "Digital Future",
    subtext:
      "For over two decades, Al Jazeera Telecom has built the core digital highway of Iraq, delivering high-speed internet and professional telecom services.",
    valuesBadge: "Values",
    valuesHeading: "The Principles That Guide Us",
    values: [
      {
        title: "Our Mission",
        description:
          "To deliver reliable high-speed broadband and bespoke digital solutions across all regions of Iraq, promoting progress and digital inclusivity.",
      },
      {
        title: "Our Vision",
        description:
          "To lead Iraq's transition into a modern digital era by constantly expanding and updating our infrastructure with state-of-the-art telecom tech.",
      },
      {
        title: "Integrity & Security",
        description:
          "We secure our users' privacy and maintain full accountability, establishing bulletproof connections that companies and households trust.",
      },
      {
        title: "Customer Support",
        description:
          "Our customer support teams operate around the clock, providing 24/7 technical expertise, maintaining consistent link reliability.",
      },
    ],
    // AboutSection component
    badge: "About us",
    sectionHeading: "Iraq's trusted name in ",
    sectionHeadingHighlight: "Fiber Connectivity",
    sectionSubtext: "",
    sectionBody:
      "Al Jazeera Telecom is Iraq's leading fiber-optic internet provider, connecting homes, businesses, and institutions with ultra-fast, reliable broadband. Since 2004, we've grown from a single-city ISP into a nationwide infrastructure operator, working hand-in-hand with government agencies, enterprise clients, and residential communities.",
    timelineTitle: "Our Journey",
    timeline: [
      {
        year: "2004",
        title: "Company founded and launched via VSAT technology in Baghdad ",
      },
      {
        year: "2010",
        title:
          " Signed first partnership contract with the Iraqi Ministry of Communications to market and transit international capacity through land border crossings ",
      },
      {
        year: "Today",
        title:
          "Al Jazeera Telecom selected by the Ministry of Communications to implement and market the transition project from Wireless to Fiber-to-the-Home (FTTH) in Baghdad – Rusafa side ",
      },
    ],
    stats: [
      { value: "490M+", label: "Happy Clients" },
      { value: "4.9/5", label: "Clients Rating" },
      { value: "20+", label: "Years of Excellence" },
      { value: "24/7", label: "Expert Support" },
    ],
    learnMore: "Learn More About Us",
    now: "NOW",
    companyBadge: "About Us",
    companyHeading: "About the Company",
    companyParagraphs: [
      "In late 2004, as internet usage began spreading in Iraq, Al Jazeera Telecom was founded by a group of young Iraqi engineers, becoming one of the first companies to provide internet service within the country.",
      "The company started in Baghdad, then gradually expanded to cover 14 Iraqi provinces, gaining extensive experience across the country. Today, Al Jazeera Telecom focuses its services on the Rusafa side of Baghdad and Diyala delivering the highest levels of quality and stability to its customers. Its services are not limited to home internet only, but extend to include customized packages and capacities for companies and institutions, implementation and management of data centers, intranet services, management of surveillance camera networks, as well as design, implementation, and management of websites and applications along with website and data hosting services.",
      "The company also provides civil solutions including tower installation and construction works, alongside power solutions. Through this, Al Jazeera Telecom has contributed to providing thousands of jobs directly or through agents and contractors.",
    ],
    yearsTimelineTitle: "Al Jazeera Telecom Through the Years:",
    yearsTimeline: [
      {
        year: "2004",
        text: "Company founded and launched via VSAT technology in Baghdad",
      },
      { year: "2006", text: "Provided internet services via VSAT technology" },
      {
        year: "2007",
        text: "Began transitioning from VSAT to fiber optics to increase international capacity and lower prices, relying on Wireless technology for local service delivery",
      },
      {
        year: "2010",
        text: "Signed first partnership contract with the Iraqi Ministry of Communications to market and transit international capacity through land border crossings",
      },
      {
        year: "2015",
        text: "Renewed partnership contract with the Iraqi Ministry of Communications",
      },
      { year: "2016", text: "Network coverage reached all 14 Iraqi provinces" },
      {
        year: "2020",
        text: "Renewed partnership contract with the Iraqi Ministry of Communications for the second time",
      },
      {
        year: "2021",
        text: "Al Jazeera Telecom selected by the Ministry of Communications to implement and market the transition project from Wireless to Fiber-to-the-Home (FTTH) in Baghdad – Rusafa side",
      },
    ],
  },

  // Why Choose Us
  whyChooseUs: {
    badge: "Why choose us",
    heading: "Over  ",
    headingHighlight: "two decades",
    headingEnd: "trust and continuity.",
    subtext:
      "To continue solidifying its position as one of the oldest and most trusted internet service providers in Rusafa and Diyala. To be the first choice for individuals and institutions thanks to the speed and stability of its service, which has proven its quality over past years as it will continue to do so in the years ahead.",
    reasons: [
      {
        number: "01",
        title: "Exclusive rights for FTTH fiber-optic service",
        description:
          "The authorized provider for implementing and marketing this service in the Rusafa area of Baghdad, through an official partnership with the Ministry of Communications. ",
        image: "/hero/hero_tech_team.webp",
        cta: { label: "Explore Our Network", href: "/services" },
      },
      {
        number: "02",
        title: "Integrated solutions beyond internet",
        description:
          "Alongside internet services, Al Jazeera offers alternative energy solutions, data centers, security surveillance systems, internal networks, and IoT (Internet of Things) solutions. ",
      },
      {
        number: "03",
        title: "Over 20 years of experience",
        description:
          "One of the first companies to provide internet service in Iraq, since 2004. ",
        cta: { label: "Explore Our Network", href: "/services" },
      },
    ],
  },

  // Projects Section
  projects: {
    badge: "Pioneering Projects",
    heading: "Key achievements and partnerships",
    headingHighlight: "with official entities",
    viewAll: "View All Projects →",
    list: [
      {
        title: "Rusafa Fiber Optic Network",
        description:
          "Under an official contract with the Ministry of Communications, we're bringing fiber-optic internet directly to homes across Baghdad's Rusafa district.",
        bullets: [
          "Official Ministry of Communications contract",
          "FTTH deployment across Rusafa district",
          "Gigabit speeds to every household",
        ],
        image: "/services/service_fttx.webp",
      },
      {
        title: "Advanced Data Centers",
        description:
          "Our large-scale data center runs on the latest technology, delivering high-performance internet and telecom services to our users.",
        bullets: [
          "State-of-the-art server infrastructure",
          "High-performance internet & telecom services",
          "24/7 monitoring and management",
        ],
        image: "/services/service_cloud_migration.webp",
      },
      {
        title: "Government Telecom Hubs",
        description:
          "We've built a network of medium and small data centers within government telecom complexes, tailored to meet subscriber needs.",
        bullets: [
          "Medium & small-scale data centers",
          "Located in official telecom complexes",
          "Subscriber-tailored capacity planning",
        ],
        image: "/hero/hero_tech_team.webp",
      },
      {
        title: "Infrastructure Development",
        description:
          "Establishment, implementation, and development of an infrastructure and fiber-optic cable network to transfer internet capacity from border crossings to city centers.",
        bullets: [
          "Fiber-optic backbone across border crossings",
          "National capacity transit infrastructure",
          "City-center internet distribution network",
        ],
        image: "/services/service_wireless.webp",
      },
    ],
  },

  // Services Page
  services: {

    heroBanner: "Our Services",
    badge: "Our Services",
    heading: "Comprehensive Tech & Telecom Solutions",
    subtext:
      "Explore our full suite of professional services designed to keep your business connected, secure, and running smoothly. From high-speed fiber solutions to enterprise system architectures.",
    ctaButton: "Request Consultation",
    welcomeText: "Welcome to ",
    flipWords: [
      "Al Jazeera Telecom",
      "Iraq's Fiber Pioneer",
      "Unmatched Speed",
      "24/7 Support",
    ],
    sectionHeading: "Services designed to fit your needs .",
    sectionBody:
      "We offer internet services for individuals and institutions, data centers, and networking, power, and civil works solutions. ",
    allServices: "All services",
    getStarted: "Get Started",
    list: [
      {
        title: "Fiber Optic Internet (FTTH)",
        description:
          "High speeds and stable data flow, ideal for high-quality streaming and gaming. ",
        detailsds:
          "Using cutting-edge GPON and XGS-PON technologies, we deliver Gigabit speeds directly to your building with minimal latency.",
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        details:
          "Using cutting-edge GPON and XGS-PON technologies, we deliver Gigabit speeds directly to your building with minimal latency.",
        image: "/services/service_fttx.webp",
      },
      {
        title: "Corporate & Institutional Solutions",
        description:
          "Customized internet packages with speeds ranging from 1 Mbps up to 10 Gbps.",
        details:
          "Tailored SLAs, dedicated bandwidth, redundant routes, and guaranteed uptime to ensure corporate business stability.",
        icon: <Wrench className="w-6 h-6 text-blue-500" />,
        details:
          "Save on communication costs with cloud-hosted PBX, call routing, auto-attendant features, and multi-line business setups.",
        image: "/services/service_tech_support.webp",
      },
      {
        title: "Data Centers & Monitoring Systems",
        description:
          "Design, implementation, and management of secure data centers, along with integrated surveillance camera systems.",
        details:
          "Professional rack design, reliable backup systems, cooling management, and centralized security monitoring solutions.",
        icon: <Shield className="w-6 h-6 text-blue-500" />,
        details:
          "Security audits, firewalls, network monitoring, DDoS mitigation, and continuous threat prevention for enterprise infrastructure.",
        image: "/services/service_it_consulting.webp",
      },
      {
        title: "Wireless Internet",
        description:
          "Coverage reaching areas difficult to connect via fiber optic cable, through advanced towers and transmission equipment.",
        details:
          "Point-to-Point (P2P) and Point-to-Multipoint (P2MP) wireless systems bridging long distances and providing wide coverage area.",
        icon: <Wifi className="w-6 h-6 text-blue-500" />,
        details:
          "Point-to-Point (P2P) and Point-to-Multipoint (P2MP) wireless systems bridging long distances and providing wide coverage area.",
        image: "/services/service_wireless.webp",
      },
    ],
  },

  // Pricing
  pricing: {
    badge: "Service",
    heading: "Fiber plans for",
    headingHighlight: "every home",
    subtext:
      "Four FTTH tiers on the same fiber line — unlimited data on all of them. Prices are monthly, in Iraqi dinar.",
    mostPopular: "POPULAR",
    perMonth: "IQD/mo",
    subscribe: "Contact Us",
    contactPrompt: "Please contact us so we can guide you.",
    stats: {
      devices: "Devices",
      streams: "4K Streams",
      fileSize: "5 GB File",
      perMbps: "Per Mbps",
    },
    plans: [
      {
        name: "Speed Plus",
        description:
          "Browsing, social, HD streaming and homework for a small household.",
      },
      {
        name: "Speed Pro",
        description:
          "Several people online at once, video calls and console downloads.",
      },
      {
        name: "Speed Max",
        description:
          "Low-latency ranked sessions, 4K on every screen, heavy uploads.",
      },
      {
        name: "Speed Ultra",
        description:
          "Work from home, servers, CCTV upload and a full office of devices.",
      },
    ],
    features: ["mbps Peak Times", "Unlimited Data", "Low Gaming Latency"],
  },

  // Contact Section
  contact: {
    heroBanner: "Contact Us",
    badge: "Connect with Us",
    heading1: "Ready to connect,  ",
    headingHighlight: "grow, and build",
    heading2: "with us?",
    subtext:
      "Whether you're looking for fast home internet, integrated solutions for your company, or a  large infrastructure project, our team is ready to help you. ",
    infoCards: {
      phone: { label: "Phone", val: "6055" },
      email: { label: "Email", val: "info@jt.iq" },
      address: {
        label: "Address",
        val: "Karrada – Al-Wahda District, near Uqba Square, opposite Ashur Bank, Baghdad, Iraq ",
      },
    },
    form: {
      title: "Send Us a Message",
      subtitle: "We'll get back to you with custom plans within 24 hours.",
      fullName: "Full Name",
      namePlaceholder: "E.g., John Doe",
      emailAddress: "Email Address",
      emailPlaceholder: "E.g., name@example.com",
      phone: "Phone Number (Optional)",
      phonePlaceholder: "E.g., +964 770 000 0000",
      message: "Your Message",
      messagePlaceholder: "Tell us about your internet requirements...",
      submit: "Send Your Message",
      successMsg:
        "✓ Thank you! Your message has been sent successfully. We will contact you soon.",
    },
  },

  // Footer
  footer: {
    tagline:
      "Connecting Iraq since 2004 with cutting-edge fiber-optic networks, enterprise-grade SLA, and 24/7 technical support.",
    company: "Company",
    links: {
      about: "About Us",
      services: "Services",
      whyUs: "Why Choose Us",
      contact: "Contact",
    },
    solutions: "Our Solutions",
    solutionLinks: [
      "FTTx Fiber Internet",
      "Wireless Solutions",
      "Enterprise VoIP & SBS",
      "Cyber Security",
    ],
    stayConnected: "Stay Connected",
    newsletterText:
      "Subscribe to receive updates on service expansions and tech insights.",
    emailPlaceholder: "Enter email address",
    subscribed: "Thanks for subscribing!",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    sla: "SLA Agreement",
    backToTop: "Back to top",
  },
};

export default en;

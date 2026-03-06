import { Settings, ShieldCheck, Lightbulb, Globe, Smartphone, TrendingUp, Lock } from "lucide-react";

export const services = [
  {
    title: "IT Management",
    slug: "it-management",
    desc: "Comprehensive oversight of your tech infrastructure, ensuring 99.9% uptime and seamless hardware-software integration.",
    icon: <Settings className="text-cyan-400" size={28} />,
    emoji: "⚙️",
    color: "from-cyan-500/20",
    border: "hover:border-cyan-500/50",
    accent: "cyan",
    fullDescription:
      "Our IT Management services provide end-to-end oversight of your entire technology infrastructure. From network monitoring to hardware lifecycle management, we ensure your systems run smoothly 24/7. We act as your dedicated IT department, handling everything from day-to-day support tickets to strategic technology planning.",
    benefits: [
      "99.9% uptime SLA with proactive monitoring",
      "24/7 helpdesk support for your team",
      "Vendor management and license optimization",
      "IT budget planning and cost reduction",
      "Disaster recovery and business continuity planning",
      "Hardware and software lifecycle management",
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        desc: "We thoroughly assess your existing IT infrastructure, identifying gaps, risks, and opportunities for optimization.",
      },
      {
        step: "02",
        title: "Strategy & Roadmap",
        desc: "We develop a tailored IT management strategy and 12-month technology roadmap aligned with your business goals.",
      },
      {
        step: "03",
        title: "Onboarding & Setup",
        desc: "We deploy our monitoring tools, establish support channels, and document your complete IT environment.",
      },
      {
        step: "04",
        title: "Ongoing Management",
        desc: "Our team proactively manages your infrastructure, addresses issues before they impact your business, and provides monthly reporting.",
      },
    ],
  },
  {
    title: "Database Security",
    slug: "database-security",
    desc: "Enterprise-grade encryption and real-time threat monitoring to protect your most sensitive business data from breaches.",
    icon: <ShieldCheck className="text-blue-400" size={28} />,
    emoji: "🛡️",
    color: "from-blue-500/20",
    border: "hover:border-blue-500/50",
    accent: "blue",
    fullDescription:
      "Data breaches cost businesses an average of $4.45 million per incident. Our Database Security services implement multi-layered protection strategies — from architecture design through runtime monitoring — ensuring your sensitive business and customer data remains secure and compliant with regulatory standards like GDPR, HIPAA, and PCI-DSS.",
    benefits: [
      "AES-256 encryption at rest and TLS in transit",
      "Real-time threat detection and automated alerting",
      "SQL injection and injection attack prevention",
      "Role-based access control (RBAC) implementation",
      "Regulatory compliance (GDPR, HIPAA, PCI-DSS)",
      "Regular penetration testing and vulnerability assessments",
    ],
    process: [
      {
        step: "01",
        title: "Security Assessment",
        desc: "Comprehensive audit of your database architecture, access controls, and current security posture.",
      },
      {
        step: "02",
        title: "Threat Modeling",
        desc: "We identify your highest-risk data assets and map potential attack vectors specific to your technology stack.",
      },
      {
        step: "03",
        title: "Security Hardening",
        desc: "Implementation of encryption, access controls, query parameterization, and network segmentation. ",
      },
      {
        step: "04",
        title: "Monitoring & Reporting",
        desc: "Deployment of continuous monitoring tools with monthly security reports and quarterly penetration tests.",
      },
    ],
  },
  {
    title: "IT Consultancy",
    slug: "it-consultancy",
    desc: "Strategic technology roadmap planning to align your digital infrastructure with your long-term business scaling goals.",
    icon: <Lightbulb className="text-indigo-400" size={28} />,
    emoji: "💡",
    color: "from-indigo-500/20",
    border: "hover:border-indigo-500/50",
    accent: "indigo",
    fullDescription:
      "Technology decisions made today shape your competitive position for the next decade. Our IT Consultancy team brings deep expertise across cloud architecture, digital transformation, and enterprise software to help you make informed decisions that accelerate growth, reduce costs, and future-proof your technology investments.",
    benefits: [
      "Technology stack selection and vendor evaluation",
      "Cloud migration strategy (AWS, Azure, GCP)",
      "Digital transformation roadmaps",
      "IT budget optimization and cost reduction",
      "CTO-as-a-Service for growing startups",
      "Technology due diligence for investors and acquisitions",
    ],
    process: [
      {
        step: "01",
        title: "Discovery Workshop",
        desc: "In-depth sessions with your leadership team to understand business objectives, pain points, and growth targets.",
      },
      {
        step: "02",
        title: "Current State Analysis",
        desc: "We document your existing technology landscape, identify inefficiencies, and benchmark against industry best practices.",
      },
      {
        step: "03",
        title: "Strategic Recommendations",
        desc: "Detailed recommendations report with prioritized initiatives, ROI projections, and implementation timeline.",
      },
      {
        step: "04",
        title: "Implementation Support",
        desc: "Ongoing advisory support as you execute the roadmap, with quarterly reviews to adapt to changing business needs.",
      },
    ],
  },
  {
    title: "Web Development",
    slug: "web-development",
    desc: "High-performance, scalable web ecosystems built with modern frameworks to drive enterprise growth.",
    icon: <Globe className="text-emerald-400" size={28} />,
    emoji: "🌐",
    color: "from-emerald-500/20",
    border: "hover:border-emerald-500/50",
    accent: "emerald",
    fullDescription:
      "We build fast, scalable, and visually stunning web applications using cutting-edge frameworks like React, Next.js, and Node.js. From marketing websites to enterprise SaaS platforms, our development team delivers pixel-perfect designs with exceptional performance metrics — achieving Core Web Vitals scores that drive higher Google rankings and better user engagement.",
    benefits: [
      "React / Next.js / Vue.js frontend development",
      "Node.js / Python backend and REST API development",
      "Mobile-responsive design with sub-2s load times",
      "SEO-optimized architecture and technical SEO",
      "E-commerce solutions with payment gateway integration",
      "Progressive Web Apps (PWA) development",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        desc: "We analyze your requirements, define the technical architecture, and create detailed wireframes for your approval.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        desc: "High-fidelity UI/UX design in Figma with interactive prototypes so you can experience the product before development begins.",
      },
      {
        step: "03",
        title: "Development & Testing",
        desc: "Agile development sprints with bi-weekly demos. Comprehensive testing including unit, integration, and cross-browser tests.",
      },
      {
        step: "04",
        title: "Launch & Support",
        desc: "Smooth deployment to your hosting environment, 30-day post-launch support, and optional ongoing maintenance retainer.",
      },
    ],
  },
  {
    title: "App Development",
    slug: "app-development",
    desc: "Intuitive mobile experiences that bridge the gap between complex functionality and user delight.",
    icon: <Smartphone className="text-purple-400" size={28} />,
    emoji: "📱",
    color: "from-purple-500/20",
    border: "hover:border-purple-500/50",
    accent: "purple",
    fullDescription:
      "We develop high-quality iOS and Android applications using React Native and Flutter, delivering native-grade performance at a fraction of the cost of separate native apps. From consumer apps to enterprise mobility solutions, our mobile team has shipped over 50 apps across industries including fintech, healthcare, e-commerce, and logistics.",
    benefits: [
      "Cross-platform iOS & Android development",
      "React Native and Flutter expertise",
      "App Store and Google Play submission",
      "Push notifications and offline functionality",
      "API integration with your existing backend",
      "Analytics integration and performance monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Concept & UX Research",
        desc: "User research, competitor analysis, and UX strategy to ensure your app solves real problems for your target audience.",
      },
      {
        step: "02",
        title: "UI Design",
        desc: "Platform-native UI design following Apple HIG and Material Design guidelines, with custom branding and animations.",
      },
      {
        step: "03",
        title: "Development & QA",
        desc: "Cross-platform development with continuous integration, automated testing, and rigorous QA on real devices.",
      },
      {
        step: "04",
        title: "Launch & Growth",
        desc: "App store optimization (ASO), beta testing, smooth launch, and post-launch analytics to drive downloads and engagement.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Data-driven strategies that amplify your brand presence and maximize ROI through precision targeting.",
    icon: <TrendingUp className="text-rose-400" size={28} />,
    emoji: "📈",
    color: "from-rose-500/20",
    border: "hover:border-rose-500/50",
    accent: "rose",
    fullDescription:
      "Our Digital Marketing team builds full-funnel growth strategies that turn your marketing budget into measurable revenue. We combine SEO, paid advertising, content marketing, and social media management into cohesive campaigns that attract qualified leads, nurture prospects, and convert customers — all tracked with transparent ROI reporting.",
    benefits: [
      "SEO and local search optimization",
      "Google Ads and Meta Ads campaign management",
      "Social media strategy and content creation",
      "Email marketing automation sequences",
      "Monthly performance reports with clear ROI metrics",
      "Conversion rate optimization (CRO)",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        desc: "Comprehensive audit of your current digital presence, competitor analysis, and 90-day growth strategy development.",
      },
      {
        step: "02",
        title: "Foundation Setup",
        desc: "Analytics setup, pixel installation, SEO technical fixes, and campaign infrastructure build-out.",
      },
      {
        step: "03",
        title: "Campaign Execution",
        desc: "Launch and manage campaigns across channels with continuous A/B testing and optimization to maximize performance.",
      },
      {
        step: "04",
        title: "Scale & Report",
        desc: "Monthly strategy calls with detailed performance reports, budget reallocation recommendations, and new growth opportunities.",
      },
    ],
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    desc: "End-to-end security solutions to protect your business from evolving cyber threats and ensure regulatory compliance.",
    icon: <Lock className="text-amber-400" size={28} />,
    emoji: "🔒",
    color: "from-amber-500/20",
    border: "hover:border-amber-500/50",
    accent: "amber",
    fullDescription:
      "Cyber attacks cost businesses $8 trillion globally in 2023, and the number is rising. Our Cyber Security services provide comprehensive protection across your entire attack surface — from employee security training and phishing prevention to network security, endpoint protection, and incident response planning.",
    benefits: [
      "Vulnerability assessments and penetration testing",
      "Employee security awareness training",
      "Phishing simulation and prevention",
      "Endpoint Detection and Response (EDR)",
      "Incident response planning and tabletop exercises",
      "Compliance management (ISO 27001, SOC 2, GDPR)",
    ],
    process: [
      {
        step: "01",
        title: "Risk Assessment",
        desc: "Comprehensive evaluation of your security posture, identifying vulnerabilities across people, processes, and technology.",
      },
      {
        step: "02",
        title: "Security Architecture",
        desc: "Design and implement a layered security architecture based on your specific risk profile and regulatory requirements.",
      },
      {
        step: "03",
        title: "Training & Culture",
        desc: "Security awareness training, phishing simulations, and policy development to build a human firewall.",
      },
      {
        step: "04",
        title: "Continuous Monitoring",
        desc: "24/7 security monitoring, regular penetration tests, and quarterly security reviews to stay ahead of emerging threats.",
      },
    ],
  },
];

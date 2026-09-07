export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "AI / GenAI" | "IoT & Hardware" | "Web Application";
  description: string;
  tags: string[];
  metrics?: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  isCurrent?: boolean;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  period: string;
  degree: string;
  focus: string;
  thesis: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: "Yuan Nata Nugraha",
  nickname: "Yuan Nata",
  title: "AI Engineer & Machine Learning Specialist",
  location: "Bekasi, Indonesia",
  linkedin: "https://linkedin.com/in/yuan-nata-nugraha-590212361",
  linkedinDisplay: "linkedin.com/in/yuan-nata-nugraha-590212361",
  email: "yuannatanugraha@gmail.com",
  cvUrl: "/CV.pdf",
  profileImage: "/profile.png",
  summary:
    "Computer Systems graduate from Universitas Gunadarma with 6 months of hands-on AI project experience at Astra Credit Companies (ACC), spanning Automatic Speech Recognition (ASR), Generative AI, Large Language Models (LLMs), and AI-powered web applications. Implemented OpenAI Whisper Large-v3 for speech transcription and evaluated transcription quality against 125 manually annotated audio recordings. Built RAG and AI chatbot applications integrated with Google Gemini API, including prompt and domain controls, and developed web applications using Python, Firebase, and data processing workflows.",
  tagline: "Designing intelligent AI systems & machine learning pipelines in code.",
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
  stats: [
    { value: "125+", label: "Audio Ground-Truth Benchmarks" },
    { value: "~42 GB", label: "VRAM GPU Pipeline Scale" },
    { value: "8+", label: "Professional Certifications" },
    { value: "100%", label: "Domain-Constrained AI Accuracy" },
  ],
};

export const SKILL_CATEGORIES = [
  {
    category: "AI & Machine Learning",
    description: "Architectures, foundational models, and deep learning algorithms",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Large Language Models (LLM)",
      "Natural Language Processing (NLP)",
      "Automatic Speech Recognition (ASR)",
      "Model Evaluation",
      "Computer Vision",
      "Random Forest",
    ],
  },
  {
    category: "AI / ML Tools & Frameworks",
    description: "Production toolchains, APIs, and model orchestration",
    skills: [
      "OpenAI Whisper Large-v3",
      "Google Gemini API",
      "Retrieval-Augmented Generation (RAG)",
      "Hugging Face Transformers",
      "PyTorch",
      "YOLOv8",
      "Prompt Engineering",
    ],
  },
  {
    category: "Programming & Data",
    description: "Core languages and analytical computational packages",
    skills: ["Python", "C++", "SQL", "Pandas", "NumPy", "Data Annotation"],
  },
  {
    category: "Web & Cloud Engineering",
    description: "Modern frontend frameworks, databases, and enterprise platforms",
    skills: [
      "React",
      "TypeScript",
      "HTML5 / CSS3",
      "JavaScript",
      "Firebase",
      "REST API",
      "Microsoft Azure AI Foundry",
      "Google AI Studio / Vertex",
      "Git & GitHub",
    ],
  },
  {
    category: "IoT & Embedded Systems",
    description: "Microcontroller telemetry and hardware integration",
    skills: ["ESP32", "Raspberry Pi", "MQTT", "Hardware Sensor Interfacing", "3D Printing & Prototyping"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "acc",
    company: "Astra Credit Companies (ACC)",
    location: "Jakarta, DKI Jakarta",
    period: "March 2026 - Present",
    role: "AI Project Intern",
    isCurrent: true,
    achievements: [
      "Implemented and operated an Automatic Speech Recognition (ASR) pipeline using OpenAI Whisper Large-v3 on GPU infrastructure (~42 GB VRAM) to transcribe audio recordings into text.",
      "Performed manual transcription and ground-truth annotation on 125 audio recordings to evaluate AI-generated transcription accuracy and identify recognition errors.",
      "Built a web-based Retrieval-Augmented Generation (RAG) application integrated with Google Gemini API for AI-powered information retrieval and question answering.",
      "Developed a personal portfolio website with an AI chatbot powered by Google Gemini API; implemented prompt and domain restrictions to keep responses within the website's intended knowledge domain and improve token efficiency.",
      "Built a business/inventory web application (orders, stock, income, expenses, invoices) with automatic calculations, Firebase database, and Excel export functionality.",
      "Conducted LLM model inventory and documentation across Microsoft Azure AI Foundry and Google AI platforms to support internal model understanding and evaluation.",
    ],
    skills: ["Whisper Large-v3", "Google Gemini API", "RAG", "GPU (~42GB VRAM)", "Firebase", "Azure AI Foundry", "Prompt Engineering"],
  },
  {
    id: "unsri",
    company: "Universitas Sriwijaya",
    location: "Palembang, South Sumatra",
    period: "September 2019 - October 2019",
    role: "Laboratory Intern",
    isCurrent: false,
    achievements: [
      "Operated and supported 3D printing equipment for laboratory activities and prototype development, including setup, calibration, and basic troubleshooting.",
      "Collaborated with researchers to prepare 3D print models and ensure precise structural tolerance for engineering prototypes.",
    ],
    skills: ["3D Printing", "Rapid Prototyping", "Hardware Calibration", "Troubleshooting"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "whisper-pipeline",
    title: "OpenAI Whisper Large-v3 Enterprise ASR Pipeline",
    subtitle: "High-Throughput Speech-to-Text & Quality Annotation Benchmark",
    category: "AI / GenAI",
    description:
      "Enterprise audio transcription pipeline running Whisper Large-v3 on ~42 GB VRAM GPU infrastructure at Astra Credit Companies. Evaluated transcription accuracy and error patterns across 125 manually annotated ground-truth audio samples.",
    tags: ["OpenAI Whisper", "PyTorch", "GPU ~42GB", "Python", "Audio Evaluation"],
    metrics: "125 Audio Benchmarks Evaluated",
    features: [
      "Operated large-scale speech recognition on ~42 GB GPU clusters",
      "Systematic WER (Word Error Rate) and CER transcription evaluation",
      "125 ground-truth audio recordings annotated for precision benchmarking",
      "Domain vocabulary tuning for Indonesian financial service terms",
    ],
  },
  {
    id: "rag-gemini",
    title: "Google Gemini Web-Based RAG Application",
    subtitle: "Enterprise Document Intelligence & Grounded Question Answering",
    category: "AI / GenAI",
    description:
      "A fast and grounded Retrieval-Augmented Generation (RAG) system integrated with Google Gemini API. Enables instant context-aware answers to user queries with zero hallucinations and verified source grounding.",
    tags: ["Google Gemini API", "RAG", "Semantic Search", "Python", "Vector Retrieval"],
    metrics: "Real-time Grounded QA",
    features: [
      "Retrieval-Augmented Generation pipeline integrated with Gemini API",
      "Context chunking and relevance matching for high retrieval precision",
      "Strict grounding constraints preventing hallucinations",
      "Interactive conversational web user interface",
    ],
  },
  {
    id: "domain-restricted-chatbot",
    title: "Domain-Constrained AI Chatbot System",
    subtitle: "Prompt Guardrails & High Token Efficiency Assistant",
    category: "AI / GenAI",
    description:
      "Conversational AI agent integrated with Google Gemini API, engineered with rigorous prompt boundaries and domain restrictions to prevent jailbreaking, maintain topical relevance, and minimize token costs.",
    tags: ["Google Gemini API", "Prompt Engineering", "Guardrails", "Token Optimization"],
    metrics: "Zero Topic Leakage & High Token ROI",
    features: [
      "Deterministic system instructions and multi-turn persona guardrails",
      "Rejection mechanisms for queries outside specified operational domain",
      "Concise token-saving response formatting",
      "Seamless web-based integration with real-time streaming",
    ],
  },
  {
    id: "rf-iot-health",
    title: "IoT Health Monitoring with Random Forest Classifier",
    subtitle: "Undergraduate Thesis Research on Real-time Respiratory Classification",
    category: "IoT & Hardware",
    description:
      "End-to-end IoT health diagnostic platform utilizing an ESP32 microcontroller, physiological sensors, and an embedded Random Forest machine learning model to accurately classify respiratory conditions.",
    tags: ["ESP32", "Random Forest", "IoT", "C++", "Python", "Health Tech"],
    metrics: "Final Thesis Research Project",
    features: [
      "Trained and evaluated Random Forest machine learning classification model",
      "ESP32 telemetry data streaming via MQTT protocol",
      "Real-time sensor signal acquisition and feature extraction",
      "Successful bachelor's thesis defense at Universitas Gunadarma",
    ],
  },
  {
    id: "business-inventory-app",
    title: "Full-Stack Business & Inventory Management Platform",
    subtitle: "Automated Financial Calculations, Firebase & Excel Automation",
    category: "Web Application",
    description:
      "Production web app handling real-time stock monitoring, customer orders, expense ledger, invoice generation, and dynamic financial calculations with live Firebase Cloud database synchronization and XLSX data export.",
    tags: ["React", "Firebase", "JavaScript", "Excel Export", "REST API"],
    metrics: "Automated Ledger & Instant Export",
    features: [
      "Real-time database sync using Google Firebase Firestore",
      "Automated stock level deduction and transaction calculation",
      "Automated PDF/Excel report generator for accounting",
      "Role-based access control and responsive invoice designer",
    ],
  },
];

export const EDUCATION: EducationItem = {
  institution: "Universitas Gunadarma",
  location: "Bekasi, Indonesia",
  period: "August 2024 - August 2026",
  degree: "Bachelor's Degree in Computer Systems (S.Kom)",
  focus: "Artificial Intelligence, Machine Learning, Internet of Things (IoT), Software Development",
  thesis: "Implementasi Random Forest pada Sistem Monitoring Kesehatan Berbasis IoT untuk Klasifikasi Kondisi Pernapasan",
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Generative AI",
  },
  {
    name: "Course Machine Learning",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Machine Learning",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Artificial Intelligence",
  },
  {
    name: "Dasar Cloud dan GenAI di AWS",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Cloud & GenAI",
  },
  {
    name: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Data Science",
  },
  {
    name: "Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Data Science",
  },
  {
    name: "Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Programming",
  },
  {
    name: "Belajar Dasar SQL",
    issuer: "Dicoding Indonesia",
    year: "2025",
    category: "Database",
  },
];

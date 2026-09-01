import mentis from "@/assets/Mentis.jpg.asset.json";
import gemini from "@/assets/Gemini.jpg.asset.json";
import aiverse from "@/assets/AI_Verse.jpg.asset.json";
import digital from "@/assets/Digital_Productivity.jpg.asset.json";
import genai from "@/assets/Gen_AI_Forge.jpg.asset.json";
import decode from "@/assets/Decode_Labs.jpg.asset.json";
import codealpha from "@/assets/Code_Alpha.jpg.asset.json";
import zelvora from "@/assets/Zelvora.jpg.asset.json";
import mahindra from "@/assets/Mahendra_Pride.jpg.asset.json";
import profileAsset from "@/assets/profile.jpg.asset.json";
import resumeAsset from "@/assets/resume.asset.json";

export const profileUrl = profileAsset.url;
export const resumeUrl = resumeAsset.url;

export const links = {
  email: "seeyanasam00@gmail.com",
  github: "https://github.com/Seeyana-Samreen",
  linkedin: "https://www.linkedin.com/in/seeyana-samreen-987570323/",
};

export const experience = [
  { org: "Future Interns", role: "UI Designer", period: "Jul 2026 — Present" },
  { org: "CodeAlpha", role: "Frontend Developer", period: "Jun — Jul 2026" },
  { org: "DecodeLabs", role: "Frontend Developer", period: "Jun — Jul 2026" },
  { org: "MANAC Infotech", role: "Web Developer", period: "Mar — Apr 2025" },
];

export type Project = {
  title: string;
  stack: string;
  description: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Cardiac Disease Prediction",
    stack: "Python · Machine Learning",
    description:
      "Machine learning model built in Python to predict cardiac disease risk from patient health data.",
  },
  {
    title: "Music Player",
    stack: "HTML · CSS · JavaScript",
    description:
      "Premium music player with audio controls, playlist management, autoplay, progress tracking and volume control.",
    repo: "https://github.com/Seeyana-Samreen/CodeAlpha-Task4-MusicPlayer",
  },
  {
    title: "Image Gallery",
    stack: "HTML · CSS · JavaScript",
    description:
      "Responsive gallery with dynamic rendering, category filtering, search, lightbox preview and dark mode.",
    repo: "https://github.com/Seeyana-Samreen/CodeAlpha-Task1-ImageGallery",
  },
  {
    title: "Form Validation",
    stack: "HTML · CSS · JavaScript",
    description:
      "Client-side form validation with real-time feedback, input rules and accessible error states.",
  },
  {
    title: "Calculator",
    stack: "HTML · CSS · JavaScript",
    description:
      "Interactive calculator with arithmetic operations, keyboard support, error handling and smooth animations.",
    repo: "https://github.com/Seeyana-Samreen/CodeAlpha-Task2-Calculator",
  },
  {
    title: "DecodeLabs Project 1 — Portfolio Website",
    stack: "HTML5 · CSS3",
    description:
      "Responsive personal portfolio site with an elegant beige, brown and gold theme and smooth animations.",
    repo: "https://github.com/Seeyana-Samreen/DecodeLabs-Frontend-Project1",
  },
  {
    title: "DecodeLabs Project 2 — Landing Page",
    stack: "HTML · CSS · JavaScript",
    description:
      "Modern responsive landing page with a clean pastel UI, fluid layout and modern web design practices.",
    repo: "https://github.com/Seeyana-Samreen/DecodeLabs-Frontend-Project2-",
  },
  {
    title: "DecodeLabs Project 3 — Interactive Web Experience",
    stack: "HTML · CSS · JavaScript",
    description:
      "Interactive experience demonstrating DOM manipulation, dynamic UI updates and responsive components.",
    repo: "https://github.com/Seeyana-Samreen/DecodeLabs-Frontend-Project3",
  },
  {
    title: "DecodeLabs Project 4 — Responsive Web App",
    stack: "HTML · CSS · JavaScript",
    description:
      "Responsive web application focused on clean UI, adaptability and smooth user experience.",
    repo: "https://github.com/Seeyana-Samreen/DecodeLabs-Frontend-Project4",
  },
];

export const skillGroups = [
  { label: "Programming", items: ["Python", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["HTML", "CSS", "Responsive Design"] },
  { label: "Design", items: ["Figma", "Wireframing", "Visual Design"] },
  { label: "AI & Data", items: ["Machine Learning", "Data Analysis", "Matplotlib"] },
  { label: "Analytics", items: ["Power BI", "Tableau"] },
  { label: "Databases", items: ["MySQL", "MongoDB"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter"] },
  {
    label: "Exploring",
    items: ["React", "Tailwind CSS", "Motion Design", "3D Web", "AI Integration"],
  },
];

export const certificates = [
  { title: "MENTIS – Mental Health Innovation Sprint", issuer: "InnerWhispers × CSE (AI & ML)", image: mentis.url },
  { title: "Gemini Certified Student – K12", issuer: "Google for Education", image: gemini.url },
  { title: "AI VERSE 4.0", issuer: "Vaagdevi College of Engineering", image: aiverse.url },
  { title: "Digital Productivity with AI", issuer: "UNICEF · YuWaah", image: digital.url },
  { title: "GenAI Forge Hackathon", issuer: "FutureSkills Prime · NASSCOM", image: genai.url },
  { title: "DecodeLabs Virtual Internship", issuer: "DecodeLabs", image: decode.url },
  { title: "CodeAlpha Virtual Internship", issuer: "CodeAlpha", image: codealpha.url },
  { title: "AI-Generated Video Contest", issuer: "Zelvora Technologies", image: zelvora.url },
  { title: "Employability Skill Training Programme", issuer: "Mahindra Pride Classroom · Naandi Foundation", image: mahindra.url },
];

export const education = [
  {
    school: "Vaagdegi College of Engineering",
    detail: "B.Tech — CSE (AI & ML)",
    period: "2024 — 2028",
    score: "CGPA 8.2 / 10",
  },
  {
    school: "Dhruva Junior College, Warangal",
    detail: "Intermediate — MPC",
    period: "2022 — 2024",
    score: "82%",
  },
];

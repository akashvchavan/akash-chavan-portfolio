import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  "Microsoft Copilot Studio", "Agentic AI Architecture", "AI Agent Development",
  "Multi-Agent Workflows", "Power Automate", "Power Apps", "Dataverse",
  "Azure OpenAI Service", "Azure AI Foundry", "RAG", "Prompt Engineering",
  "Azure AI Language & CLU", "C# / ASP.NET Core", "Web API & Microservices",
  "React & TypeScript", "Microsoft Teams AI Apps", "Microsoft Graph API",
  "Azure Functions", "Logic Apps", "SharePoint Online", "Azure APIM",
  "Custom Connectors", "Microsoft Entra ID"
];

const projects = [
  {
    number: "01",
    title: "Copilot Squad",
    period: "March 2026 – Present",
    description: "Developing and managing custom conversational AI workflows and agentic frameworks for enterprise business scenarios.",
    points: [
      "Developing custom conversational AI workflows and agentic frameworks",
      "Engineering custom API connectors for enterprise integrations",
      "Integrating core platforms including Dataverse and SharePoint",
      "Reducing manual operational effort through intelligent automation"
    ],
    tech: ["Copilot Studio", "Agentic AI", "Custom Connectors", "Dataverse", "SharePoint"]
  },
  {
    number: "02",
    title: "SEC Copilot Implementation",
    period: "July 2025 – February 2026",
    description: "Delivered specialized enterprise AI agents and end-to-end automated workflows using Microsoft Copilot Studio.",
    points: [
      "Deployed multiple specialized AI agents using Copilot Studio",
      "Built end-to-end automated enterprise workflows",
      "Developed backend orchestration logic with Power Automate",
      "Integrated SAP, SuccessFactors, and client on-premises services"
    ],
    tech: ["Copilot Studio", "Power Automate", "SAP", "SuccessFactors", "Enterprise APIs"]
  },
  {
    number: "03",
    title: "Negotiation Buddy",
    period: "April 2025 – July 2025",
    description: "Built a Microsoft Teams AI application for live negotiations, real-time strategy recommendations, and post-meeting transcript intelligence.",
    points: [
      "Delivered real-time AI-driven negotiation strategy suggestions",
      "Built post-meeting transcript Q&A capabilities",
      "Integrated Azure AI Foundry and custom models",
      "Developed the application with React, .NET, and Teams Toolkit",
      "Managed Azure resources, deployment, and Teams manifest"
    ],
    tech: ["React", ".NET", "Teams Toolkit", "Azure AI Foundry", "Microsoft Teams"]
  },
  {
    number: "04",
    title: "Managed Chatbot Services",
    period: "March 2022 – March 2025",
    description: "Developed and modernized enterprise conversational AI solutions using Microsoft Bot Framework and Azure PaaS services.",
    points: [
      "Migrated enterprise conversational workloads from LUIS to CLU",
      "Integrated Azure Cognitive Services and intelligent conversational flows",
      "Worked with Microsoft Bot Framework and Azure PaaS",
      "Automated reporting and support using Azure Functions and Logic Apps"
    ],
    tech: ["Bot Framework", "CLU", "Azure AI", "Azure Functions", "Logic Apps"]
  },
  {
    number: "05",
    title: "Siemens SharePoint Migration Projects",
    period: "May 2021 – February 2022",
    description: "Automated large-scale SharePoint migration workflows from on-premises environments to SharePoint Online.",
    points: [
      "Automated large-scale SharePoint migrations",
      "Built workflow automation using Power Apps and Power Automate",
      "Used PowerShell for migration and operational automation",
      "Enabled reliable data transfer with minimal downtime"
    ],
    tech: ["Power Apps", "Power Automate", "SharePoint Online", "PowerShell"]
  },
  {
    number: "06",
    title: "Intellimate – AI Interview Assistant",
    period: "Microsoft Gen AI Hackathon · April 2024",
    description: "An AI-powered interview assistant recognized with the Jury Award and selected as a Top 5 finalist.",
    points: [
      "Profile verification and intelligent interview assistance",
      "Tailored AI-driven question generation",
      "Real-time transcription capabilities",
      "Plagiarism detection for enhanced hiring workflows"
    ],
    tech: ["Generative AI", "Conversational AI", "AI Automation", "Microsoft AI"]
  }
];

const certifications = ["MS-900", "AZ-900", "SC-900", "PL-900", "AI-900", "AZ-500", "DP-900"];
const achievements = [
  "Inspiring Innovator Award – Team · Accenture",
  "Sparkling Star · Accenture",
  "Certificate Champ · Accenture",
  "Jury Award · Microsoft Gen AI Hackathon · Top 5 Finalist"
];

function App() {
  return (
    <main>
      <nav className="nav container">
        <a className="logo" href="#top">AC<span>.</span></a>
        <div className="navLinks">
          <a href="#about">About</a><a href="#skills">Skills</a>
          <a href="#experience">Experience</a><a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="orb orbOne"></div><div className="orb orbTwo"></div>
        <p className="eyebrow">HELLO, I'M</p>
        <h1>Akash <span>Chavan</span></h1>
        <h2>AI Solutions Engineer building <strong>cloud-native and agentic AI enterprise solutions.</strong></h2>
        <p className="lead">5+ years of experience across Microsoft Copilot Studio, Azure AI, Power Platform, .NET, React, conversational AI, and intelligent automation.</p>
        <div className="actions">
          <a className="button primary" href="#projects">Explore My Work</a>
          <a className="button secondary" href="#contact">Let's Connect</a>
        </div>
        <div className="stats">
          <div><b>5+</b><span>Years Experience</span></div>
          <div><b>AI</b><span>Agentic AI & Copilot</span></div>
          <div><b>Top 5</b><span>Microsoft Gen AI Hackathon</span></div>
        </div>
      </section>

      <section className="section container" id="about">
        <p className="eyebrow">ABOUT ME</p>
        <div className="split">
          <h3>I build scalable enterprise applications and <span>intelligent AI agents.</span></h3>
          <div>
            <p>I'm an AI Solutions Engineer with 5+ years of experience building scalable cloud-native and AI-powered enterprise applications using .NET, React, Azure, and Microsoft AI technologies.</p>
            <p>I specialize in Microsoft Copilot Studio, Azure AI Services, Teams App Development, intelligent automation, conversational systems, RESTful APIs, microservices, and enterprise integrations across Azure and Microsoft ecosystems.</p>
          </div>
        </div>
      </section>

      <section className="section container" id="skills">
        <p className="eyebrow">TECHNICAL EXPERTISE</p>
        <h3 className="sectionTitle">Technologies I work with.</h3>
        <div className="skillGrid">{skills.map(skill => <div className="skill" key={skill}>{skill}</div>)}</div>
      </section>

      <section className="section container" id="experience">
        <p className="eyebrow">EXPERIENCE</p>
        <h3 className="sectionTitle">Enterprise AI & cloud engineering.</h3>
        <article className="project">
          <div className="projectNumber">2021<br/>—<br/>NOW</div>
          <div className="projectBody">
            <h4>Accenture · Packaged App Development Senior Analyst</h4>
            <p>Pune, India</p>
            <ul>
              <li>Designing enterprise-grade AI agents and agentic workflows using Microsoft Copilot Studio.</li>
              <li>Integrating Dataverse, SharePoint, SAP, SuccessFactors, and on-premises applications.</li>
              <li>Building conversational AI solutions with Azure AI Services, NLP, CLU, and Cognitive Services.</li>
              <li>Developing cloud-native applications and microservices with ASP.NET Core, Web API, React, and Azure PaaS.</li>
              <li>Designing secure integrations using OAuth 2.0, JWT, APIM, Microsoft Entra ID, and Azure networking.</li>
              <li>Leading technical discussions, architecture planning, solution implementation, and developer guidance.</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="section container" id="projects">
        <p className="eyebrow">FEATURED PROJECTS</p>
        <h3 className="sectionTitle">Selected enterprise & AI work.</h3>
        <div className="projects">
          {projects.map(project => (
            <article className="project" key={project.number}>
              <div className="projectNumber">{project.number}</div>
              <div className="projectBody">
                <h4>{project.title}</h4>
                <p><strong>{project.period}</strong></p>
                <p>{project.description}</p>
                <ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                <div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">CERTIFICATIONS</p>
        <h3 className="sectionTitle">Microsoft certifications.</h3>
        <div className="certs">{certifications.map(c => <div key={c}>{c}</div>)}</div>
      </section>

      <section className="section container">
        <p className="eyebrow">ACHIEVEMENTS</p>
        <h3 className="sectionTitle">Recognition & innovation.</h3>
        <div className="skillGrid">{achievements.map(a => <div className="skill" key={a}>{a}</div>)}</div>
      </section>

      <section className="section container">
        <p className="eyebrow">EDUCATION</p>
        <h3 className="sectionTitle">Academic foundation.</h3>
        <div className="projects">
          <article className="project"><div className="projectNumber">2021</div><div className="projectBody"><h4>PG-Diploma in Advanced Computing</h4><p>A Grade · March 2021</p></div></article>
          <article className="project"><div className="projectNumber">2020</div><div className="projectBody"><h4>Bachelor of Engineering · Electronics</h4><p>First Class with Distinction · May 2020</p></div></article>
        </div>
      </section>

      <section className="contact container" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h3>Interested in AI agents, Copilot Studio, Power Platform, or enterprise engineering?</h3>
        <p>I'm open to discussing challenging opportunities and intelligent enterprise solutions.</p>
        <div className="actions">
          <a className="button primary" href="mailto:aakash.vchavan99ac@gmail.com">Email Me</a>
          <a className="button secondary" href="https://www.linkedin.com/in/akash-chavan-92b93713a/" target="_blank" rel="noreferrer">LinkedIn</a>
          {/* <a className="button secondary" href="YOUR_GITHUB_URL_HERE" target="_blank" rel="noreferrer">GitHub</a> */}
        </div>
      </section>

      <footer className="container">© 2026 Akash Chavan · AI Solutions Engineer · Built with React & TypeScript</footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);

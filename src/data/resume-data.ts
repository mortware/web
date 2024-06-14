import { EducationHistoryItem, SkillsItem, SocialLink, WorkHistoryItem } from "./models";

export const PersonalDetails = {
  name: "David J. Price",
  title: "Principal Developer",
};

export const ResumeSummary = [
  "A principal engineer and developer advocate with a strong passion for creating innovative cloud-based web applications and systems. Experienced in leveraging the latest .NET and JavaScript technologies to build and enhance robust systems.",
  "Proficient in both front-end and back-end technologies, with a commitment to writing maintainable code guided by SOLID principles. Known for adaptability and a friendly demeanor, capable of thriving in diverse work environments.",
  "Valued for an open, self-aware, and empathetic approach that fosters trust and respect at all organizational levels.",
];

export const SocialLinks: SocialLink[] = [{
  icon: "linkedin",
  iconSource: "@fortawesome/free-brands-svg-icons",
  display: "linkedin.com/in/mortware",
  url: "https://www.linkedin.com/in/mortware",
}, {
  icon: "github",
  iconSource: "@fortawesome/free-brands-svg-icons",
  display: "github.com/mortware",
  url: "https://github.com/mortware",
}, {
  icon: "globe",
  iconSource: "@fortawesome/free-solid-svg-icons",
  display: "mortware.net",
  url: "http://mortware.net",
}, {
  icon: "mail",
  iconSource: "@fortawesome/free-solid-svg-icons",
  display: "david@mortware.net",
  url: "mailto:david@mortware.net",
}, {
  icon: "phone",
  iconSource: "@fortawesome/free-solid-svg-icons",
  display: "+44 (0)7711 228 988",
  url: 'tel:+447711228988"',
}];

export const WorkHistory: WorkHistoryItem[] = [{
  title: "Principal Developer",
  employer: "NHS Property Services",
  from: "2021-02-01",
  description:
    "Leading full-stack development across multiple teams to deliver high-quality software solutions",
  keyNotes: [
    "Designed and developed a customer portal application for key business functions",
    "Governed application and service development by internal and 3rd-party teams",
    "Implemted a robust CI/CD pipeline using Azure DevOps, significantly reducing delivery times",
  ],
  tags: ["ASP.NET 8", "React", "Azure DevOps", "YAML", "Azure", "MSSQL"],
}, {
  title: "Software Engineer",
  employer: "Codat Ltd",
  from: "2020-11-02",
  to: "2021-01-22",
  description:
    "Development of integration APIs for 3rd-party finance systems",
  keyNotes: [
    "Established centre of excellence (CoE) team for wider developer audience",
    "Introduced SRE for continued improvement",
    "Integration of Shopify to FreeAgent",
  ],
  tags: ["ASP.NET Core", "Azure", "Azure DevOps"],
}, {
  title: "Lead Developer",
  employer: "StepStone",
  from: "2020-07-01",
  to: "2020-10-16",
  description:
    "Leading a team of engineers during a platform harmonisation project.",
  keyNotes: [
    "Introduced a robust microservices architecture that was used across multiple teams.",
    "Led the consolidation of existing authentication providers into singular decoupled OAuth service; significantly improving security, reaction time and development costs.",
    "Mentoring junior and mid-level developers.",
  ],
  tags: [
    "ASP.NET Core",
    "React",
    "AWS",
    "SQS/SNS",
    "Lambda",
    "Git",
    "TeamCity",
    "OctoDeploy",
  ],
}, {
  title: "Lead Developer",
  employer: "Markerstudy",
  from: "2018-08-15",
  to: "2020-04-01",
  description:
    "Leading a team of in-house and remote engineers/testers in the design and implementation of a new customer portal for pet insurance policy and claims management.",
  keyNotes: [
    "Creation of a new self-service customer portal for managing insurance policies and submitting claims. This had a direct impact on reducing call-centre costs for the business.",
    "Implemented new pricing engine that helped the system respond to reguarly changing business requirements. Quotations and mid-term adjustments were able to reflect new prices instantly.",
    "Implemented mentoring program for junior and mid-level developers.",
  ],
  tags: [
    "ASP.NET Core",
    "AngularJS",
    "Angular",
    "Azure",
    "SVN",
    "TeamCity",
    "OctoDeploy",
  ],
}, {
  title: "Senior Developer",
  employer: "Zoopla",
  from: "2015-05-01",
  to: "2018-06-15",
  description:
    "Migration and feature development for existing residential/lettings cloud-based application.",
  keyNotes: [
    "Separation of monolith application into a microservice-based/SOA architecture allowed the business to scale their flagship application.",
    "Introduction of SPA (Angular) for new and legacy features, allowing the business to use a responsive and device-friendly design.",
    "Integration of sister-company’s price comparison system using RESTful APIs and SPA techniques, significantly reducing time to market.",
    "Implementation of GDPR-based features for customers to be compliant before deadline.",
  ],
  tags: [
    "ASP.NET",
    "AngularJS",
    "SignalR",
    "SQL Server",
    "Redis",
    "MongoDB",
    "TeamCity",
  ],
}, {
  title: "Senior Developer",
  employer: "Red River Software",
  from: "2011-06-20",
  to: "2015-02-27",
  description:
    "Bespoke software development for high-growth businesses, start-ups, investors, and organisations undergoing rapid change and digital transformation.",
  keyNotes: [
    "Design and development of robust single-page web applications with supporting back-end.",
    "Utilising Angular, Bootstrap and many well known JavaScript libraries, applications were driven by modern design, a strong focus on quality UI and well thought out UX was essential.",
    "Role varied from technical lead and software architect to UX and product design.",
  ],
  tags: [
    "ASP.NET",
    "AngularJS",
    "KnockoutJS",
    "SQL Server",
    "SQL Azure",
    "WPF",
  ],
}, {
  title: "Software Developer",
  employer: "Basemap",
  from: "2008-07-01",
  to: "2011-06-01",
  description: "GIS visualisation for local authority and private business",
  keyNotes: [
    "Lead the design and development of a Windows-based GIS application. An off-the-shelf product for a broad market that allowed users to visually represent and publish geographical data.",
    "Developed an interactive digital signage display for use in estate agents. A side project that allowed the business to branch into other markets.",
  ],
  tags: [
    "WPF",
    "Silverlight",
    "WinForms",
    "SQL Server",
    "PostGIS",
    "ASP.NET",
  ],
}];

export const Education: EducationHistoryItem[] = [{
  name: "Solutions Associate",
  provider: "Microsoft",
  completed: "2016",
}, {
  name: "Solutions Developer (Web)",
  provider: "Microsoft",
  completed: "2014",
}, {
  name: "Certified ScrumMaster",
  provider: "SCRUM Alliance",
  completed: "2014",
}, {
  name: "Technology Specialist (Web)",
  provider: "Microsoft",
  completed: "2009",
}, {
  name: "BTEC Computer Studies",
  provider: "Chichester College of AS&T",
  completed: "1998",
}, {
  name: "C&G C Programming Level 2",
  provider: "Chichester College of AS&T",
  completed: "1998",
}, {
  name: "GNVQ Information Technology",
  provider: "Chichester College of AS&T",
  completed: "1996",
}];

export const Skills: SkillsItem[] = [{
  name: "Backend",
  skills: [
    ".NET Core",
    "ASP.NET Core",
    ".NET Framework",
    "Azure",
    "AWS",
    "Entity Framework",
    "EF Core",
    "Microsoft SQL",
  ],
}, {
  name: "Frontend",
  skills: [
    "JavaScript",
    "TypeScript",
    "CSS/SASS/LESS",
    "AngularJS",
    "Angular 2+ (to 13)",
    "React",
  ],
}, {
  name: "DevOps",
  skills: [
    "Azure DevOps",
    "CI/CD",
    "TeamCity",
    "Octopus",
    "Git",
    "YAML Pipelines",
    "SonarCloud",
  ],
}, {
  name: "Knowledgeable",
  skills: [
    "Docker",
    "BDD",
    "TDD",
    "Unit Testing",
    "Node.js",
    "Agile",
    "SCRUM",
    "Mongo",
    "Dynamo",
    "Dapper",
  ],
}];

export const details = {
    name: "David J. Price",
    title: "Full Stack Developer"
}

export const summary = [
    "Passionate full stack developer with experience in designing and delivering innovative cloud-based web applications and systems using the latest .NET and JavaScript technologies.  Producing or enhancing lasting systems; specifically with web and cloud-based technologies.",
    "Equally proficient in front and back-end technologies, with a high-degree of focus on delivering maintainable code based on SOLID principles.",
    "Flexible, amiable and able to quickly adapt to varied working environments.  Open, self-aware and empathetic with a strong ability to win trust and respect at all levels."
]

export const links = [
    {
        icon: ['fab', 'linkedin'],
        iconSource: '@fortawesome/free-brands-svg-icons',
        display: 'linkedin.com/in/mortware',
        url: 'https://www.linkedin.com/in/mortware'
    },
    {
        icon: ['fab', 'github-square'],
        iconSource: '@fortawesome/free-brands-svg-icons',
        display: 'github.com/mortware',
        url: 'https://github.com/mortware'
    },
    {
        icon: ['fas', 'globe'],
        iconSource: '@fortawesome/free-solid-svg-icons',
        display: 'mortware.net',
        url: 'http://mortware.net'
    },
    {
        icon: ['fas', 'envelope'],
        iconSource: '@fortawesome/free-solid-svg-icons',
        display: 'david@mortware.net',
        url: 'mailto:david@mortware.net'
    },
    {
        icon: ['fas', 'mobile-alt'],
        iconSource: '@fortawesome/free-solid-svg-icons',
        display: '+44 (0)7711 228 988',
        url: 'tel:+447711228988"'
    }
]

export const workHistory = [
    {
        title: "Lead Developer",
        employer: "StepStone",
        from: "2020",
        to: "Present",
        description: "Leading a team of engineers during a platform harmonisation project.",
        keyNotes: [
            "Introduced a robust microservices architecture that was used across multiple teams.",
            "Led the consolidation of existing authentication providers into singular decoupled OAuth service; significantly improving security, reaction time and development costs.",
            "Mentoring junior and mid-level developers."
        ],
        tags: [
            "ASP.NET Core", "React", "AWS", "SQS/SNS", "Lambda", "Git", "TeamCity", "OctoDeploy"
        ]
    }, {
        title: "Lead Developer",
        employer: "Markerstudy",
        from: "2018",
        to: "2020",
        description: "Leading a team of in-house and remote engineers/testers in the design and implementation of a new customer portal for pet insurance policy and claims management.",
        keyNotes: [
            "Creation of a new self-service customer portal for managing insurance policies and submitting claims. This had a direct impact on reducing call-centre costs for the business.",
            "Implemented new pricing engine that helped the system respond to reguarly changing business requirements. Quotations and mid-term adjustments were able to reflect new prices instantly.",
            "Implemented mentoring program for junior and mid-level developers."
        ],
        tags: [
            "ASP.NET Core", "AngularJS", "Angular", "Azure", "SVN", "TeamCity", "OctoDeploy"
        ]
    }, {
        title: "Senior Developer",
        employer: "Zoopla",
        from: "2015",
        to: "2018",
        description: "Migration and feature development for existing residential/lettings cloud-based application.",
        keyNotes: [
            "Separation of monolith application into a microservice-based/SOA architecture allowed the business to scale their flagship application.",
            "Introduction of SPA (Angular) for new and legacy features, allowing the business to use a responsive and device-friendly design.",
            "Integration of sister-company’s price comparison system using RESTful APIs and SPA techniques, significantly reducing time to market.",
            "Implementation of GDPR-based features for customers to be compliant before deadline."
        ],
        tags: [
            "ASP.NET", "AngularJS", "SignalR", "SQL Server", "Redis", "MongoDB", "TeamCity"
        ]
    }, {
        title: "Senior Developer",
        employer: "Red River Software",
        from: "2011",
        to: "2015",
        description: "Bespoke software development for high-growth businesses, start-ups, investors, and organisations undergoing rapid change and digital transformation.",
        keyNotes: [
            "Design and development of robust single-page web applications with supporting back-end.",
            "Utilising Angular, Bootstrap and many well known JavaScript libraries, applications were driven by modern design, a strong focus on quality UI and well thought out UX was essential.",
            "Role varied from technical lead and software architect to UX and product design.",
        ],
        tags: [
            "ASP.NET", "AngularJS", "KnockoutJS", "SQL Server", "SQL Azure", "WPF"
        ]
    }, {
        title: "Software Developer",
        employer: "Basemap",
        from: "2008",
        to: "2011",
        description: "GIS visualisation for local authority and private business",
        keyNotes: [
            "Lead the design and development of a Windows-based GIS application. An off-the-shelf product for a broad market that allowed users to visually represent and publish geographical data.",
            "Developed an interactive digital signage display for use in estate agents. A side project that allowed the business to branch into other markets.",
        ],
        tags: [
            "WPF", "Silverlight", "WinForms", "SQL Server", "PostGIS", "ASP.NET"
        ]
    }
]

export const education = [
    {
        name: "Solutions Associate",
        provider: "Microsoft",
        completed: "2016"
    }, {
        name: "Solutions Developer (Web)",
        provider: "Microsoft",
        completed: "2014"
    }, {
        name: "Certified ScrumMaster",
        provider: "SCRUM Alliance",
        completed: "2014"
    }, {
        name: "Technology Specialist (Web)",
        provider: "Microsoft",
        completed: "2009"
    }, {
        name: "BTEC Computer Studies",
        provider: "Chichester College of AS&T",
        completed: "1998"
    }, {
        name: "C&G C Programming Level 2",
        provider: "Chichester College of AS&T",
        completed: "1998"
    }, {
        name: "GNVQ Information Technology",
        provider: "Chichester College of AS&T",
        completed: "1996"
    }
]

export const skills = [{
    name: "Backend",
    skills: [".NET Core", "ASP.NET Core", ".NET Framework", "Azure", "AWS", "Entity Framework", "EF Core", "Microsoft SQL"]
}, {
    name: "Frontend",
    skills: ["JavaScript", "TypeScript", "CSS/SASS/LESS", "AngularJS", "Angular 2+ (to 9)", "React"]
}, {
    name: "Knowledgeable",
    skills: ["Azure DevOps", "CI/CD", "Docker", "BDD", "TDD", "Git", "Unit Testing", "Node.js", "Agile", "SCRUM", "TeamCity", "Octopus", "Mongo", "Dynamo", "Dapper"]
}]
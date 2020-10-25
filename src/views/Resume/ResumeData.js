export const details = {
    name: "David J. Price",
    title: "Senior Software Engineer"
}

export const summary = [
    "Passionate senior full-stack software engineer with 15+ years of experience. Designing and delivering innovative cloud-based web applications and systems using the latest .NET and JavaScript technologies based on SOLID principles.  Producing or enhancing lasting systems; specifically with web and cloud-based technologies.",
    "Flexible and amiable with an ability to quickly adapt to varied working environments.  Open, self-aware and empathetic with a strong ability to win trust and respect at all levels."
]

export const contact = {
    phone: "+44 (0)7711 228 988",
    email: "david@mortware.net"
}

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
]

export const workHistory = [
    {
        title: "Managing Senior Developer",
        employer: "StepStone",
        from: "2020",
        to: "Present",
        description: "Leading a team of engineers during a platform harmonisation project",
        keyNotes: [
            "Consolidation of existing authentication providers into decoupled Identity service.",
            "Mentoring junior and mid-level developers."
        ],
        keyTech: [
            "ASP.NET Core", "React", "AWS", "SQS/SNS", "Lambda", "Git", "TeamCity", "OctoDeploy"
        ]
    }, {
        title: "Lead Developer",
        employer: "Markerstudy",
        from: "2018",
        to: "2020",
        description: "Leading a team of in-house and remote engineers/testers in the design and implementation of a new customer portal for pet insurance policy and claims management.",
        keyNotes: [
            "Implementation of a new pricing engine for handling quotes and mid-term adjustments.",
            "Mentoring junior and mid-level developers."
        ],
        keyTech: [
            "ASP.NET Core", "AngularJS", "Angular", "Azure", "SVN", "TeamCity", "OctoDeploy"
        ]
    }, {
        title: "Senior Software Developer",
        employer: "Zoopla",
        from: "2015",
        to: "2018",
        description: "Migration and feature development for existing residential/lettings cloud-based application.",
        keyNotes: [
            "Separation of monolith application into a microservice-based/SOA architecture, integrating with external services (Office 365, Google, AWS and own bespoke services).",
            "Introduction and integration of Angular for new and legacy features (alongside MVC/Razor).",
            "Integration of sister-company’s price comparison system using RESTful APIs and SPA techniques, significantly reducing time to market.",
            "Implementation of GDPR-based features for customers to be compliant before deadline."
        ],
        keyTech: [
            "ASP.NET", "AngularJS", "SignalR", "SQL Server", "Redis", "MongoDB", "TeamCity"
        ]
    }, {
        title: "Senior Software Developer",
        employer: "Red River Software",
        from: "2011",
        to: "2015",
        description: "Bespoke software development for high-growth businesses, start-ups, investors, and organisations undergoing rapid change and digital transformation.",
        keyNotes: [
            "Design and development of robust single-page web applications with supporting back-end. Utilising Angular, Bootstrap and many well known JavaScript libraries, our applications were driven by modern design, a strong focus on quality UI design and a well thought out user experience was essential.",
            "Role varied from technical lead and software architect to UX and product designer.",
        ],
        keyTech: [
            "ASP.NET", "AngularJS", "KnockoutJS", "SQL Server", "SQL Azure", "WPF"
        ]
    }, {
        title: "Software Developer",
        employer: "Basemap",
        from: "2008",
        to: "2011",
        description: "GIS visualisation for local authority and private business",
        keyNotes: [
            "Designed and developed a Windows GIS application. An off-the-shelf product for a broad market that allowed users to visually represent and publish geographical data.",
            "Designed and developed an interactive digital signage display for use in estate agents.",

        ],
        keyTech: [
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

export const skills = {

    sections: [
        {
            name: "Frontend",
            skills: [{
                name: "JavaScript",
                progress: 1
            },{
                name: "TypeScript",
                progress: 0.95
            },
            {
                name: "HTML/CSS/SASS/LESS",
                progress: 1
            }, {
                name: "AngularJS",
                progress: 0.95
            },
            {
                name: "Angular 2x",
                progress: 0.95
            },
            {
                name: "React",
                progress: 0.8
            }]
        }, {
            name: "Backend",
            skills: [{
                name: ".NET Core / ASP.NET Core",
                progress: 1
            }, {
                name: ".NET Framework",
                progress: 1
            }, {
                name: "Azure",
                progress: 0.9
            },{
                name: "AWS",
                progress: 0.8
            },{
                name: "Entity Framework / EF Core",
                progress: 0.95
            },{
                name: "Microsoft SQL",
                progress: 0.95
            }, {
                name: "Mongo/Dynamo/Cosmos",
                progress: 0.7
            }]
        }
    ],
    other: ["Azure DevOps", "CI/CD", "Docker", "BDD", "TDD", "Git", "Unit Testing", "Node.js", "Agile SCRUM", "Sketch", "Jira", "TeamCity", "Octopus"]
}

export const interests = [
    "Music Performance",
    "Cooking",
    "Gaming"
]
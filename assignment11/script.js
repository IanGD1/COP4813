// BSIT Quick Advisor Course Database
// Based on the Daytona State 2024-2025 BSIT Planner

const courses = [

    // PROGRAMMING REQUIREMENTS

    {
        id: "COP1000",
        name: "Principles of Computer Programming",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Listed as a programming course option."
    },

    {
        id: "COP2800",
        name: "Computer Programming Java",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "One of the programming courses accepted for the BSIT program."
    },

    {
        id: "COP2360",
        name: "C# Programming",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "One of the programming courses accepted for the BSIT program."
    },

    {
        id: "COP2220",
        name: "Computer Programming C",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "One of the programming courses accepted for the BSIT program."
    },

    {
        id: "COP2100C",
        name: "Programming Course",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Listed as an alternative programming prerequisite for Data Structures."
    },

    // MATHEMATICS REQUIREMENTS

    {
        id: "MAC1114",
        name: "Trigonometry",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "MAC1140",
        name: "Pre-Calculus",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "MAC2311C",
        name: "Calculus I",
        credits: 4,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "STA2023",
        name: "Elementary Statistics",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "COT3100",
        name: "Discrete Analysis",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Preferred discrete mathematics option."
    },

    {
        id: "MAD2104",
        name: "Discrete Mathematics",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Alternative discrete mathematics option."
    },

    // LINUX REQUIREMENTS

    {
        id: "CTS3348",
        name: "Linux Administration",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Preferred Linux requirement."
    },

    {
        id: "CTS2321",
        name: "Linux Fundamentals",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Alternative Linux requirement."
    },

    // ADDITIONAL PREREQUISITE COURSES

    {
        id: "CET1600",
        name: "Computer Engineering Technology",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Listed as an alternative prerequisite for Applied Cybersecurity."
    },

    {
        id: "EET1021C",
        name: "Advanced Electrical Circuits and Lab",
        credits: 4,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "EET3086",
        name: "Electrical Circuits",
        credits: 3,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Preferred electrical requirement."
    },

    {
        id: "CET3116",
        name: "Digital Technology",
        credits: 4,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Preferred digital requirement."
    },

    {
        id: "CET1112C",
        name: "Digital Fundamentals and Lab",
        credits: 4,
        category: "Prerequisite",
        prerequisites: [],
        corequisites: [],
        notes: "Alternative digital requirement."
    },

    // REQUIRED BSIT PROGRAM COURSES

    {
        id: "GEB3213",
        name: "Business Writing",
        credits: 3,
        category: "Required",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "CIS4250",
        name: "Ethical Issues in IT",
        credits: 1,
        category: "Required",
        prerequisites: [],
        corequisites: [],
        notes: "Planner lists ENC1101 as its prerequisite."
    },

    {
        id: "COP3530",
        name: "Data Structures",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                any: ["COP2800", "COP2220", "COP2360", "COP2100C"]
            },
            {
                any: ["COT3100", "MAD2104"]
            }
        ],
        corequisites: [],
        notes: "The planner lists programming and discrete mathematics alternatives. Its prerequisite line is formatted ambiguously, so confirm the grouping with an advisor."
    },

    {
        id: "CEN3722",
        name: "Human Computer Interfaces",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                any: ["COP2800", "COP2220", "COP2360"]
            }
        ],
        corequisites: [],
        notes: ""
    },

    {
        id: "COP4708",
        name: "Applied Database I",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                any: ["COP2800", "COP2220", "COP2360"]
            }
        ],
        corequisites: [],
        notes: "Students need only one of the listed programming courses."
    },

    {
        id: "COP4610",
        name: "Operating Systems",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                any: ["CTS3348", "CTS2321"]
            }
        ],
        corequisites: [],
        notes: "Either Linux Administration or Linux Fundamentals is accepted."
    },

    {
        id: "CIS4360",
        name: "Applied Cybersecurity",
        credits: 3,
        category: "Required",
        prerequisites: [
    {
        anyOf: [
            { all: ["CTS3348"] },
            { all: ["CTS2321", "CET1600"] }
              ]
         }
      ],
        corequisites: ["CNT3104"],
        notes: "Requires CTS3348 OR both CTS2321 AND CET1600. CNT3104 is a co-requisite."
    },

    {
        id: "CNT3104",
        name: "Introduction to Telecommunications",
        credits: 2,
        category: "Required",
        prerequisites: [
            {
                any: ["EET1021C", "EET3086"]
            }
        ],
        corequisites: [],
        notes: ""
    },

    {
        id: "CNT4007",
        name: "Data and Computer Communications",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                all: ["CNT3104", "STA2023"]
            }
        ],
        corequisites: [],
        notes: "Both Introduction to Telecommunications and Elementary Statistics are required."
    },

    {
        id: "CNT4703",
        name: "Voice and Data Network Design",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                all: ["CNT4007"]
            }
        ],
        corequisites: [],
        notes: ""
    },

    {
        id: "CDA4101",
        name: "Computer Organization and Design",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                any: ["CET1112C", "CET3116"]
            }
        ],
        corequisites: [],
        notes: ""
    },

    {
        id: "CEN4801",
        name: "Systems Integration",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                all: ["CNT3104", "COP3530"]
            }
        ],
        corequisites: ["COP4708"],
        notes: "Requires both Telecommunications and Data Structures. Applied Database I is a co-requisite."
    },

    {
        id: "CEN4010",
        name: "Software Engineering",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                all: ["COP3530"]
            }
        ],
        corequisites: [],
        notes: ""
    },

    {
        id: "COP4813",
        name: "Web Systems I",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                all: ["COP3530"]
            }
        ],
        corequisites: ["CEN3722"],
        notes: "Human Computer Interfaces is listed as a co-requisite."
    },

    {
        id: "CIS4510",
        name: "IT Project Management",
        credits: 3,
        category: "Required",
        prerequisites: [
            {
                all: ["CEN4801"]
            }
        ],
        corequisites: [],
        notes: ""
    },

    // WEB SYSTEMS SPECIALIZATION

    {
        id: "COP4709",
        name: "Applied Database II",
        credits: 3,
        category: "Web Systems Elective",
        prerequisites: [],
        corequisites: [],
        notes: "Web Systems specialization option."
    },

    {
        id: "COP4834",
        name: "Applied Web Systems II",
        credits: 3,
        category: "Web Systems Elective",
        prerequisites: [],
        corequisites: [],
        notes: "Web Systems specialization option."
    },

    // CYBERSECURITY SPECIALIZATION

    {
        id: "CET4860",
        name: "Introduction to Digital Forensics",
        credits: 3,
        category: "Cybersecurity Elective",
        prerequisites: [
    {
        anyOf: [
            { all: ["CTS3348"] },
            { all: ["CTS2321", "CET1600"] }
            ]
        }
    ],
        corequisites: [],
        notes: "Prerequisite follows the Applied Cybersecurity alternative: CTS3348 OR (CTS2321 AND CET1600)."
    },

    {
        id: "CET4861",
        name: "Advanced Digital Forensics",
        credits: 3,
        category: "Cybersecurity Elective",
        prerequisites: [],
        corequisites: [],
        notes: ""
    },

    {
        id: "CET4862",
        name: "Network Forensics and Incident Response",
        credits: 3,
        category: "Cybersecurity Elective",
        prerequisites: [
            {
                all: ["CIS4360"]
            }
        ],
        corequisites: [],
        notes: "Requires Applied Cybersecurity."
    },

    {
        id: "CET4884",
        name: "Security Methods and Practice",
        credits: 3,
        category: "Cybersecurity Elective",
        prerequisites: [
            {
                all: ["GEB3213"]
            }
        ],
        corequisites: [],
        notes: "Requires Business Writing."
    }

];

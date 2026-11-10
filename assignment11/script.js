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

// STUDENT COURSE TRACKING

const completedCourses = new Set();
const plannedCourses = new Set();


// CHECK PREREQUISITES

function checkPrerequisites(course) {

    if (!course.prerequisites || course.prerequisites.length === 0) {
        return true;
    }

    return course.prerequisites.every(group => {

        // AND: Every listed course must be completed.
        if (group.all) {
            if (!group.all.every(id => completedCourses.has(id))) {
                return false;
            }
        }

        // OR: At least one listed course must be completed.
        if (group.any) {
            if (!group.any.some(id => completedCourses.has(id))) {
                return false;
            }
        }

        // Combined alternatives: At least one complete alternative
        // must be satisfied.
        if (group.anyOf) {
            const satisfied = group.anyOf.some(option => {
                return option.all.every(id => completedCourses.has(id));
            });

            if (!satisfied) {
                return false;
            }
        }

        return true;
    });
}


// CHECK CO-REQUISITES

function checkCorequisites(course) {

    if (!course.corequisites || course.corequisites.length === 0) {
        return true;
    }

    return course.corequisites.every(id =>
        completedCourses.has(id) || plannedCourses.has(id)
    );
}


// GET COURSE INFORMATION

function getCourse(id) {
    return courses.find(course => course.id === id);
}


// CREATE A COURSE CARD DYNAMICALLY

function createCourseCard(course) {

    const card = document.createElement("div");
    card.className = "course-card";

    const title = document.createElement("h3");
    title.textContent = course.id;

    const name = document.createElement("p");
    name.textContent = course.name;

    const credits = document.createElement("p");
    credits.textContent = course.credits + " Credit Hours";

    const status = document.createElement("span");
    status.className = "status";

    const eligible = checkPrerequisites(course);
    const corequisitesMet = checkCorequisites(course);
    const completed = completedCourses.has(course.id);
    const planned = plannedCourses.has(course.id);

    if (completed) {
        status.classList.add("completed");
        status.textContent = "Completed";
    }
    else if (eligible && corequisitesMet) {
        status.classList.add("available");
        status.textContent = "Eligible";
    }
    else if (eligible) {
        status.classList.add("locked");
        status.textContent = "Co-requisite Needed";
    }
    else {
        status.classList.add("locked");
        status.textContent = "Prerequisites Needed";
    }

    // VIEW DETAILS BUTTON

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "View Details";

    detailsButton.addEventListener("click", function() {
        showCourseDetails(course.id);
    });

    // COMPLETE COURSE BUTTON

    const completeButton = document.createElement("button");

    completeButton.textContent = completed
        ? "Undo Completion"
        : "Mark Completed";

    completeButton.addEventListener("click", function() {

        if (completedCourses.has(course.id)) {
            completedCourses.delete(course.id);
        }
        else {
            completedCourses.add(course.id);
            plannedCourses.delete(course.id);
        }

        renderCourses();
    });

    // ADD TO PLAN BUTTON

    const planButton = document.createElement("button");

    planButton.textContent = planned
        ? "Remove from Plan"
        : "Add to Plan";

    planButton.disabled = !planned &&
        (!eligible || !corequisitesMet || completed);

    planButton.addEventListener("click", function() {

        if (plannedCourses.has(course.id)) {
            plannedCourses.delete(course.id);
        }
        else {
            plannedCourses.add(course.id);
        }

        renderCourses();
    });

    card.appendChild(title);
    card.appendChild(name);
    card.appendChild(credits);
    card.appendChild(status);

    card.appendChild(document.createElement("br"));
    card.appendChild(document.createElement("br"));

    card.appendChild(detailsButton);
    card.appendChild(completeButton);
    card.appendChild(planButton);

    return card;
}


// DISPLAY COURSE DETAILS

function showCourseDetails(id) {
    const course = getCourse(id);

    if (!course) {
        console.error("Course not found:", id);
        return;
    }

    const details = document.getElementById("courseDetails");

    if (!details) {
        console.error("Could not find courseDetails element.");
        return;
    }

    details.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = course.id + " - " + course.name;
    details.appendChild(title);

    const credits = document.createElement("p");
    credits.textContent = "Credits: " + course.credits;
    details.appendChild(credits);

    const category = document.createElement("p");
    category.textContent = "Category: " + course.category;
    details.appendChild(category);

    const prerequisites = document.createElement("p");
    prerequisites.innerHTML = "<strong>Prerequisites:</strong> ";

    if (!course.prerequisites || course.prerequisites.length === 0) {
        prerequisites.append("None listed");
    } else {
        const groups = course.prerequisites.map(group => {
            if (group.anyOf) {
                return group.anyOf.map(option =>
                    option.all.join(" AND ")
                ).join(" OR ");
            }

            if (group.any) {
                return group.any.join(" OR ");
            }

            if (group.all) {
                return group.all.join(" AND ");
            }

            return "None listed";
        });

        prerequisites.append(groups.join(" AND "));
    }

    details.appendChild(prerequisites);

    const corequisites = document.createElement("p");
    corequisites.innerHTML = "<strong>Co-requisites:</strong> ";

    corequisites.append(
        course.corequisites && course.corequisites.length > 0
            ? course.corequisites.join(", ")
            : "None listed"
    );

    details.appendChild(corequisites);

    const notes = document.createElement("p");
    notes.innerHTML = "<strong>Notes:</strong> ";

    notes.append(course.notes || "No additional notes.");

    details.appendChild(notes);
}


// RENDER ALL COURSE SECTIONS

function renderCourses() {

    const completedContainer =
        document.getElementById("completedCourses");

    const availableContainer =
        document.getElementById("availableCourses");

    const plannedContainer =
        document.getElementById("plannedCourses");

    completedContainer.replaceChildren();
    availableContainer.replaceChildren();
    plannedContainer.replaceChildren();

    let availableCount = 0;
    let plannedCredits = 0;

    courses.forEach(course => {

        const card = createCourseCard(course);

        // Completed courses
        if (completedCourses.has(course.id)) {
            completedContainer.appendChild(card);
        }

        // All courses appear in the catalog.
        availableContainer.appendChild(card.cloneNode(false));

        // Re-create the catalog card so its event listeners work.
        availableContainer.lastChild.replaceWith(
            createCourseCard(course)
        );

        // Count courses that can be added to a plan.
        if (
            !completedCourses.has(course.id) &&
            checkPrerequisites(course) &&
            checkCorequisites(course)
        ) {
            availableCount++;
        }

        // Planned courses
        if (plannedCourses.has(course.id)) {
            plannedContainer.appendChild(createCourseCard(course));
            plannedCredits += course.credits;
        }

    });

    document.getElementById("completedCount").textContent =
        completedCourses.size;

    document.getElementById("availableCount").textContent =
        availableCount;

    document.getElementById("plannedCount").textContent =
        plannedCourses.size;

    document.getElementById("plannedCredits").textContent =
        plannedCredits;
}


// START THE ADVISOR

renderCourses();

type Education =  {
    icon: string;
    degree: string;
    institution: string;
    year: [number, number];
    major: string;
    description: string[];
}

type Experience = {
    project: string;
    url: string;
    description: string[];
}

type Overview = {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    about: string;
}

export type { Education, Experience, Overview };

const education: Education[] = [
    {
        icon: "/Humber.png",
        degree: "Diploma",
        institution: "Humber Polytechnic",
        year: [2023, 2025],
        major: "Computer Programming",
        description: ["Building a strong foundation with React,HTML, CSS, JavaScript, Node.js, and ReactNative.","Learning core computer science principles inJava, databases, and Linux.","GPA: 90.5."]
    },
    {
        icon: "/Soochow.png",
        degree: "Bachelor",
        institution: "Soochow University",
        year: [2015, 2020],
        major: "Economics",
        description: [
            "Gained a deep understanding of economicprinciples, including supply and demand, andstatistics.",
            "Applied Python for data analysis andinterpretation."
        ]
    }
];


const experience: Experience[] = [
    {
        project: "Peter's Shop",
        url: "https://petershops.com",
        description: [
            "A full-stack project featuring a responsive website designed for both mobileand laptop use.",
            "Utilized TypeScript, React with Redux for state management, Node.js as theserver, and MongoDB for the database.",
            "Hosted on AWS with a Squarespace domain."
        ]
    },
    {
        project: "NBA App (23-24 season)",
        url: "https://lei23lei.github.io/NBA",
        description: [
            "Involved extensive data analysis and management to handle APIinformation effectively.",
            "Built with React, optimized for both computer and mobile screens."
        ]
    },
    {
        project: "Penny Worth (in progress)",
        url: "http://3.144.125.59",
        description: [
            "This app allows users to upload images and manage their finances byrecording their income and expenses. It provides data analysis andvisualizes the results through charts for easy tracking."
        ]
    }
]

const overview: Overview = {
    name: "Lei Ieong Tam",
    email: "lei23lei91@gmail.com",
    phone: "437-855-9651",

    linkedin: "www.linkedin.com/in/lei-ieong-tam-6602a92bb/",
    github: "https://github.com/leeliPeter",
    about: "Seeking a Winter 2025 co-op opportunity, with a strong foundation in bothfrontend and backend technologies. Continuously improving skills in buildingresponsive, user-friendly applications. Holding a Bachelor’s degree inEconomics, I bring valuable analytical skills from my background in customerservice and marketing, offering a unique perspective on problem-solving anduser experience."
}

export { education, experience, overview };
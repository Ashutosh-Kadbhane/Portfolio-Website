import EcommerceImage from '../assets/projects/E-commerce website.png';
import AuthImage from '../assets/projects/MERN Authentication.png'
import VRImage from '../assets/projects/VR Website.png';
import WeatherAppImage from "../assets/projects/Weather App.png"

export const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Build a full-stack e-commerce clothing platform using React, Node.js, Express, and MongoDB. Built responsive UI components, RESTful APIs, JWT-based authentication, and integrated frontend-backend services for a secure and scalable application.',
        image: EcommerceImage,
        category: 'Full Stack',
        technologies: ["React.js", "Node.js", "Express.js","MongoDB" ],
        metrics: "40% increase in conversion",
        githubUrl: "https://github.com/Ashutosh-Kadbhane",
    },
    {
        id:2,
        title: 'MERN Authentication Website',
        description: 'Developed a full-stack authentication system using the MERN stack with JWT-based authentication, secure user login/registration, RESTful APIs, and encrypted password management using bcrypt and MongoDB.',
        image: AuthImage,
        category: 'Full Stack',
        technologies: ["React.js", "Node.js", "Express.js","MongoDB", "JWT","RESTful APIs"  ],
        metrics: "Improving authentication security by 40% and reducing API response time by 25%.",
        githubUrl: "https://github.com/Ashutosh-Kadbhane",
    },
    {
        id:3,
        title: 'Virtual Reality Software Platform ',
        description: 'Developed a browser-based virtual reality platform using React and Tailwind CSS with reusable UI components, responsive design, and deployment on Vercel for scalable hosting and CI/CD support.',
        image: VRImage,
        category: 'Web Apps',
        technologies: ["HTML","CSS3", "JavaScript","React.js","Tailwind CSS", "CI/CD", "Vercel"  ],
        metrics: "Improving UI reusability by 50% and reducing deployment time by 30%",
        githubUrl: "https://github.com/Ashutosh-Kadbhane",
    },
    {
        id:4,
        title: 'Weather App',
        description: 'Built a responsive weather application with React.js and OpenWeather API, providing real-time weather data, forecasts, and location-based updates through an intuitive user interface.',
        image: WeatherAppImage,
        category: 'UI Components',
        technologies: ["HTML","CSS3", "JavaScript", "React.js","Tailwind CSS", "Vercel", 'APIs' ],
        metrics: "Improving UI reusability by 40% and reducing deployment time by 20%",
        githubUrl: "https://github.com/Ashutosh-Kadbhane",
    },
];

export const categories = ['All', 'Web Apps','UI Components','Full Stack']
// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile-pic.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import firebase from "./assets/techstack/firebase.png"
// Porject Images
import projectImage1 from "./assets/projects/blog-app.png";
import projectImage2 from "./assets/projects/currency-converter.png";
import projectImage3 from "./assets/projects/smit-quiz.png";
import projectImage4 from "./assets/projects/todo-app.png";
import projectImage5 from "./assets/projects/car-filter.png";
import projectImage6 from "./assets/projects/weather-app.png";
import projectImage7 from "./assets/projects/js-project.png";
import projectImage8 from "./assets/projects/React-router.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Ammar Bin Ali",
  tagline: "I build things for web",
  img: profile,
  about: `I'm a Frontend Developer based in Karachi, Pakistan. I have a passion for web development and love to create interactive and responsive websites. I am currently pursuing my Bachelor's degree in Computer Sciences. I am always eager to learn new technologies and improve my skills.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ammar-ali-490814245",
  github: "https://github.com/AmmarBinAli",
  instagram: "https://www.instagram.com/ammarali2730",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Intern - Frontend Developer",
    Company: `Interns Pakistan`,
    Location: "Karachi",
    Type: "Internship",
    Duration: "Aug 2023 - Nov 2023",
  },
  {
    Position: "Intern - Frontend Developer",
    Company: `Coders Cave`,
    Location: "Karachi",
    Type: "Internship",
    Duration: "July 2023 - Sept 2023",
  },
  {
    Position: "Fronted Developer",
    Company: `Fiver Freelancer`,
    Location: "Karachi",
    Type: "Full Time",
    Duration: "feb 2024 - Present",
  },
   {
    Position: "Fronted Developer",
    Company: `Fiver Freelancer`,
    Location: "Karachi",
    Type: "Full Time",
    Duration: "feb 2024 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Science in Computer Science",
    Company: "Sindh Madressatul Islam University",
    Location: "Karachi",
    Type: "Full Time",
    Duration: "feb 2022 - Present",
  },
  {
    Position: "Intermediate in Pre-Engineering",
    Company: `Govt. Jinnah College`,
    Location: "karachi",
    Type: "Full Time",
    Duration: "Sep 2019 - July 2021",
  },
  {
    Position: "Matriculation in Computer Science",
    Company: `GBS School`,
    Location: "karachi",
    Type: "Full Time",
    Duration: "Mar 2017 - Mar 2018",
  },
  {
    Position: "MERN Stack Developer",
    Company: `Saylani Mass IT Tranining Program (SMIT)`,
    Location: "karachi",
    Type: "Full Time",
    Duration: "october 2022 - january 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  firebase: firebase,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Blog App Project",
    image: projectImage1,
    description: `In this project, I have created a blog app where users can read, write, update post. I have used React for the frontend and appwrite for the backend as a service. I have also used Redux for state management.`,
    techstack: "HTML/CSS, JavaScript, React, Redux, Tailwind CSS, appwrite",
    previewLink: "https://blogs-app-appwrite.vercel.app/",
  },
  {
    title: "Currency Converter Project",
    image: projectImage2,
    description: `In this project, I have created a currency converter app where users can convert currency from one to another. I have used React for the frontend and an API for currency conversion.`,
    techstack: "HTML/CSS, JavaScript, React, Tailwind CSS, API",
    previewLink: "https://reactjs-currency-converters.netlify.app/",
  },
  {
    title: "SMIT Quiz App Project",
    image: projectImage3,
    description: `In this project, I have created a quiz app where users can take a quiz and get their result. I have used HTML, CSS, and JavaScript for this project.`,
    techstack: "HTML/CSS, JavaScript, Bootstrap",
    previewLink: "https://smit-quiz-apps.netlify.app/",
  },
  {
    title: "Todo App In React",
    image: projectImage4,
    description: `In this project, I have created a todo app where users can add, delete, and update their todos. I have used React for the frontend and local storage for storing todos.`,
    techstack: "HTML/CSS, JavaScript, React, Tailwind CSS",
    previewLink: "https://todo-app-in-reactjs-smit.netlify.app/",
  },
  {
    title: "Car Rental App Project",
    image: projectImage5,
    description: `In this project, I have created a car rental app where users can rent a car. I have used HTML, CSS, and JavaScript for this project.`,
    techstack: "HTML/CSS, JavaScript, Bootstrap",
    previewLink: "https://js-car-filter-app.netlify.app/",
  },
  {
    title: "Weather App Project",
    image: projectImage6,
    description: `In this project, I have created a weather app where users can check the weather of any city. I have used HTML, CSS, and JavaScript for this project`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://haseeb-weather-app-js.netlify.app/",
  },
  {
    title: "All JavaScript Projects",
    image: projectImage7,
    description: `In this project, I Worked on all JavaScript projects. I have used HTML, CSS, and JavaScript for this project`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://javascript-project-link.netlify.app/",
  },
  {
    title: "React Router Practice",
    image: projectImage8,
    description: `This project showcases a website created using React Router to handle navigation between different components and pages.`,
    previewLink: "https://react-router-practice-smit.netlify.app/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ammarali0062003@gmail.com",
  phone: "+92-3171265347",
};

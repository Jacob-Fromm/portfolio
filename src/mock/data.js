import { nanoid } from 'nanoid';


// HEAD DATA
export const headData = {
  title: 'Jacob Fromm | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'jacob fromm',
  subtitle: 'full stack software engineer',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Sherm-26.jpg',
  paragraphOne: "Hi! I'm a full stack web developer experienced in Ruby on Rails and JavaScript-based programming, passionate about increasing quality of life through accessible software.",
  paragraphTwo: "With a background in production (film / TV / event), I posess strong skills in logistics and interpersonal communication that help drive productivity and morale in high-pressure environments.",
  paragraphThree: "In past lives, I've been an ESL teacher, a professional photographer, and--for the past five years—a full-time standup comedian. (Under no circumstances will I tell you a joke.)",
  resume: 'http://localhost:8000/static/FrommResume-d76a01d2b26bfdd52cf7e1405b091a08.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pickflix-pic.jpg',
    title: 'PickFlix',
    info: '',
    info2: '',
    url: '',
    frontend: 'https://github.com/Jacob-Fromm/pickflix-frontend', // if no repo, the button will not show up
    backend: "https://github.com/Jacob-Fromm/pickflix_backend"
  },
  {
    id: nanoid(),
    img: 'we-care-screenshot.jpg',
    title: 'WeCare',
    info: '',
    info2: '',
    url: '',
    frontend: 'https://github.com/Jacob-Fromm/we_care_frontend', // if no repo, the button will not show up
    backend: "https://github.com/Jacob-Fromm/we_care_backend"
  },
  {
    id: nanoid(),
    img: 'literally-just-vibing-screenshot.jpg',
    title: 'Literally Just Vibing',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/gabrielhicks/literallyjustvibing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

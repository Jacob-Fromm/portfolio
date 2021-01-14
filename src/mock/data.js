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
  resume: 'localhost:8000/FrommResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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

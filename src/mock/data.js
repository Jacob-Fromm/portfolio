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
  bio: 'about',
  projects: 'projects',
  github: 'https://github.com/Jacob-Fromm/',
  linkedin: 'https://linkedin.com/in/jacob-fromm',
};

// ABOUT DATA
export const aboutData = {
  img: 'Sherm-26.jpg',
  paragraphOne:
    "Hi! I'm a full stack web developer experienced in Ruby on Rails and JavaScript-based programming, passionate about increasing quality of life through accessible software.",
  paragraphTwo:
    'With a background in production (film / TV / event), I possess strong skills in logistics and interpersonal communication that help drive productivity and morale in high-pressure environments.',
  paragraphThree:
    "In past lives, I've been an ESL teacher, a professional photographer, and—for the past five years—a full-time standup comedian. (Under no circumstances will I tell you a joke.)",
  // resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'david-odyssey-image.jpg',
    title: 'David Odyssey',
    info:
      'Gatsby frontend / Sanity.io backend developed for writer, editor, performer, diviner, and cosmic being David Odyssey. Custom design.',
    info2: '',
    url: 'https://davidodyssey.com',
    frontend: 'https://github.com/Jacob-Fromm/david-odyssey-burger', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pickflix-pic.jpg',
    title: 'PickFlix',
    info:
      'React / Rails app that connects users who want to watch the same Netflix films via Tinder-based swipe functionality',
    info2: '',
    url: '',
    frontend: 'https://github.com/Jacob-Fromm/pickflix-frontend', // if no repo, the button will not show up
    backend: 'https://github.com/Jacob-Fromm/pickflix_backend',
  },
  {
    id: nanoid(),
    img: 'we-care-screenshot.jpg',
    title: 'WeCare',
    info:
      'JavaScript / Rails app that tracks users’ moods and self-care activities and provides critical mental health resources',
    info2: '',
    url: '',
    frontend: 'https://github.com/Jacob-Fromm/we_care_frontend', // if no repo, the button will not show up
    backend: 'https://github.com/Jacob-Fromm/we_care_backend',
  },
  // {
  //   id: nanoid(),
  //   img: 'literally-just-vibing-screenshot.jpg',
  //   title: 'Literally Just Vibing',
  //   info:
  //     "CLI app that utilizes Spotify's Web API to create playlists based on moods. We interpreted Spotify's track data and executed methods to create mood-based playlists with 20 unique songs. Users are able to make multiple playlists based on a list of four moods, refresh a playlist if they dislike what the app creates for them, and save playlists using unique names. Users are also able to delete playlists from their library. The app saves playlists for later access.",
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/gabrielhicks/literallyjustvibing', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jacobfromm@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jacob_fromm',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jacob-fromm/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Jacob-Fromm/',
    },
    {
      id: nanoid(),
      name: 'dev.to',
      url: 'https://dev.to/jacobfromm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

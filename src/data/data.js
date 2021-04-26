import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jason Merrigan Portfolio',
  lang: '',
  description: 'N/A',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jason Merrigan',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Location: Dublin, Ireland 🇮🇪',
  paragraphTwo: 'Technologies used: HTML, CSS, JavaScript, React, MySQL',
  paragraphThree: 'Current Role: 2nd Level Support for VSware',
  resume: 'https://drive.google.com/file/d/1B0vfamvQFY3NgyfsDA9xMJhIYJUTclOx/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movie_db.png',
    title: 'Movie DB 🍿',
    info:
      'Search for Movies by Title and Year. When the user clicks on the Movie Poster, they will be redirected to an info page, this was achieved with React Router.',
    info2: 'UseContext, ReactRouter, Custom Hooks',
    url: 'https://movie-db-search-react.netlify.app',
    repo: 'https://github.com/merriganj/movie-db',
  },
  {
    id: nanoid(),
    img: 'cocktail_db.jpg',
    title: 'Cocktail DB 🍸',
    info:
      'Tired of drinking the same old Beers, Craftys or Cocktails? Spice up your lockdown with my Cocktails Database! ',
    info2: 'UseContext, ReactRouter',
    url: 'https://drinks-db-search-react.netlify.app/',
    repo: 'https://github.com/merriganj/Drinks-DB',
  },

  {
    id: nanoid(),
    img: 'dark_theme.png',
    title: 'Dark Theme 🌗',
    info: 'A simple Toggle Light/Dark Theme',
    info2: 'Built with React, using localStorage, conditional operators, JSX and CSS Variables',
    url: 'https://dark-theme-toggle-react.netlify.app/',
    repo: 'https://github.com/merriganj/simple-dark-theme-react-js',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Drop me an email',
  btn: 'jasonpmerrigan@gmail.com',
  email: 'jasonpmerrigan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/merriganj',
    },
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://ie.linkedin.com/in/jason-merrigan-3a3562146',
    },
  ],
};

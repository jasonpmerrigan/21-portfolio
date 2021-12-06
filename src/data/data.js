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
  resume: 'https://drive.google.com/file/d/1cMzR8xwa8R5eRZYi1fhW-UYoHOcgSk8_/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sloth_store.png',
    title: 'Furniture Store 🪑',
    info:
      'Browse, filter and sort products. Add them to your cart, proceed to checkout and see your total',
    info2:
      'Auth0 User Authentication, LocalStorage, useEffect, useContext, useReducer, ReactRouter',
    url: 'https://react-furniture-store.netlify.app/',
    repo: 'https://github.com/merriganj/react-store',
  },

  {
    id: nanoid(),
    img: 'github_search.png',
    title: 'Github User Search 🔎',
    info:
      'Sign in with auth0 authentication and search for your favorite github users, or yourself. Display User, Followers, Languages, Most Popular Repos and more with FusionCharts',
    info2: 'Auth0 User Authentication, LocalStorage UseContext, ReactRouter, FusionCharts',
    url: 'https://github-user-search-react-auth0.netlify.app/',
    repo: 'https://github.com/merriganj/react-github-user-search',
  },

  {
    id: nanoid(),
    img: 'movie_db.png',
    title: 'Movie Search 🍿',
    info:
      'Search for Movies by Title and Year. When the user clicks on the Movie Poster, they will be redirected to an info page, this was achieved with React Router.',
    info2: 'UseContext, ReactRouter, Custom Hooks',
    url: 'https://movie-db-search-react.netlify.app',
    repo: 'https://github.com/merriganj/movie-db',
  },

  {
    id: nanoid(),
    img: 'quiz.png',
    title: 'Multiple Category Quiz 🤔',
    info: 'Select Sports, History or Politics. Number of questions and Level from Easy to Hard ',
    info2: 'useState, useContext, useEffect',
    url: 'https://react-multiple-choice-quiz.netlify.app/',
    repo: 'https://github.com/merriganj/react-quiz',
  },

  {
    id: nanoid(),
    img: 'cocktail_db.jpg',
    title: 'Cocktail Maker 🍸',
    info:
      'Tired of drinking the same old Beers, Craftys or Cocktails? Spice up your lockdown with my Cocktails Database ',
    info2: 'UseContext, ReactRouter',
    url: 'https://drinks-db-search-react.netlify.app/',
    repo: 'https://github.com/merriganj/Drinks-DB',
  },

  {
    id: nanoid(),
    img: 'hacker_news.png',
    title: 'Hacker News 📰',
    info:
      'Search for news articles with pagination and remove articles from original fetch with .filter()',
    info2: 'Pagination, useContext, useEffect, useReducer',
    url: 'https://hacker-news-api-react-jason-merrigan.netlify.app/',
    repo: 'https://github.com/merriganj/hacker_news',
  },

  {
    id: nanoid(),
    img: 'dark_theme.png',
    title: 'Dark Theme 🌗',
    info: 'A simple Toggle Light/Dark Theme',
    info2: 'LocalStorage, Conditional Operators, JSX and CSS Variables',
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

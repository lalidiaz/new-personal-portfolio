import React from 'react';
import './styles.scss';
import Card from '../../components/Card/index';
import { Link } from 'react-router-dom';
import leftArrow from '../../assets/leftArrow.svg';
import ScrollToTop from '../../components/ScrollToTop';

export default function Cards() {
  const Projects = [
    {
      title: "Graphic Designer' web",
      description: 'NextJs / Material Ui',
      url: 'https://github.com/lalidiaz/FerminGuerreroWeb-NextJs',
      type: 'Freelance Job, in progress.'
    },
    {
      title: 'Redux Course',
      description: 'React-Redux / Redux Toolkit / Testing with Jest / Debug',
      url: 'https://github.com/lalidiaz/Redux-Course',
      type: 'Course'
    },
    {
      title: 'Spotify Clone',
      description: 'React Native / GraphQL',
      url: 'https://github.com/lalidiaz/Spotify-Clone-React-Native',
      type: 'Mobile App'
    },
    {
      title: 'CryptoTracker App',
      description: 'React Native',
      url: 'https://github.com/lalidiaz/cryptotracker-React-Native',
      type: 'Mobile App'
    },
    {
      title: 'Recipe App',
      description: 'ReactJs',
      url: 'https://food-recipe-app.vercel.app',
      type: 'Desktop'
    },
    {
      title: 'Instagram Clone',
      description: 'ReactJs',
      url: 'https://tigram-app.lalidiaz.vercel.app/',
      type: 'Desktop'
    },
    {
      title: 'To Do List',
      description: 'ReactJs',
      url: 'https://react-todolist.lalidiaz.vercel.app/',
      type: 'Desktop'
    },
    {
      title: 'To Do List with Redux',
      description: 'ReactJs / Redux. ',
      url: 'https://todolist-redux.vercel.app',
      type: 'Desktop'
    },
    {
      title: 'Twitter Clone',
      description: 'NextJs with Firebase authentification',
      url: 'https://github.com/lalidiaz/devtter-NextJs-hooks-firebase',
      type: 'Desktop'
    },
    {
      title: 'Previous Personal Portfolio',
      description: 'ReactJs',
      url: 'https://github.com/lalidiaz/Personal-portfolio-ReactJs',
      type: 'Desktop'
    },
    {
      title: 'Bali Experience',
      description: 'CSS / HTML',
      url: 'https://baliexperience.now.sh/',
      type: 'Desktop'
    },
    {
      title: 'Random Cat',
      description: 'Javascript vanilla / CSS / HTML',
      url: 'https://fetch-cat-api-apem7ifi6.vercel.app/',
      type: 'Desktop'
    },
    {
      title: 'Weather App',
      description: 'Javascript vanilla / CSS / HTML',
      url: 'https://app-weather.vercel.app/',
      type: 'Desktop'
    },

    {
      title: 'Artist Web',
      description: 'Javascript vanilla / CSS / HTML',
      url: 'https://pagina-mami.lalidiaz.now.sh/',
      type: 'Desktop'
    },
    {
      title: 'Dynamic Cards',
      description: 'ReactJs',
      url: 'https://github.com/lalidiaz/StartUP-ReactJs',
      type: 'Desktop'
    },
    {
      title: 'La Muralla Roja Blog',
      description: 'CSS / HTML (Parallax effect)',
      url: 'https://efecto-parallax-3nd21jqki.vercel.app/',
      type: 'Desktop'
    },
    {
      title: 'Search Engine',
      description: 'ReactJs',
      url: 'https://fetch-mercadolibre.lalidiaz.vercel.app/',
      type: 'Desktop'
    }
  ];

  return (
    <div className="portfolioWrapper">
      <div className="arrow">
        <Link to="/">
          <span href="#" className="btn">
            <img src={leftArrow} alt="" />
          </span>
        </Link>
        <div className="projectsContainer">
          <h3>Projects</h3>
        </div>
      </div>
      <div className="cardWrapper">
        {Projects.map((project, key) => {
          return (
            <Card
              key={key}
              title={project.title}
              description={project.description}
              url={project.url}
              type={project.type}
            />
          );
        })}
      </div>
      <ScrollToTop />
    </div>
  );
}

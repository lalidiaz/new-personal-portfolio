import React from 'react';
import './styles.scss';
import Card from '../../components/Card/index';
import { FcCloseUpMode } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import back from "../../assets/back.png";


export default function Cards() {
  const Projects = [
    {
      title: 'Redux Course',
      description: "React-Redux + Redux Toolkit + Testing with Jest",
      url:'https://github.com/lalidiaz/Redux-Course',
    },
    {
      title: 'Spotify Clone',
      description: "React Native + GraphQL",
      url:'https://github.com/lalidiaz/Spotify-Clone-React-Native'
    },
    {
      title: 'CryptoTracker App',
      description: "React Native",
      url:'https://github.com/lalidiaz/cryptotracker-React-Native'
    },
    {
      title: 'Recipe App',
      description: "ReactJs",
      url:'https://food-recipe-app.vercel.app'
    },
    {
      title: 'Tigram (Instagram Clone)',
      description: "ReactJs",
      url:'https://tigram-app.lalidiaz.vercel.app/'
    },
    {
      title: 'To Do List',
      description: "ReactJs",
      url:'https://react-todolist.lalidiaz.vercel.app/'
    },
    {
      title: 'REDUX + REACT - To Do List',
      description: "ReactJs + Redux. ",
      url:'https://todolist-redux.vercel.app'
    },
    {
      title: 'Devtter (Twitter Clone)',
      description: "NextJs",
      url:'https://github.com/lalidiaz/devtter-NextJs-hooks-firebase'
    },
    {
      title: 'Previous Personal Portfolio ',
      description: "ReactJs",
      url:'https://github.com/lalidiaz/Personal-portfolio-ReactJs'
    },
    {
      title: 'Bali Experience',
      description: 'CSS + HTML',
      url:'https://baliexperience.now.sh/'
    },
    {
      title: 'Random Cat',
      description: "Javascript vanilla + CSS + HTML",
      url:'https://fetch-cat-api-apem7ifi6.vercel.app/'
    },
    {
      title: 'Weather App',
      description: "Javascript vanilla + CSS + HTML",
      url: 'https://app-weather.vercel.app/'
    },

    {
      title: 'Artist Web',
      description: "Javascript vanilla + CSS + HTML",
      url:'https://pagina-mami.lalidiaz.now.sh/'
    },
    {
      title: 'Dynamic Cards',
      description: "ReactJs",
      url:'https://github.com/lalidiaz/StartUP-ReactJs'
    },
    {
      title: 'La Muralla Roja Blog',
      description: "CSS + HTML (Parallax effect)",
      url:'https://efecto-parallax-3nd21jqki.vercel.app/'

    },
    {
      title: 'Search Engine',
      description: "ReactJs",
      url:'https://fetch-mercadolibre.lalidiaz.vercel.app/'
    }
  ]

  return(
    <div className='portfolioWrapper'>
      <div className="arrow">
        <Link to="/">
        <span href="#" class="btn">
          <img src={back} alt="" />
          </span>
        </Link>
        <div className="projectsContainer">
          <FcCloseUpMode fontSize={22} />
          <h3>Projects:</h3>
        </div>
      </div>
     <div className='cardWrapper'>
        {Projects.map((project, key) => {
          return (
            <Card 
              key={key} 
              title={project.title} 
              description={project.description}
              url={project.url}
              />
          )
        })}
      </div>
    </div>
  )
}

import React from 'react';
import './styles.scss';
import Card from '../../components/Card/index';
import { FcCloseUpMode } from 'react-icons/fc';

const Cards = () => {
  const Projects = [
    {
      title: 'CryptoTracker App ',
      description: "React Native",
      url:'https://github.com/lalidiaz/cryptotracker-React-Native'
    },
    {
      title: ' Recipe App',
      description: "ReactJs",
      url:'https://food-recipe-app.vercel.app'
    },
    {
      title: 'Tigram',
      description: "ReactJs",
      url:'https://tigram-app.lalidiaz.vercel.app/'
    },
    {

      title: ' To Do List',
      description: "ReactJs",
      url:'https://react-todolist.lalidiaz.vercel.app/'
    },
    {

      title: 'REDUX + REACT - To Do List',
      description: "ReactJs + Redux. ",
      url:'https://todolist-redux.vercel.app'
    },
    {
  
      title: 'Devtter ',
      description: "NextJs",
      url:'https://github.com/lalidiaz/devtter-NextJs-hooks-firebase'
    },
    {
      title: ' Bali Experience',
      description: 'CSS + HTML',
      url:'https://baliexperience.now.sh/'
    },
    {
      title: ' Random Cat',
      description: "Javascript vanilla + CSS + HTML",
      url:'https://fetch-cat-api-apem7ifi6.vercel.app/'
    },
    {
      title: ' Weather App',
      description: "Javascript vanilla + CSS + HTML",
      url: 'https://app-weather.vercel.app/'
    },

    {
      title: ' Mom Web Page',
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
      <h3><FcCloseUpMode fontSize={22}/><u>Projects:</u></h3>
      <div className='cardWrapper'>
        
        {Projects.map((project, key) => {
          return (
            <Card key={key} project={project} />
          )
        })}
      </div>
    </div>
  )
}

export default Cards;

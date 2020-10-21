import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
    <header className='header'>
        <Link to='/projects'>
        <span className="projectsButton">Projects</span>
        </Link>

    </header>
   
  )
}

export default Header;

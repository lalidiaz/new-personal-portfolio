import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
    <header className='header'>
        <Link to='/projects'>
          Projects
        </Link>
    </header>
   
  )
}

export default Header;

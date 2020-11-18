import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';


export default function Header() {
  return(
    <header className='header'>
        <Link to='/projects'>
          <span href="#" class="btn">Projects</span>
        </Link>
    </header>
   
  )
}

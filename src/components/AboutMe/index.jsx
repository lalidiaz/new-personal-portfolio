import React from 'react';
import './styles.scss';
import { FcLikePlaceholder } from 'react-icons/fc'; 
import {Link} from 'react-router-dom';
import { CgArrowLeftO } from 'react-icons/cg';

const AboutMe = () => {
  return(
    <div className='container'>
     <div className='btn'>
     <Link to='/'>
      <CgArrowLeftO fontSize={50}/>
      </Link>
    </div>
    <section className='aboutMe'>
        <p>
          I am a Front End Developer with passion for coding. <FcLikePlaceholder />
          Always happy to learn something new and I spend most of the time exploring technologies and methodologies.
          I pay close attention to details and I have the ability to stay focused on the task at hand for long periods to get the job done.
          I studied in a Front End Development Coding Bootcamp and as self-taught. 
        </p>
    </section>
    </div>
  )
}
export default AboutMe;

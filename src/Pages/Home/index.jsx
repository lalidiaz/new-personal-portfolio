import React from 'react';
import './styles.scss';
import Contact from '../../components/Contact';
import { FcLikePlaceholder } from 'react-icons/fc';




const Home = () => {
  return(
    <>
    <h2>Nice to meet you</h2>
      <section className="wrapper">
        <h1>
          <u>I'm Laura Diaz.</u>
        </h1>
        <h3>Front-end Developer.</h3> 
        <p className="aboutMe">
          I am a Front-end Developer with passion for coding.{" "}
          <FcLikePlaceholder />{" "} 
          Always happy to learn something new and I spend most of the time
          exploring technologies and methodologies. I pay close attention to
          details and I have the ability to stay focused on the task at hand for
          long periods to get the job done. I studied in a Front End Development
          Coding Bootcamp and as self-taught.
        </p>
      </section>
      <Contact />
     
    </>
  )
}

export default Home;

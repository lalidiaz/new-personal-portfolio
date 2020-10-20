import React from 'react';
import './styles.scss';
import Contact from '../../components/Contact/index';



const Home = () => {
  return(
    <>
    <h2>Nice to meet you</h2>
    <section className='wrapper'>
        <h1><u>I'm Laura Diaz.</u></h1>
        <h3>Front End Developer.</h3>
      </section>
      <Contact />
    </>
  )
}

export default Home;

import React from 'react';
import './styles.scss';
import Contact from '../../components/Contact';
import { FcLike } from 'react-icons/fc';

export default function Home() {
  return (
    <>
      <section className="wrapper">
        <h1>
          <u>I'm Laura Diaz.</u>
        </h1>
        <h3 className="frontEnd">Front-end Developer.</h3>
        <p className="aboutMe">
          I am a Front-end Developer with passion for coding{' '}
          <FcLike size={25} />.<br />
          Always happy to learn something new and I spend most of the time
          exploring technologies and methodologies. I pay close attention to
          details and I have the ability to stay focused on the task at hand for
          long periods to get the job done. I studied in a Front End Development
          Coding Bootcamp and as self-taught.
        </p>
      </section>
      <Contact />
    </>
  );
}

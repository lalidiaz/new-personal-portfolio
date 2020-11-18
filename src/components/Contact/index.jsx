import React from 'react';
import './styles.scss';
import Resume from '../../assets/LauraDiazCV.pdf';
import { VscGithub, VscFileCode } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi';
import '../../App.scss';

export default function Contact() {
  return(
    <section className='contact'>
    <div className='iconsContainer'>
    <li>
      <div className='icon'>
      <a 
        href="https://github.com/lalidiaz" 
        target="_blank"
        >
          <VscGithub fontSize={40} />
      </a>
      </div>
      </li>
      <li>
      <div className='icon'>
        <a href={Resume} download >
        <VscFileCode fontSize={40}/>
        </a>
        </div>
      </li>
      <li>
      <div className='icon'>
        <a 
          href="https://www.linkedin.com/in/laura-diaz-a661a617a/"
          target="_blank" 
        >
        <SiLinkedin fontSize={40}/>
          </a>
          </div>
        </li>
    </div>
  <div className='mailLocation'>
    <span>
      <HiOutlineMail fontSize={25}/>
      <p className='mail'>lauradiaz1586@gmail.com</p>
      </span>
    <span>
      <HiLocationMarker fontSize={25}/>
      <p className='mail'>Dubai, UAE.</p>
      </span>
    <span>
      <BiWorld fontSize={25}/>
      <p className='mail'>Happy to work remotely and on-site!</p>
      </span>
   </div> 
  </section>
  )
}

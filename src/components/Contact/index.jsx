import React from 'react';
import Skills from '../../components/Skills';
import ReactTooltip from 'react-tooltip';

//Styles
import './styles.scss';

//Assets
import Resume from '../../assets/LauraDiazCV.pdf';

//Icons
import { VscGithub, VscFileCode } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { BiWorld } from 'react-icons/bi';
import { GiLargePaintBrush } from 'react-icons/gi';
import '../../App.scss';

export default function Contact() {
  return (
    <section className="contact">
      <ReactTooltip />
      <div className="iconsContainer">
        <li>
          <div className="icon" data-tip="Github">
            <a href="https://github.com/lalidiaz" target="_blank">
              <VscGithub fontSize={40} />
            </a>
          </div>
        </li>
        <li>
          <div className="icon" data-tip="CV">
            <a href={Resume} download>
              <VscFileCode fontSize={40} />
            </a>
          </div>
        </li>
        <li>
          <div className="icon" data-tip="Linkedin">
            <a
              href="https://www.linkedin.com/in/laura-diaz-a661a617a/"
              target="_blank"
            >
              <SiLinkedin fontSize={40} />
            </a>
          </div>
        </li>

        <li>
          <div className="icon" data-tip="Hobby">
            <a href="https://www.instagram.com/veralunar/" target="_blank">
              <GiLargePaintBrush fontSize={40} />
            </a>
          </div>
        </li>
      </div>
      <div className="mailLocation">
        <span>
          <HiOutlineMail fontSize={20} />
          <p className="mail">lauradiaz1586@gmail.com</p>
        </span>
        <span>
          <HiLocationMarker fontSize={20} />
          <p className="mail">Dubai, UAE.</p>
        </span>
        <span>
          <BiWorld fontSize={20} />
          <p className="mail">Happy to work remotely and on-site!</p>
        </span>
        <span>
          <a href="mailto:contact@lauradiaz.dev" className="linkEmail">
            <p className="e-mail">Contact me</p>
          </a>
        </span>
      </div>
      <Skills />
    </section>
  );
}

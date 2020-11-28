import React from 'react';
import './styles.scss';
import arrow from "../../assets/arrow.png";


export default function Card({ title, description, url }){
    return (
      <>
      <div className='individualCard'>
        <a href={url} target='_blank'>
          <p className='name1'>
          <strong>{title}</strong>
          </p>
        <img src={arrow} alt="" />
         <p className='name2'>{description}</p>
        </a>
      </div>        
    </>
    )
  }


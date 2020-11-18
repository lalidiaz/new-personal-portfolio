import React from 'react';
import Footer from '../Footer/index';
import './AboutMeLayout.scss';


export default function AboutMeLayout(props){
 return(
   <div>     
     <div className='aboutWrapper'>
        {props.children}
     </div>
     <Footer />
   </div>

 )
}

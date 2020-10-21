import React from 'react';
import Footer from '../Footer/index';
import './AboutMeLayout.scss';



const AboutMeLayout = (props) => {
 return(
   <div>     
     <div className='aboutWrapper'>
        {props.children}
     </div>
     <Footer />
   </div>

 )
}
export default AboutMeLayout;

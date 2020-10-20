import React from 'react';
import Header from '../Header/index';
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

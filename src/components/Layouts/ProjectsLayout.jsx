import React from 'react';
import Footer from '../Footer/index';
import './ProjectsLayout.scss';


export default function ProjectsLayout(props) {
 return(
   <div>
     <div className='projectWrapper'>
        {props.children}
     </div>
     <Footer />
   </div>

 )
}

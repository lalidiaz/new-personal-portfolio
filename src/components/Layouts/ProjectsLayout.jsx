import React from 'react';
import Footer from '../Footer/index';
import './ProjectsLayout.scss';



const ProjectsLayout = (props) => {
 return(
   <div>
     <div className='projectWrapper'>
        {props.children}
     </div>
     <Footer />
   </div>

 )
}
export default ProjectsLayout;


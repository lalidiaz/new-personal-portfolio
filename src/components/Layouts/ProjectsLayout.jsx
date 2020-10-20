import React from 'react';
import Footer from '../Footer/index';
import './MainLayout.scss';



const ProjectsLayout = (props) => {
 return(
   <div>
     <div className='mainWrapper'>
        {props.children}
     </div>
     <Footer />
   </div>

 )
}
export default ProjectsLayout;


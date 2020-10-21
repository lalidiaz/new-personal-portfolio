import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './MainLayout.scss';



const MainLayout = (props) => {
 return(
   <div>
     <Header />
     <div className='mainWrapper'>
        {props.children}
     </div>
     <Footer />
   </div>

 )
}
export default MainLayout;

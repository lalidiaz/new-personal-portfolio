import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './MainLayout.scss';



export default function MainLayout(props) {
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

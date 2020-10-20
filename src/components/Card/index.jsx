import React from 'react';
import './styles.scss';
import { FcNext } from 'react-icons/fc';

class Card extends React.Component {
    render() {
        const { title, description, url } = this.props.project

        return (
          <>
            <div className='individualCard'>
         
                <a href={url} target='_blank'>
                    <p className='name1'><strong>{title}</strong><FcNext fontSize={15}/></p>
                    <p className='name2'>{description}</p>
                </a>
              
            </div>        
            </>

        )
    }
}
export default Card;

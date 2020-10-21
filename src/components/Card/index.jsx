import React from 'react';
import './styles.scss';
import arrow from "../../assets/arrow.png";

class Card extends React.Component {
    render() {
        const { title, description, url } = this.props.project

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
}
export default Card;

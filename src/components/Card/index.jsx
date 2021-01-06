import React from 'react';
import './styles.scss';
import { AiOutlineLink } from 'react-icons/ai';

export default function Card({ title, description, url, type }) {
  return (
    <>
      <div className="individualCard">
        <a href={url} target="_blank">
          <p className="topic">
            <strong>
              {title}. <AiOutlineLink size={22} />
            </strong>
          </p>
          <div className="content">
            <p>📓 {type}</p>
            <p>🛠️</p>
            <p className="description">{description}</p>
          </div>
        </a>
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import './styles.scss';
import topArrow from '../../assets/topArrow.jpeg';

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
};
const handleClick = () => {
  window[`scrollTo`]({ top: 0, behavior: 'smooth' });
};

export default function ScrollToTop() {
  return (
    <div className="wrapper-scroll" onClick={handleClick}>
      <div className="btn-scroll">
        <img src={topArrow} />
      </div>
    </div>
  );
}

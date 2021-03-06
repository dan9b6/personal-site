import React, { useEffect } from 'react';
import './style.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hire() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <div className="central">
        <div data-aos="fade-up" className="hire-me">
          <h1>
            <i>"I may not have 100 years of experience, but I am 100% ready to be a developer!"</i>
          </h1>
          <h3>Click on the really big and enthusiastic button to get in touch</h3>
          <div className="columns">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3">
              <img className="point-side" src={require('../../Images/point-side.png')} alt="me" />
            </div>
          </div>
          <a
            className="hire-btn"
            href="mailto:danbh7296@gmail.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hello%20Dan"
          >
            <div className="hire">Click here to hire your next developer!</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hire;

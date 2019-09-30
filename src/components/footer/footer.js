import React from 'react';
import './footer.css';
import lg from '../../logo.svg'

const Footer = (props) => {
  return (
      <div className={"text-center py-3 mt-3 bg-light " + props.show}>
        {
          <p className="mb-0">Copyright ©2019 All rights reserved | This template is made with React <img src={lg} className="logo" alt="react" /></p>
        }
      </div>
  );
};

export default Footer;

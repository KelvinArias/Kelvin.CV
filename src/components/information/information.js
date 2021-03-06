import React, {useState,useRef} from 'react';
import './information.css';
import {Col} from 'react-bootstrap';
import fb from '../../utilities/img/facebook.svg';
import wh from '../../utilities/img/whatsapp.svg';
import tw from '../../utilities/img/twitter.svg';
import lk from '../../utilities/img/linkedin.svg';
import tes from '../../utilities/img/testing.svg';
import pin from '../../utilities/img/pin.svg';
import gi from '../../utilities/img/gift.svg';
import tel from '../../utilities/img/telephone.svg';
import ema from '../../utilities/img/email.svg';
import web from '../../utilities/img/website.svg';
import pf from '../../utilities/img/me.jpg';
import { Overlay , Tooltip } from 'react-bootstrap'

const Information = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Col lg={4} className="over mb-5 mb-lg-0">
      <div className="overDiv">
        <div className="general_info_image">
          <img src={pf}  alt="perfil" class="img-fluid" />
        </div>  
        <div className="general_content">
          <h3 className="general_tittle position-relative">Información General</h3>
          <ul className="list_content">
            <li><img src={tes} alt="icon1"/>Nombre: Kelvin Arias</li>
            <li><img src={pin} alt="icon2"/>Locación: Lima PE</li>
            <li><img src={gi} alt="icon3"/>Nacimiento: Septiembre 13, 1997</li>
            <li><img src={tel} alt="icon4"/>Teléfono: +51 935 859 529</li>
            <li><img src={ema} alt="icon5"/>Email: Kelvin727631@gmail.com</li>
            <li><img src={web} alt="icon6"/>Portafolio: kelvincv.herokuapp.com</li>
          </ul>
          <div className="social_box">
            <div className="social_icons"><a href="https://www.facebook.com/kelvin.arias26" target="_blank" rel="noopener noreferrer"><img src={fb}  alt="Facebook"/></a></div>
            <div ref={target} onClick={() => setShow(!show)} className="social_icons"><img src={wh}  alt="WhatsApp"/></div>
              <Overlay target={target.current} show={show} placement="top">
                {props => (
                  <Tooltip id="overlay-example" {...props}>
                    +51 935 859 529
                  </Tooltip>
                )}
              </Overlay>
            <div className="social_icons"><a href="https://twitter.com/KelvinArias21" target="_blank" rel="noopener noreferrer"><img src={tw}  alt="Twitter"/></a></div>
            <div className="social_icons"><a href="https://www.linkedin.com/in/kelvin-arias-602865156/" target="_blank" rel="noopener noreferrer"><img src={lk}  alt="Linked in"/></a></div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Information;

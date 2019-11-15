import React from 'react'
import './jobs.css';
import { animated , useSpring} from 'react-spring'
import Title from '../router/title'
import {Row,Col} from 'react-bootstrap'
import Jobsdeck from './cards'

// Start
import home2 from '../../utilities/img/Start/home.png'
import portfolio from '../../utilities/img/Start/portfolio.png'
import clie from '../../utilities/img/Start/Client.png'

// Intelix
import home4 from '../../utilities/img/intelix/home.jpg'
import about from '../../utilities/img/intelix/about.jpg'
import service from '../../utilities/img/intelix/services.jpg'
import conta from '../../utilities/img/intelix/Contact.jpg'

// GrupoIro
import home3 from '../../utilities/img/GrupoIro/Home.jpg'
import noso from '../../utilities/img/GrupoIro/Nosotros.png'
import traye from '../../utilities/img/GrupoIro/trayectoria.jpg'

// Social
import fb from '../../utilities/img/facebook.svg';
import ins from '../../utilities/img/instagram.svg';
import tw from '../../utilities/img/twitter.svg';
import lk from '../../utilities/img/linkedin.svg';

const start = [  
    home2,
    portfolio,
    clie
]

const intelix = [  
  home4, 
  about, 
  service,
  conta,
]

const grupoIro = [  
  home3, 
  noso, 
  traye
]

//Intelix 0
//Currencypay and gocurrency 1
//Cemc 2
const social = [  
  [
    {url:"https://www.facebook.com/IntelixWorld-1929588930612342/",img:fb},
    {url:"https://www.instagram.com/intelixworld/?hl=es-la",img:ins},
    {url:"https://twitter.com/intelixworld",img:tw},
    {url:"https://ve.linkedin.com/company/intelixca?trk=public_profile_position_image",img:lk}
  ],
  [ 
    {url:"https://www.facebook.com/startdesigngroup",img:fb},
    {url:"https://www.instagram.com/startdesigngroup/",img:ins},
    {url:"https://twitter.com/startdesign",img:tw}
  ],
]

const subtitle = "Algunos de mis trabajos.";
const title = "¿Que he creado?";
const text = "En mis 2 años desarrollando cosas geniales con estas tecnologías desde animaciones con Javascript, Css, Sass, hasta páginas web completas con php y Wordpress, también he aprendido a llevar un buen manejo del SEO y una buena arquitectura del codigo. Mis siguientes pasos van camino de aprender de una manera más profundas tecnologías más nuevas y demandadas como lo son React.js y Node.";

const descri = [  
  {title1:"Herramientas: ",li1:"Wordpress, Javascript, php, Sass, Css, Bootstrap, Jquery, HTML, Photoshop",title2:"Información: ",li2:"Empresa de desarrollo web",title3:"Trabajos Realizados: ",li3:"Maquetados",title4:"Páginas creadas: ",li4:"+25"},
  {title1:"Herramientas: ",li1:"Laravel, php, SEO",title2:"Información: ",li2:"Empresa de desarrollo de software",title3:"Trabajo Realizado: ",li3:"SEO y Tradución de idioma.",title4:"Mejora: ",li4:"del 10% al 95% basado en google speed"},
  {title1:"Herramientas: ",li1:"Laravel, php, SEO",title2:"Información: ",li2:"GrupoIro Cliente de Intelix Synergy",title3:"Trabajo Realizado: ",li3:"Maquetación, SEO",title4:"Páginas creadas: ",li4:"1 (Landing Page)"}
]

const Jobs = () => {
  const fadeO = useSpring({opacity:1 , from:{opacity:0}, duration:1000, config: { duration: 500 }})
  return (
    <animated.div style={fadeO} className="col-lg-8 mx-auto will-change">
        <Title subtitle={subtitle} title={title} text={text} />
        <Row>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={social[1]} data={start} url={"http://startdesigngroup.com/"} name={"Start Design Group"} description={descri[0]}></Jobsdeck>
          </Col>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={social[0]} data={intelix} url={"http://www.intelix.biz/site/public/"} name={"Intelix Synergy"} description={descri[1]}></Jobsdeck>
          </Col>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={"none"} data={grupoIro} url={"https://www.grupoiro.biz/"} name={"GrupoIro"} description={descri[2]}></Jobsdeck>
          </Col>
        </Row>
    </animated.div>
  );
}


export default Jobs;

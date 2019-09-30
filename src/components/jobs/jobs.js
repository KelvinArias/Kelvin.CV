import React from 'react'
import './jobs.css';
import { animated , useSpring} from 'react-spring'
import Title from '../router/title'
import {Row,Col} from 'react-bootstrap'
import Jobsdeck from './cards'

// Currency
import home  from '../../utilities/img/currency/home.jpg'
import account  from '../../utilities/img/currency/account.png'
import payments from '../../utilities/img/currency/payments.jpg'
import rates  from '../../utilities/img/currency/rates.png'
import testimonials  from '../../utilities/img/currency/testimonials.png'
import big  from '../../utilities/img/currency/big-payments.jpg'
import user  from '../../utilities/img/currency/user-guide.jpg'
import cu  from '../../utilities/img/currency/currency2019.jpg'
import faq  from '../../utilities/img/currency/faq.jpg'
import bi  from '../../utilities/img/currency/big-paymentss.png'
// Gocurrency
import home2 from '../../utilities/img/gocurrency/gocurrency.jpg'
import auction from '../../utilities/img/gocurrency/auction-time.jpg'
import air from '../../utilities/img/gocurrency/air.jpg'
// Cecm
import home3 from '../../utilities/img/cecm/home.jpg'
import news from '../../utilities/img/cecm/news.png'
import contact from '../../utilities/img/cecm/contact.jpg'
import re from '../../utilities/img/cecm/resources.jpg'
import te from '../../utilities/img/cecm/tecno.png'
import tes from '../../utilities/img/cecm/testimonials.jpg'
import tra from '../../utilities/img/cecm/transac.jpg'

// Intelix
import home4 from '../../utilities/img/intelix/home.jpg'
import about from '../../utilities/img/intelix/about.jpg'
import service from '../../utilities/img/intelix/services.jpg'
import conta from '../../utilities/img/intelix/Contact.jpg'

// Social
import fb from '../../utilities/img/facebook.svg';
import ins from '../../utilities/img/instagram.svg';
import tw from '../../utilities/img/twitter.svg';
import lk from '../../utilities/img/linkedin.svg';
import you from '../../utilities/img/youtube.svg';

const currency = [  
    home,
    account,
    payments,
    rates,
    testimonials,
    big,
    user,
    cu,
    faq,
    bi
]

const gocurrency = [  
  home2,
  auction,
  air
]

const cemc = [  
  home3, 
  news, 
  contact,
  re,
  te, 
  tes, 
  tra,
]

const intelix = [  
  home4, 
  about, 
  service,
  conta,
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
   
    {url:"https://www.facebook.com/gocurrency",img:fb},
    {url:"https://www.instagram.com/currencycareers/",img:ins},
    {url:"https://twitter.com/gocurrency",img:tw}
  ],
  [
    {url:"https://www.youtube.com/channel/UCR29qLJhgYE6h_Yz7WIXq_g",img:you},
    {url:"https://twitter.com/CEMC_Council",img:tw},
    {url:"https://www.linkedin.com/company/18221762/",img:lk}
  ]
]

const subtitle = "Algunos de mis trabajos.";
const title = "¿Que he creado?";
const text = "En mis 2 años desarrollando cosas geniales con estas tecnologías desde animaciones con Javascript, Css, Sass, hasta páginas web completas con php y Wordpress, también he aprendido a llevar un buen manejo del SEO y una buena arquitectura del codigo. Mis siguientes pasos van camino de aprender de una manera más profundas tecnologías más nuevas y demandadas como lo son React.js y Node.";

const descri = [  
  {title1:"Herramientas: ",li1:"Wordpress, Javascript, php, Sass, Css, Bootstrap, Jquery, HTML, Photoshop",title2:"Información: ",li2:"Página de transacciones mercantiles y plataforma de pago",title3:"Trabajo Realizado: ",li3:"Maquetación",title4:"Páginas creadas: ",li4:"+15"},
  {title1:"Herramientas: ",li1:"Wordpress, Javascript, php, Sass, Css, Bootstrap, Jquery, HTML, Photoshop",title2:"Información: ",li2:"Página promocional para ventas de boletos a charlas empresariales",title3:"Trabajo Realizado: ",li3:"Maquetación",title4:"Páginas creadas: ",li4:"+10"},
  {title1:"Herramientas: ",li1:"Laravel, php, SEO",title2:"Información: ",li2:"Pagina principal de IntelixWord compañia que ofrece servicios tecnologicos",title3:"Trabajo Realizado: ",li3:"SEO y Tradución de idioma.",title4:"Mejora: ",li4:"del 10% al 95% basado en google speed"},
  {title1:"Herramientas: ",li1:"Wordpress, Javascript, php, Sass, Css, Bootstrap, Jquery, HTML, Photoshop",title2:"Información: ",li2:"Pagina principal de Currency (engloba: Currencypay, Cemc y Express Finance)",title3:"Trabajo Realizado: ",li3:"Maquetación",title4:"Páginas creadas: ",li4:"+3"}
]

const Jobs = () => {
  const fadeO = useSpring({opacity:1 , from:{opacity:0}, duration:1000, config: { duration: 500 }})
  return (
    <animated.div style={fadeO} className="col-lg-8 will-change">
        <Title subtitle={subtitle} title={title} text={text} />
        <Row>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={social[1]} data={currency} name={"CurrencyPay"} description={descri[0]}></Jobsdeck>
          </Col>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={social[2]} data={cemc} name={"CEMC"} description={descri[1]}></Jobsdeck>
          </Col>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={social[0]} data={intelix} name={"Intelix Synergy"} description={descri[2]}></Jobsdeck>
          </Col>
          <Col md={6} className="cont mb-5">
            <Jobsdeck social={social[1]} data={gocurrency} name={"Gocurrency"} description={descri[3]}></Jobsdeck>
          </Col>
        </Row>
    </animated.div>
  );
}


export default Jobs;

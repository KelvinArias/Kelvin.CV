import React from 'react';
import './about.css';
// import Habilities from './habilities';
import Information from '../information/information';
import Title from '../router/title';
import { useSpring,animated } from 'react-spring';
import { Row } from 'react-bootstrap';




const subtitle = "Un poco de contexto";
const title = "¿Quién soy?";
const text = "Soy un joven venezolano de 22 años en busca de un empleo en el área de desarrollo web, cuento con un 1 año y 2 meses de experiencia laboral y con aproximadamente 2 años de experiencia en el uso de herramientas de desarrollo web. No obstante, me he enfocado mucho más en el área de Front-end pero siempre manteniendo el interés en el área del Back-end pudiendo así desarrollar una página web de principio a fin, ya sea con herramientas como Wordpress, Laravel, solo PHP o incluso con tecnologías más nuevas como React.js y Node.js pero a menor escala como lo es este template.";


const About = () => {
  const fadeO = useSpring({opacity:1, from:{opacity:0,}})
  return (
    <animated.div className="col-lg-12" style={fadeO}>
      <Row>
        <Information/>
        <animated.div className="col-lg-8 mx-auto" style={fadeO}>
          <Title subtitle={subtitle} title={title} text={text}/>
          {/* <Habilities/> */}
        </animated.div > 
      </Row>   
    </animated.div >
  );
};

export default About;

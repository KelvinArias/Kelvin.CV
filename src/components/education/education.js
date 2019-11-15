import React from 'react';
import './education.css';
import Title from '../router/title'
import ti from '../../utilities/img/diploma.svg'
import go from '../../utilities/img/mortarboard.svg'
import {useSpring, animated} from 'react-spring'

const subtitle = "Estudios Realizados";
const title = "¿Dónde me forme?";
const text = "Realice mis estudios universitarios en el C.U.A.M en la carrera de Informatica con una duración de 3 años, la cual formo en mí las bases del conocimiento en programación y desarrollo web. También tome como parte de mí interés hacia la computación un curso de 3 meses en la Academia Americana los cuales son avalados internacionalmente, junto con ese curso realicé uno de mayor duración 6 meses en electrónica.";

const study = [  
  {img:go,title:"T.S.U en Informatica",subtitle:"Universidad: Colegio Universitario de Administración y Mercadeo"},
  {img:ti,title:"Curso en Computación",subtitle:"Instituto: Academia Americana"},
  {img:ti,title:"Curso en Electrónica",subtitle:"Instituto: Academia Americana"}
]

function Education() {
  const fadeO = useSpring({opacity:1, from:{opacity:0}, duration:1000, config: { duration: 500 }})
  return (
    <animated.div style={fadeO} className="col-lg-8">
      <Title subtitle={subtitle} title={title} text={text}></Title>
      <Studies data={study}></Studies>
    </animated.div>
  );
}

const Studies = props => {
  const socials = props.data.map(
    (element,i) => <Study rut={element} key={i} />
  );
  return(
    <div className="con_study">
      {socials}
    </div>
  )
}

const Study = props => {
  return(
    <div className="box_study d-flex mb-5">
      <div className="img_study">
        <img src={props.rut.img} alt="study"></img>
      </div>
      <div className=" ml-3 info_study">
        <div className="tit_study">
          <h3>{props.rut.title}</h3>
        </div>
        <div className="sub_study">
          <p>{props.rut.subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Education;

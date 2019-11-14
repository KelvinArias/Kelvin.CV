import React from 'react';
import './skills.css';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Title from '../router/title';
import {useSpring, animated} from 'react-spring'
// img 
import boo from '../../utilities/img/skills/Boostrap_logo.svg'
import css from '../../utilities/img/skills/CSS.3.svg'
import git from '../../utilities/img/skills/github.svg'
import htm from '../../utilities/img/skills/html.png'
import jav from '../../utilities/img/skills/JavaScript.png'
import jqu from '../../utilities/img/skills/jquery.png'
import jso from '../../utilities/img/skills/JSON.png'
import lar from '../../utilities/img/skills/laravel.svg'
import mat from '../../utilities/img/skills/materialize.svg'
import mys from '../../utilities/img/skills/mysql.svg'
import php from '../../utilities/img/skills/PHP.png'
import sas from '../../utilities/img/skills/sass-1.svg'
import wor from '../../utilities/img/skills/Wordpress.svg'
import rea from '../../utilities/img/skills/react.svg'
import noe from '../../utilities/img/skills/nodejs.png'

const data_skills = [
  {img:jav,habilities:"Javascript",text:"90 %",pl:10},
  {img:htm,habilities:"HTML",text:"95 %",pl:5},
  {img:css,habilities:"CSS",text:"95 %",pl:5},
  {img:boo,habilities:"Bootstrap",text:"90 %",pl:10},
  {img:jqu,habilities:"Jquery",text:"90 %",pl:10},
  {img:mat,habilities:"Materialize",text:"80 %",pl:20},
  {img:sas,habilities:"SASS",text:"60 %",pl:40},
  {img:git,habilities:"Gitgub",text:"40 %",pl:60},
  {img:wor,habilities:"WordPress",text:"40 %",pl:60},
  {img:php,habilities:"PHP",text:"40 %",pl:60},
  {img:rea,habilities:"React.js",text:"35 %",pl:65},
  {img:noe,habilities:"Node.js",text:"35 %",pl:65},
  {img:jso,habilities:"Json",text:"30 %",pl:70},
  {img:mys,habilities:"Mysql",text:"20 %",pl:80},
  {img:lar,habilities:"Laravel",text:"20 %",pl:80}
];

const subtitle = "Tecnologias aprendidas";
const title = "¿Que he aprendido?";
const text = "Mis habilidades en estas tecnologias han sido aprendidas tanto en horas laborales con experiencias del día ha día en el trabajo como por hobby motivado por las ganas de aprender cada vez más el desarrollo web, esta pasión me ha llevado a adentrarme en diferentes variantes de la programación como lo son el Back-end y el SEO ya que me considero un desarrollador Front-end pero siempre sin limitarme a aprender estas diferentes tecnologias.";


const Skills = () => {
  const fadeO = useSpring({opacity:1, from:{opacity:0}, duration:1000, config: { duration: 500 }})
  return (
    <animated.div style={fadeO} className="col-lg-8">
        <Title subtitle={subtitle} title={title} text={text} />
        <p>Los siguientes porcentajes se basan en horas trabajadas con cada tecnologia:</p>
        <Cont data={data_skills} />
    </animated.div>
  );
}

const Cont = props => {
    const map_skills = props.data.map(
      (element,i) => <Know info={element} key={i} />
    );
  return(
    <Row className="mt-5">
      {map_skills}
    </Row>
  );
}

const Know = props => {
  const change = useSpring({ x:props.info.pl, from: { x:100 }, delay:500 });
  return (
    <Col xl={4} lg={6} className="pb_col mb-4">
      <div className="con_img"><img src={props.info.img} alt="Logo"></img></div>
      <div className="pb_item pb-3">
        <div className="box_description">
          <p className="progressbar-text pb-0 mb-0">{props.info.habilities}</p>
          <div className="progressbar-text">{props.info.text}</div>
        </div>
        <div className="skill_bars" >
          <animated.svg viewBox="0 0 100 1" preserveAspectRatio="none" strokeDashoffset={change.x} className="svg_skill"><defs><linearGradient id="gradient0" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="20%" stopColor="#367FBF"></stop><stop offset="50%" stopColor="#367FBF"></stop>
              </linearGradient></defs><path d="M 0,0.5 L 100,0.5" stroke="#ffffff" strokeWidth="1" fillOpacity="0"></path>
              <path d="M 0,0.5 L 100,0.5" stroke="url(#gradient0)" strokeWidth="1"  className="porcent_svg" fillOpacity="0"></path>
            </animated.svg>
        </div>
      </div>
    </Col>
  );
} 

export default Skills;

import React from 'react';
import './about.css';
import lo from '../../utilities/img/load1.svg';
import loa from '../../utilities/img/load2.svg';
import load from '../../utilities/img/load3.svg';
import loade from '../../utilities/img/load4.svg';
import {useSpring, animated} from 'react-spring'

const data_loader = [
    {percent:0.50,progress:"68%",loader:loa,alt:"loader2",title:"Autogestión",subtitle:"Raramente llega tarde y sule tener tiempo suficiente para terminar sus tareas",stroke:80.32},
    {percent:0.85,progress:"50%",loader:load,alt:"loader3",title:"Liderazgo",subtitle:"En desiciones difíciles, tiende a dejar que otros encuentren una alternativa que le convenza.",stroke:125.5},
    {percent:0.35,progress:"61%",loader:loade,alt:"loader4",title:"Motivación",subtitle:"Tiende a no darse por vencido y prefiere retos difíciles con grandes recompensas",stroke:97.89},
    {percent:0.50,progress:"50%",loader:lo,alt:"loader1",title:"Responsabilidad",subtitle:"Puede apurar los plazos de entrega",stroke:125.5}
]

const Loader = props => {
    const change = useSpring({ x:props.loads.stroke, from: { x:251 }, delay:500 });
    return (
        <div className="loader_container col-xl-3 col-sm-6 col-12">
            <div className="loader" data-perc={props.loads.percent}>
                <svg viewBox="0 0 100 100">
                    <path d="M 50,50 m 0,-40 a 40,40 0 1 1 0,80 a 40,40 0 1 1 0,-80" stroke="#e5e6e8" strokeWidth="20" fillOpacity="0"></path>
                    <animated.path strokeDashoffset={change.x} d="M 50,50 m 0,-40 a 40,40 0 1 1 0,80 a 40,40 0 1 1 0,-80" stroke="#367FBF" strokeWidth="1" fillOpacity="0"></animated.path>
                </svg>
                <div className="progressbar-text">{props.loads.progress}</div>
            </div>
            <div className="mt-3 text-center">
                <div className="loader_title mb-3">{props.loads.title}</div>
                <div className="loader_subtitle">{props.loads.subtitle}</div>
            </div>
        </div>
    );
}

const Loaders = props =>{ 
    const loaders = props.lods.map((loads,i) =>  <Loader loads={loads} key={i}/>);
    return(
        <div className="loaders row clearfix mt-5">
            {loaders}
        </div>
    )
}

const Habilities = () => {
  return (
        <Loaders lods={data_loader} />
  );
};

export default Habilities;
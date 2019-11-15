import React, {useRef} from 'react'
import './jobs.css';
import clamp from 'lodash-es/clamp'
import { useSprings, animated} from 'react-spring'
import { useDrag } from 'react-use-gesture'

const Viewpager = props => {
    const index = useRef(0)
    const [prop, set] = useSprings(props.img.length, i => ({
      x: i * 300,
      scale: 1,
      display: 'block'
    }))
    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (down && distance > 300 / 2)
        cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, props.img.length - 1)))
      set(i => {
        if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
        const x = (i - index.current) * 300 + (down ? mx : 0)
        const scale = down ? 1 - distance / 300 / 2 : 1
        return { x, scale, display: 'block' }
      })
    })
    return prop.map(({ x, display, scale }, i) => (
      <animated.div {...bind()} key={i} style={{ display, x, transform: x.interpolate(x => `translate3d(${x}px,0,0)`), }}>
        <animated.div style={{ transform: scale.interpolate(s => `scale(${s})`) , backgroundImage: `url(${props.img[i]})` }} />
      </animated.div>
    ))
}

const Tool = props => {
    return(
      <a href={props.rut.url} className="mr-3">
        <img src={props.rut.img} alt="social"/>
      </a>
    )
}
  
const Tools = props => {
    let socials;
    try {
      socials = props.data.map(
        (element,i) => <Tool rut={element} key={i} />
      );
    }
    catch(error) {
      socials = <p style={{color:"#000"}}>Sin sociales</p>
    }
    return(
      <div className="tools d-flex align-items-center justify-content-center">
        {socials}
      </div>
    )
}
  
class Jobsdeck extends React.Component {
      
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    render(){
      return(
        <div className="content-card">
          <div id="contentP" className="mt-3">
            <Viewpager img={this.props.data} />
          </div>
          <div className={this.state.active ? "viewPager open" :"viewPager"}>
            <p ><a className="text-white" href={this.props.url}>{this.props.name}</a></p>
            <div onClick={() => this.setState({active: !this.state.active})} className={this.state.active ? "showMore open" :"showMore"}>
              <span></span>
              <span></span>  
              <span></span>
            </div>
            <div className={this.state.active ? "more-info open" : "more-info"}>
              <div className="infoCard">
                <ul>
                  <li><span>{this.props.description.title1}</span>{this.props.description.li1}</li>
                  <li><span>{this.props.description.title2}</span>{this.props.description.li2}</li>
                  <li><span>{this.props.description.title3}</span>{this.props.description.li3}</li>
                  <li><span>{this.props.description.title4}</span>{this.props.description.li4}</li>
                </ul>
              </div>
              <Tools data={this.props.social}/>
            </div>
          </div>
        </div>
      )
    }
}
  

export default Jobsdeck;
import React, {lazy, Suspense} from 'react';
import About from '../about/about';
import Skills from '../skills/skills';
import Education from '../education/education';
import Information from '../information/information';
import '../nav/nav.css';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import Footer from '../footer/footer';
import git from '../../utilities/img/skills/github.svg';
const Jobs = lazy(() => import ('../jobs/jobs'));


class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            component: <Jobs />,
            on: "on",
            show: "true",

        }
    }
    changeComponent = (param) => {//esta es la funcion donde cambio de componente a mostrar
        this.setState({
            component: param,
            on: "off"
        });
    };
    showMenu = () => {
        let y = this.state.show === "true" ? "false" : "true";
        this.setState({
            show: y
        });
    };

    render() {
        return (
                <main>
                    <a href="https://github.com/KelvinxD21/Kelvin.CV" className="con_git">
                        <img src={git} className="git" alt="Github"/>
                        <p>Descargar vía Github</p>
                    </a>
                    <Container className="con-nav">
                        <Navbar className="mb-3 pl-0" expand="lg">
                            <Navbar.Brand href="#home">Kelvin.CV</Navbar.Brand>
                            <div className="back"></div>
                            <Navbar.Toggle onClick={() => this.showMenu()} aria-controls="basic-navbar-nav" >
                                <div className={this.state.show}>
                                    <span></span>
                                    <span></span>  
                                    <span></span>
                                </div>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#opcion 1" onClick={() => this.changeComponent(<About />)} key="1">Sobre mi</Nav.Link>
                                    <Nav.Link href="#opcion 2" className={this.state.on} onClick={() => this.changeComponent(<Jobs />)} key="2">Portafolio</Nav.Link>
                                    <Nav.Link href="#opcion 3" onClick={() => this.changeComponent(<Skills />)} key="3">Habilidades</Nav.Link>
                                    <Nav.Link href="#opcion 4" onClick={() => this.changeComponent(<Education />)} key="4">Estudios</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                    <Container className={this.state.show}>
                        <Row>
                            <Information />
                            <Suspense fallback={<div>Cargando...</div>}>
                                {this.state.component}
                            </Suspense>
                        </Row>
                    </Container>
                    <Footer show={this.state.show} />
                </main>
        );
    }
}

export default Main;
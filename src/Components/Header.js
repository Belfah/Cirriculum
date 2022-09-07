import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css'
import Col from "react-bootstrap/Col"
import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
        <div className="header-page">
            <header>
                <Container>
                    <Row>
                        <Col md={4}>
                            <NavLink to='/'>
                                <div className="taille_logo">
                                    <img alt="" className="logo" src="./1001563-Maki.jpg"></img>
                                </div>
                            </NavLink>
                        </Col>
                        <Col md={4}>
                            <div className="menu">
                                <NavLink to='/modele'>
                                    <li>Modèle</li>
                                </NavLink>
                                <NavLink to='/prix'>
                                    <li>Prix</li>
                                </NavLink>
                                <NavLink to='/facture'>
                                    <li>Facture</li>
                                </NavLink>
                            </div>
                        </Col>
                        <Col md={4} className='boutton'>
                            <NavLink to='/connexion'>
                                <Button>Connexion</Button>
                            </NavLink>
                            <NavLink to='/cv'>
                                <Button>Créer un CV</Button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}
export default Header;
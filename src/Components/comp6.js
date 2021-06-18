import React, { Component } from 'react'
//import { Container } from 'react-bootstrap'
import './Style.css';
import { Container, Row, Col, } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';
export class comp6 extends Component {
    render() {
        return (
            <div className='abc1 bg-secondary text-white'>

                <Container fluid >
                    <Row >

                        <Col>
                            <div className='t1'>
                                < img src={process.env.PUBLIC_URL + "/images/globe-logo.svg"} alt="me" />
                                <span>LOGO</span>
                            </div>
                            <div className="pl-5 text-white ">
                                For Youngsters,
                           </div>


                        </Col>
                        <Col>
                            <div className="  col-sm pt-5 ">
                                <h1>How Can We Help You?</h1>
                            </div>

                        </Col>
                        <Col> <div className="col-sm pt-5">
                            <ul className="footer-links">

                                <Nav>

                                    <Nav.Item>
                                        <Nav.Link to="/" className="text-white">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-white">Explore</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-white">Aboutus</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-white">Contactus</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </ul>

                            <div className="py-5">
                                <span >
                                    < img src={process.env.PUBLIC_URL + "/images/instagram-icon.png"} className="w-10 pl-3" alt="me" />
                                    < img src={process.env.PUBLIC_URL + "/images/circlefacebook-icon.png"} className="w-10 pl-3 " alt="me" />
                                    < img src={process.env.PUBLIC_URL + "/images/whatsApp-icon.png"} className="w-10 pl-3 " alt="me" />
                                </span>
                            </div>


                        </div></Col>
                    </Row>
                    <div>
                        <p className="m-0 text-center">Copyright &copy; Your Website 2020</p>
                    </div>
                </Container>

            </div >
        )
    }
}

export default comp6

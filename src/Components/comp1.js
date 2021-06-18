import React from 'react'
import './Style.css';
import { Container, Row, Col } from 'react-bootstrap';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
export default function comp1() {
    return (
        <div>
            <Container fluid='true' style={{ backgroundImage: `url(/images/banner-bg.svg)` }} >
                <Row >

                    <Col >


                        <Navbar expand="lg">
                            <Navbar.Brand href="#home">< img src={process.env.PUBLIC_URL + "/images/globe-logo.svg"} alt="me" />
                                <span style={{ color: '#F0F8FA' }}>LOGO</span></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                                    <Nav.Link href="#link" className="text-white">Explore</Nav.Link>
                                    <Nav.Link href="#link" className="text-white">Aboutus</Nav.Link>
                                    <Nav.Link href="#link" className="text-white">Contactus</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                                </Form>
                            </Navbar.Collapse>
                        </Navbar>

                    </Col>
                </Row>
                <Row >

                    <Col className="t text-white"> <h1>All your needs in one place</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquid, suscipit, rerum quos facilis repellat architecto commodi
                        officia atque nemo facere eum non illo voluptatem quae
            delectus odit vel itaque amet.</p>
                        <button type="button" className="btn btn-lg btn-primary">
                            Explore
          </button></Col>
                    <Col className="image-fluid">< img src={process.env.PUBLIC_URL + "/images/banner-illustration.svg"} alt="me" /></Col>
                    <Col>  <Navbar expand="lg t3">

                        <Nav className="mr-auto imgrot">
                            <Nav.Link href="#home" className="text-white ">Instagram</Nav.Link>
                            <Nav.Link href="#link" className="text-white">Facebook</Nav.Link>
                            <Nav.Link href="#link" className="text-white">twiter</Nav.Link>

                        </Nav>

                    </Navbar></Col>
                </Row>
            </Container>
        </div >
    )
}

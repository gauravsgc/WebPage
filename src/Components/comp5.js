import React, { Component } from 'react'
import './Style.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
export class comp5 extends Component {
    render() {
        return (
            <>
                <Container fluid className="abc" >
                    <Row>
                        <Col>

                            <h3 className="text-white">News Letter</h3>
                        </Col></Row>
                    <Row>
                        <Col sm={6}>


                            <p className="text-white">
                                Subscribe our news letter
                                Enter email to get fresh updates
                            </p>
                        </Col>
                        <Col sm={4} className="my-1" >

                            <form>
                                <Form.Group controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Enter email address" />


                                </Form.Group>
                            </form>

                        </Col>

                    </Row>
                </Container >


                <Container fluid className="bg" >
                    <Row>
                        <Col>
                            <h3 className="text-color">contact us</h3></Col>
                    </Row>
                    <Row><Col className="py-3" xs={6}>

                        <h3>Get in touch with us</h3>
                        <div className="new-line">Lorem ipsum dolor sit amet,</div>
                        <div className="new-line"> consectetur adipisicing elit.
                        Aliquid, suscipit, rerum quos facilis
                                       </div>
                        <div className="py-1">
                            <span >
                                < img src={process.env.PUBLIC_URL + "/images/instagram-icon.png"} className="w-10 pl-3" alt="me" />
                                < img src={process.env.PUBLIC_URL + "/images/circlefacebook-icon.png"} className="w-10 pl-3 " alt="me" />
                                < img src={process.env.PUBLIC_URL + "/images/whatsApp-icon.png"} className="w-10 pl-3 " alt="me" />
                            </span>
                        </div>
                    </Col>
                        <Col sm={4} className="my-1">
                            <Form>
                                <Form.Group controlId="formBasicEmail">

                                    <Form.Control type="text" placeholder="Enter your name" />


                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Enter email" />


                                </Form.Group>

                                <Form.Group controlId="">
                                    <Form.Control as="textarea" rows={3} placeholder="Message" />

                                </Form.Group>
                                <Button variant="secondary" type="submit">
                                    Send message
  </Button>
                            </Form>


                        </Col>
                    </Row>
                </Container >
            </>

        )
    }
}

export default comp5

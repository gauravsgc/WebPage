import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Style.css';
export class comp4 extends Component {
    render() {
        return (
            <div>

                <Container fluid>
                    <Row>
                        <Col className="col-sm pt-5 ">


                            <img src={process.env.PUBLIC_URL + "/images/boy-with-pencil-illustration.svg"} alt="me" />
                        </Col>
                        <Col className="col-sm pt-5 ">

                            <h3 >
                                Let's focus on your passion
                          </h3>


                            <div className="new-line"> Lorem ipusm sit amet,</div>
                            <div className="new-line">consectur adipiscing elit ur learn</div>


                            <Button size="xs" className="btn-primary" active>
                                GetStarted
  </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} ><h2 className="text-color">About Us</h2></Col>

                    </Row>
                    <Row>
                        <Col className=" col-md">



                            <div className="new-line"> Lorem ipusm sit amet,</div>
                            <div className="new-line">consectur adipiscing elit ur learn</div>
                            <Button size="lg" variant="secondary" active>
                                GetStarted
  </Button>
                        </Col>
                        <Col><img src={process.env.PUBLIC_URL + "/images/group of young business people-illustration.svg"} alt="me" /></Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default comp4

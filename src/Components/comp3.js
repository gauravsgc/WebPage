import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Style.css';
export class comp3 extends Component {
    render() {
        return (

            <Container fluid className="bg-comp3" >


                <h5>
                    How we help student to learn faster and achieve
                    <div className="new-line"> There goals</div>
                </h5>
                {/*<span className="dot"></span>
                    <span className="dot1"></span> */}

                <Row>

                    <Col>

                        <img className="image-fluid" src={process.env.PUBLIC_URL + "/images/right-icon.svg"} alt="me" />


                        <h3>free Courses</h3>
                        <div className="new-line"> Lorem ipusm sit amet,</div>
                        <div className="new-line">consectur adipiscing elit ur learn</div>

                    </Col>
                    <Col>
                        < img className="image-fluid" src={process.env.PUBLIC_URL + "/images/right-icon.svg"} alt="me" />
                        <h3>Job updates</h3>
                        <div className="new-line"> Lorem ipusm sit amet,</div>
                        <div className="new-line">consectur adipiscing elit ur learn</div>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/images/right-icon.svg"} alt="me" />
                        <h3>Blogs</h3>
                        <div className="new-line"> Lorem ipusm sit amet,</div>
                        <div className="new-line">consectur adipiscing elit ur learn</div>
                    </Col>
                </Row>


            </Container >

        )
    }
}

export default comp3

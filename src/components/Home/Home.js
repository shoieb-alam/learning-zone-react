import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* bannar part */}
            <div className="banner text-white text-center">
                <div className="bg-color">
                    <div className="text-border">
                        <h2 className="text-dec fs-3">Learning Zone</h2>
                    </div>
                    <div>
                        <h4 className="fs-2 my-4">First you Learn, then you remove the 'L'
                        </h4>
                        <p className="fs-5 my-4">An easy and organized way to explore the  world of coding through the window of our website
                        </p>

                        <Button variant="outline-success" size='lg' className="btn border-3 rounded-pill text-white my-4">GIVE US A SUGGESTION</Button>
                    </div>
                </div>
            </div>
            <div className="m-5 bg-light">
                <h1>Top Courses</h1>
                <Row xs={1} md={4} className="g-2">
                    <Col>
                        <div className='course text-center h-100 border border-dark py-3 m-3 rounded-3'>
                            <img className='w-25 h-25' src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} alt="" />
                            <div className=''>
                                <h4 className='my-3'>React </h4>
                                <p>Category: Web </p>
                                <p>Instructor: Dr. Angela Yu
                                </p>
                                <h5>Price: $79.99</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='course text-center h-100 border border-dark py-3 m-3 rounded-3'>
                            <img className='w-25 h-25' src={"https://cdn.worldvectorlogo.com/logos/python-5.svg"} alt="" />
                            <div className=''>
                                <h4 className='my-3'>Python Bootcamp</h4>
                                <p>Category: Programming Language</p>
                                <p>Instructor: Jose Portilla</p>
                                <h5>Price: $89.99</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='course text-center h-100 border border-dark py-3 m-3 rounded-3'>
                            <img className='w-25 h-25' src={"https://cdn.worldvectorlogo.com/logos/nodejs-2.svg"} alt="" />
                            <div className=''>
                                <h4 className='my-3'>Node </h4>
                                <p>Category: Web </p>
                                <p>Instructor: Anthony Alicea</p>
                                <h5>Price: $76.99</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='course text-center h-100 border border-dark py-3 m-3 rounded-3'>
                            <img className='w-25 h-25' src={"https://cdn.worldvectorlogo.com/logos/flutter.svg"} alt="" />
                            <div className=''>
                                <h4 className='my-3'>Flutter </h4>
                                <p>Category: App </p>
                                <p>Instructor: Maximilian Schwarzmüller</p>
                                <h5>Price: $79.99</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;
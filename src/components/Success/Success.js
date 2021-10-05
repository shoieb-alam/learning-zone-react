import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Success.css';

const Success = () => {
    return (
        // student review part 
        <div className="bg-light py-5">
            <Container>

                <h1 className="pb-5">What <span className="colored-text">Students</span> says</h1>

                <div className="bg-color p-5">

                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="w-25 mx-auto" src={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png"} />
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteLeft} />
                                            This is one of the good websites where a person can learn from any domain
                                            and any field. This is useful and beneficial for the both tutors and the students who are learning
                                            from it.
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteRight} />
                                        </p>
                                    </Card.Text>
                                    <Card.Footer>
                                        <h4>Abdur Rahman</h4>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="w-25 mx-auto" src={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"} />
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteLeft} />
                                            I come across this learning platform This course is good for the whom are
                                            entering in the programming, I will recommend for the those who are entering in programming.
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteRight} />
                                        </p>
                                    </Card.Text>
                                    <Card.Footer>
                                        <h4>Zakaria Foyzi</h4>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="w-25 mx-auto" src={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png"} />
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteLeft} />
                                            Learning Zone is an online learning platform. Students receive guidance from
                                            an experienced instructor and have lifetime access to any course. I recommend this site.
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteRight} />
                                        </p>
                                    </Card.Text>
                                    <Card.Footer>
                                        <h4>Sakib Hasan</h4>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="w-25 mx-auto" src={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png"} />
                                <Card.Body>
                                    <Card.Text>
                                        <p>
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteLeft} />
                                            Learning Zone is a great option for people who want to build or enhance
                                            skills. It
                                            has a variety of courses with multiple learning styles and provides lifetime access.
                                            <FontAwesomeIcon className="mx-2" icon={faQuoteRight} />
                                        </p>
                                    </Card.Text>
                                    <Card.Footer>
                                        <h4>Zara</h4>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Success;
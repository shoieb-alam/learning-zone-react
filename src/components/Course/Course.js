import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Container } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { name, img, category, price, instructor } = props.course;
    return (
        <div>

            {/* displaying course data  */}
            <Container className="my-3">
                <Col>

                    <Card style={{ height: "30rem" }} className="course py-3">

                        <Card.Img variant="top" className="w-50 m-auto h-75" src={img} />

                        <Card.Body className="">
                            <Card.Title className="fs-4">{name}</Card.Title>
                            <Card.Text>
                                <br />
                                <p><b>Category:</b>  {category} </p>
                                <p><b>Instructor:</b> {instructor}</p>
                            </Card.Text>

                            <div>
                                <h5>Price: ${price} </h5>
                                <Button variant="outline-success" className="my-1">
                                    <FontAwesomeIcon icon={faCartArrowDown} /> Add to Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default Course;
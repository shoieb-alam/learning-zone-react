import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {

    const [topCourses, setTopCourses] = useState([]);

    useEffect(() => {
        fetch('./topCourses.JSON')
            .then(res => res.json())
            .then(data => setTopCourses(data))
    }, [])

    return (
        <div>
            {/* bannar part */}
            <div className="banner text-white text-center">
                <div className="bg-color">
                    <div className="text-border">
                        <h2 className="fs-3 m-3 p-2">LEARNING ZONE</h2>
                    </div>
                    <div>
                        <h4 className="fs-2 my-4">First you Learn, then you remove the 'L'
                        </h4>
                        <p className="fs-5 my-4">An easy and organized way to explore the  world of coding through the window of our website
                        </p>

                        <Button variant="outline-success" size='lg' className="border-3 rounded-pill my-4">GIVE US A SUGGESTION</Button>
                    </div>
                </div>
            </div>

            {/* Top courses part */}
            <div>
                <Container>
                    <div className="my-5">
                        <h2>Top Courses</h2>
                    </div>

                    <div className="bg-light pb-5">
                        <Row xs={1} sm={2} md={2} lg={4}>
                            {
                                topCourses.map(course => <Course
                                    key={course.key}
                                    course={course}
                                ></Course>)
                            }
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;
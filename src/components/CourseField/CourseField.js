import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './CourseField.css'

const CourseField = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <Container>
            {/* courses part */}
            <div className="bg-dark p-3">
                <Row xs={1} sm={2} md={2} lg={3}>
                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default CourseField;
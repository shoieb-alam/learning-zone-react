import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
        <div className="container bg-dark">
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default CourseField;
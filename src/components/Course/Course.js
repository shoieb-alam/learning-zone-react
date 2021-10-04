import React from 'react';
import './Course.css';

const Course = (props) => {
    const { name, img, category, price, instructor } = props.course;
    return (
        <div className="container my-4">
            <div className='course text-center h-100 border border-dark py-3 m-3 rounded-3'>
                <img className='w-25 h-25' src={img} alt="" />
                <div className=''>
                    <h4 className='my-3'> {name} </h4>
                    <p>Category: {category} </p>
                    <p>Instructor: {instructor}</p>
                    <h5>Price: ${price} </h5>
                </div>
            </div>
        </div>
    );
};

export default Course;
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="py-3">
            <div className="container text-center">
                <h1>404</h1>
                <div className="bg-404"></div>
                <div className="text-404">
                    <h3>Look like you're lost</h3>
                    <h5>the page you are looking for not avaible!</h5>
                    <Link to="/home" className="px-3 py-2 my-4  btn-success link-404">Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
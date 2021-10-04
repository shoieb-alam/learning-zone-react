import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="banner text-white">
            {/* bannar part */}
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
        </div >
    );
};

export default Home;
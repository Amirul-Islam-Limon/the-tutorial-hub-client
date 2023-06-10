import React from 'react';
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='w-50 mx-auto'>
            <div className='text-center'>
                <img className='w-50' src={course.image} alt="" />
            </div>
            <div className='d-flex justify-content-between bg-dark text-white align-items-center px-3 my-2'>
                <h2>{course.name}</h2>
                <FaDownload />
            </div>
            <p>{course.description}</p>
            <div className='text-center mb-4 mt-2'>
                <Link to="/"><Button className='w-50' variant="primary">Proceed Checkout</Button>{' '}</Link>
            </div>

        </div>
    );
};

export default CourseDetails;
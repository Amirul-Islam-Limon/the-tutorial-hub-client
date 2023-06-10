import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    // console.log(course)
    return (
        <div className='col-md-4'>
            <img className='w-100' src={course.image} alt="" />
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <h5>Price: {course?.price}</h5>
            <div className='text-center mb-4 mt-2'>
                <Link to={`/course-details/${course._id}`}><Button className='w-100' variant="primary">Get premium access</Button>{' '}</Link>
            </div>
        </div>
    );
};

export default Course;
import React, { useEffect, useState } from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCategories from '../CourseCategories/CourseCategories';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:5000/allCourses")
        .then(res=> res.json())
        .then(data => setCourses(data));
    },[courses])
    // console.log(courses);
    return (
        <Container>
            <Row className='mt-4'>
                <Col md={3} className='course-categories'>
                    <CourseCategories></CourseCategories>
                </Col>
                <Col md={9}>
                    <h1 className='mt-2 pb-4 text-center'>Our All Awesome Courses</h1>
                    <div className='row'>
                        {
                            courses?.map(course=> <Course
                            key={course._id}
                            course={course}
                            ></Course>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCategories from '../CourseCategories/CourseCategories';
import { Link, useLoaderData} from 'react-router-dom';
import Course from '../Course/Course';

const CourseContainer = () => {
    const course = useLoaderData();
    return (
        <Container>
        <Row className='mt-4'>
            <Col md={3} className='course-categories'>
                <CourseCategories></CourseCategories>
            </Col>
            <Col md={9}>
                <h1 className='pt-3 pb-3 text-center'>Our Awesome Courses</h1>
                <div className='row'>
                    {
                        course?.map(course=> <Course
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

export default CourseContainer;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCategories = () => {
    const [categories, setCategories] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:5000/course-categories")
        .then(res=> res.json())
        .then(data=> setCategories(data));
    },[categories])

    return (
        <div>
            <h3 className='pt-3'>Course Category</h3>
                {
                    categories?.map(courseCategory=> <Link
                        key={courseCategory._id}
                        to={`/course/${courseCategory?.name}/${courseCategory?._id}`}>{courseCategory.name}</Link>)
                }
        </div>
    );
};

export default CourseCategories;
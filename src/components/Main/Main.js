import React from 'react';
import { useState } from 'react';
import data from '../../fakeData/data';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Main.css';

const Main = () => {
    const [courses, setCourses] = useState(data);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    console.log(courses);
    return (
        <div className="d-flex mt-5">
            <div className="course-container">
                {
                    courses.map(course => <Course course={course} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;
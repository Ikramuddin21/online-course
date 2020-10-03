import React from 'react';
import './Course.css';

const Course = (props) => {
    const {name, price, img} = props.course;
    return (
        <div className="course d-flex">
            <div>
                <img className="rounded" src={img} alt=""/>
            </div>
            <div className="course-info">
                <h4>{name}</h4>
                <br/>
                <h3>${price}</h3>
                <br/>
                <button 
                    className="main-button"
                    onClick={() => props.handleAddCourse(props.course)}
                    >Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;
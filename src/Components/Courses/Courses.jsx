import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToBookmarks}) => {
   const [courses, setCourses] = useState([])

   useEffect(() => {
    fetch("/courses.json")
    .then(res => res.json())
    .then(data => setCourses(data))
   }, [])
    return (
        <div>
            <h2 className="text-3xl font-bold">Course: {courses.length}</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                courses.map(course => <Course handleAddToBookmarks={handleAddToBookmarks} key={course.id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;
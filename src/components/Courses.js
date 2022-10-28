import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";



const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 pb-10">
        <h1 className="text-4xl font-bold py-5 text-center "> All category courses</h1>
      <div className="container mx-auto md:grid grid-cols-4 gap-5">
        <div className="text-center py-5 px-2 rounded-lg">
          <p className="text-2xl font-bold pb-5">Total Courses: {courses.length}</p>

          <ul className="space-y-3">
            {courses.map(course => <li className="btn rounded-lg w-full">
              <Link to={`/course/${course._id}`}>{course.categoryName}</Link>
            </li>)}

          </ul>
        </div>


       
        
        <div className="flex flex-wrap justify-center gap-5 col-span-3">

        {courses.map(course=>{
                return <Course course={course}></Course>
        })}
        

        </div>
        
      </div>
    </div>
  );
};

export default Courses;

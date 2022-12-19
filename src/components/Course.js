import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const Course = ({ course }) => {
  console.log(course);
  
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40" src={course.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">{course.categoryName}</h2>
          <p className="text-justify">{course.shortDes}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-red-700 text-white">
              <p>{course.hours} Hours</p>
            </div>
            <div className="badge badge-outline bg-emerald-500 text-white">
              <p>Price: {course.price}$</p>
            </div>
          </div>
          <Link className="btn btn-block my-5" to={`/course/${course._id}`}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;

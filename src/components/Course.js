import React from "react";


const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="h-40" src= {course.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
            {course.categoryName}
           
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <button className="btn btn-block my-5">Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Course;

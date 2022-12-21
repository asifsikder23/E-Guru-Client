import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCatregoryCard from "./CourseCatregoryCard";

const CourseCategory = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-asifsikder23.vercel.app/course')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setDetails(data);
          });
      }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center font-bold py-5">Discover Our Popular Courses</h1>
      <p className="text-center text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        {
            details.map(course => (
                <CourseCatregoryCard
                key={course._id}
                course={course}></CourseCatregoryCard>
            ))
        }
      </div>
     
    </div>
  );
};

export default CourseCategory;

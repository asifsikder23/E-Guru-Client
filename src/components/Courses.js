import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import './Courses.css';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
  return (
    <div>
        <h1 className="text-4xl font-bold py-5 text-center"> All category courses</h1>
      <div className="container mx-auto md:grid grid-cols-4 gap-5">
        <div className="border text-center py-5 px-2 rounded-lg">
          <ul className="space-y-3">
            <li className="btn rounded-lg w-full">
              <a href="#">Web Design & Development</a>
            </li>
            <li className="btn rounded-lg w-full">
              <a href="#">UI-UX Design</a>
            </li>
            <li className="btn rounded-lg w-full">
              <a href="#">Graphics Design</a>
            </li>
            <li className="btn rounded-lg w-full">
              <a href="#">Animation and VFX</a>
            </li>
            <li className="btn rounded-lg w-full">
              <a href="#">Digital Marketing</a>
            </li>
            <li className="btn rounded-lg w-full">
              <a href="#">Mobile App Development</a>
            </li>
          </ul>
        </div>


        <div className=" mx-auto flex flex-wrap gap-5 col-span-3 ">
        {courses.map(course=>{
                return <Course course={course}></Course>
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses;

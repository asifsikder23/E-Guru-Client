import React from "react";

const Courses = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold py-5 text-center"> All category courses</h1>
      <div className="container mx-auto grid grid-cols-4 gap-5">
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


        <div className="border col-span-3 flex gap-5">
        <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Go Premium</button>
                    </div>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

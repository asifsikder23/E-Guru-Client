import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Online learning takes advantage of technology to simulate or
              improve upon traditional methods of teaching.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className=" bg-slate-900  shadow lg:flex justify-center mt-5">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="pl-6">
            <h1 className="text-5xl font-bold">
              Explore The E-learning Institute
            </h1>
            <p className="py-6">
              e-Learning is not new: it has been around in some form or other
              for the past ten years. However, interest is rapidly growing. A
              quarter of all learning is expected to take place electronically
              in five years time. e-Learning involves the delivery and
              administration of learning opportunities and support via computer,
              networked and web-based technology, to help individual performance
              and development.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-bold py-5">Meet Our Successful Students</h1>
        <p className="text-center p-5">
        Your story is unique. That’s why we work closely with you to understand your particular interests, needs, and aspirations. Read on for stories of real students who know this first-hand, and get inspired to create your own student success story!
        </p>
      </div>

      <div>
      <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card w-96 glass">
                <figure><img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-96 glass">
                <figure><img src="https://media.istockphoto.com/photos/young-female-student-reading-book-or-document-outdoor-picture-id1332642788?k=20&m=1332642788&s=612x612&w=0&h=KbbzQnh1ViUuov5huvdhRw8OzHM4q73Y7Co1xZCuWww=" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-96 glass">
                <figure><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-96 glass">
                <figure><img src="https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI=" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-96 glass">
                <figure><img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
      </div>
        </div>
    );
};

export default Home;
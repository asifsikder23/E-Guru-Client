import React from "react";
import { Link } from "react-router-dom";

const CourseCatregoryCard = ({ course }) => {
  const { img, categoryName, shortDes, hours, price } = course;
  return (
    <div>
      <article class="flex bg-white transition hover:shadow-xl">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{price}$</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>{hours} Hours</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={img}
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                {categoryName}
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              {shortDes}
            </p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            
            <Link className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400" to={'/courses'}>
            See Details
          </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CourseCatregoryCard;

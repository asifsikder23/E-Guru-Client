import React from "react";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div>
      <article className="flex flex-col shadow my-4 justify-center">
        <a href="#" className="hover:opacity-75 flex justify-center">
          <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej-760x400.png" />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            FAQ
          </a>
          <p href="#" className="text-sm pb-8">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              Md. Asif Ullah Sikder
            </a>
            , Published on October 20th, 2020
          </p>
          <h1 className="text-2xl font-bold pb-3">
            Why FAQ Pages Are A Priority?
          </h1>
          <p className="pb-3">
            FAQ pages continue to be a priority area for SEO and digital
            marketing professionals. An FAQ page is one of the simplest ways to
            improve your site and help site visitors and users. Your FAQ section
            should be seen as a constantly expanding source of value provided to
            your audience.
          </p>

          <div className="sm:mx-40 shadow-lg ">
          <Fragment>
            <Accordion open={open === 1} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What this site about?
              </AccordionHeader>
              <AccordionBody>
                Learning Hero is E-learning platform.Where you can Learn
                Essential topics about web-development such as javasscript,
                HTML, CSS, React JS etc with an affortable price.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Why learn Web-development?
              </AccordionHeader>
              <AccordionBody>
                Nowa-days web development is a really good skill to have. A
                expirienced web developer earns so much money that you can
                think.Also you can use it for your personal work.Such as you
                have a buisness you can build a website for your business.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(3)} className="w-full">
                Why Learning Hero?
              </AccordionHeader>
              <AccordionBody>
                We are in this particular stage since 2015. We have came a long
                way. Our support session is top notch. Even if you complete the
                course on time and do good then we have a special team they will
                heplp you to find your dream job.
              </AccordionBody>
            </Accordion>
          </Fragment>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Faq;

import React from 'react';
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
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej-760x400.png"/>
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
            <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">FAQ</a>
            <p href="#" className="text-sm pb-8">
                By <a href="#" className="font-semibold hover:text-gray-800">Md. Asif Ullah Sikder</a>, Published on October 20th, 2020
            </p>
            <h1 className="text-2xl font-bold pb-3">Why FAQ Pages Are A Priority?</h1>
            <p className="pb-3">FAQ pages continue to be a priority area for SEO and digital marketing professionals. An FAQ page is one of the simplest ways to improve your site and help site visitors and users. Your FAQ section should be seen as a constantly expanding source of value provided to your audience.</p>

            <h1 className="text-2xl font-bold pb-3">How does node work?</h1>
            <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)} className='w-full'>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
        </div>
    </article>


        </div>
    );
};

export default Faq;
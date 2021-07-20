import React from "react";

import resume from "../../assets/resume.svg";
import resume2 from "../../assets/resume-2.svg";
import cv from "../../assets/cv.svg";

export default function Pricing() {
  return (
    <section className='container mx-auto mb-32'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-16'>
        Pricing
      </h2>
      <div className='flex flex-col md:flex-row justify-center mx-auto px-4 md:space-x-4'>
        <div className='flex flex-col border rounded-md shadow px-4 py-4 md:w-1/3 mb-4 hover:border-blue-400 transform md:hover:-translate-y-2 transition duration-700 ease-in-out'>
          <div className='mx-auto py-8'>
            <img src={resume} alt='resume' className='w-12' />
          </div>
          <h3 className='text-center text-3xl font-bold text-gray-700'>
            Standard
          </h3>
          <div className='text-green-500 text-center my-4 text-xl'>Free</div>
          <h4 className='text-center text-2xl font-semibold text-gray-700 pt-6 pb-4 border-b mx-auto'>
            What's in the box?
          </h4>
          <div className='px-8 text-center py-6'>
            <ul className='prose'>
              <li>5 Resume templates</li>
              <li>5 CV Templates</li>
              <li>Unlimited Resume/CV projects</li>
            </ul>
          </div>
          <div className='mx-auto flex flex-col justify-end h-full '>
            <button className='bg-blue-200 font-bold rounded-full py-4 px-8 shadow uppercase my-8 '>
              Get Started
            </button>
          </div>
        </div>
        <div className='flex flex-col border rounded-md shadow px-4 py-4 md:w-1/3 mb-4 hover:border-blue-400 transform md:hover:-translate-y-2 transition duration-700 ease-in-out'>
          <div className='mx-auto py-8'>
            <img src={cv} alt='resume2' className='w-12' />
          </div>
          <h3 className='text-center text-3xl font-bold text-gray-700 '>
            Premium
          </h3>

          <div className='text-center my-4 text-xl'>
            <span className='text-green-500'>Free</span> with{" "}
            <span className='text-green-500'>.edu</span> email
          </div>
          <h4 className='text-center text-2xl font-semibold text-gray-700 pt-6 pb-4 border-b mx-auto'>
            What's in the box?
          </h4>
          <div className='px-8 text-center py-6'>
            <ul className='prose'>
              <li>Access to all Resume templates</li>
              <li>Access to all CV Templates</li>
              <li>Unlimited Resume/CV projects</li>
            </ul>
          </div>
          <div className='mx-auto flex flex-col  justify-end  h-full'>
            <button className='bg-blue-200 font-bold rounded-full py-4 px-8 shadow uppercase my-8'>
              Get Started
            </button>
          </div>
        </div>
        <div className='flex flex-col border rounded-md shadow px-4 py-4 md:w-1/3 mb-4 hover:border-blue-400 transform md:hover:-translate-y-2 transition duration-700 ease-in-out'>
          <div className='mx-auto py-8'>
            <img src={resume2} alt='cv' className='w-12' />
          </div>
          <h3 className='text-center text-3xl font-bold text-gray-700'>
            Premium
          </h3>
          <div className=' text-center my-4 text-xl'>
            <span className=''>$2.99/mo</span>
            <span className='text-red-500'> without </span>
            .edu email{" "}
          </div>{" "}
          <h4 className='text-center text-2xl font-semibold text-gray-700 pt-6 pb-4 border-b mx-auto'>
            What's in the box?
          </h4>
          <div className='px-8 text-center py-6'>
            <ul className='prose'>
              <li>Access to all Resume templates</li>
              <li>Access to all CV Templates</li>
              <li>Unlimited Resume/CV projects</li>
            </ul>
          </div>
          <div className='mx-auto flex flex-col justify-end h-full '>
            <button className='bg-blue-200 font-bold rounded-full py-4 px-8 shadow uppercase my-8 '>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

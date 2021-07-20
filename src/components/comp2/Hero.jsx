import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className='py-40 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
        {/* <div className='py-40 bg-gradient-to-r from-sky-300 via-sky-400 to-sky-400'> */}
        <div className='container text-center mx-auto px-6'>
          <h1 className='text-5xl font-serif font-bold mb-2 text-white'>
            Simple and <span className=' underline'>free</span> resume builder!
          </h1>
          <h3 className='text-2xl mb-8 text-gray-100'>
            Create resume and CV in minutes.
          </h3>

          <Link to='/resume'>
            <button className='bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase my-8'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

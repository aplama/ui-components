import React, { Fragment } from "react";

import arrow from "../assets/arrow_forward_black_24dp.svg";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <Fragment>
      {/* <div className='flex flex-row items-center border w-6/8 md:w-6/12 h-10 my-8 rounded-lg focus-within:border-blue-200 focus-within:shadow outline-none pl-4 '>
        <span class='border-r pr-2'>
          <svg
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            viewBox='0 0 24 24'
            class='w-6 h-6'
          >
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </span>
        <input
          className='outline-none px-2 w-full h-full rounded-lg'
          type='search'
          placeholder={placeholder ? placeholder : "Search posts ..."}
          onChange={handleChange}
        />
      </div> */}
      <div class='my-8 pt-0 pr-2 flex flex-row items-center justify-center rounded-md w-9/12 md:w-6/12 border focus-within:shadow-md'>
        <span class='border-r px-2'>
          <svg
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            viewBox='0 0 24 24'
            className='w-6 h-6'
          >
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </span>
        <input
          type='text'
          placeholder='Search posts ...'
          class='px-3 py-3 text-md outline-none rounded-md focus:ring-transparent focus:outline-none w-full'
        />
        <span className='flex flex-row items-center rounded-full '>
          <button className=' w-10 h-10 outline-none focus:outline-none border-0 rounded-lg p-2 active:bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 transition active:duration-1000 ease-in'>
            <img src={arrow} alt='Search' className=' opacity-30' />
          </button>
        </span>
      </div>
    </Fragment>
  );
};

export default SearchBox;

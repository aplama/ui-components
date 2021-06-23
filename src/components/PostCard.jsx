import React from "react";
import tick from "../assets/tick.svg";

export const PostCard = (props) => {
  const image = ["nature,architecture,sea"];
  return (
    <div className='flex flex-col bg-gray-50 rounded-md shadow-md mx-4 my-4 md:w-1/3'>
      <div className='flex flex-col items-center px-2 md:w-11/12 mx-auto'>
        <div className='-mt-2 md:-mt-4  rounded-md shadow-lg'>
          <img
            className='rounded-md shadow-lg'
            src={`https://source.unsplash.com/1600x900/?${image}`}
            alt=''
          />
        </div>
      </div>
      <div className=' px-2 md:w-11/12 mx-auto'>
        <div>
          <h1 className='text-lg md:text-xl px-2 md:pl-5 pt-4 pb-2 font-sans font-medium leading-5'>
            How to style with Tailwind CSS and more
          </h1>
        </div>
        <div>
          <div className='flex flex-row leading-5 px-2 md:w-11/12 py-2 '>
            <img
              className='h-10 w-10 rounded-full ring-2 ring-white mr-2'
              src={`https://source.unsplash.com/1600x1600/?person`}
              alt='profile pic'
            />
            <div className='flex flex-col mt-2'>
              <div className='flex flex-row items-center '>
                <p className=' font-medium'>Username</p>

                <img className='h-2 w-2 mx-2' src={tick} alt='pro' />
              </div>
              <p className='font-extralight  text-xs'>Posted 1/2/2021</p>
            </div>
          </div>
        </div>
        <div>
          <p className='px-2 md:px-5 py-2 text-gray-600 text-sm font-light leading-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            enim fugit ex illum similique quidem ea quo et, officia, assumenda
            eum temporibus laborum aut eligendi perferendis libero fuga suscipit
            saepe.
          </p>
        </div>
        <div className='py-4 flex flex-row justify-end'>
          <button className=' mx-2  text-blue-700  hover:text-blue-800  font-light leading-5'>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

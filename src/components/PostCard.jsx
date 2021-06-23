import React from "react";

export const PostCard = (props) => {
  const image = ["nature,architecture,sea"];
  return (
    <div className='flex flex-col bg-gray-50 rounded-md shadow-md md:w-1/3'>
      <div className='flex flex-col items-center px-2 md:w-11/12 mx-auto'>
        <div className='-mt-2 md:-mt-4  rounded-md shadow-lg'>
          <img
            className='rounded-md shadow-lg'
            src={`https://source.unsplash.com/1600x900/?${image}`}
            alt=''
          />
        </div>
      </div>
      <div className='divide-y px-2 md:w-11/12 mx-auto'>
        <h1 className='text-lg md:text-xl px-2 md:pl-5 pt-4 pb-2 font-sans font-medium leading-5'>
          How to style with Tailwind CSS and more
        </h1>

        <p className='px-2 md:px-5 pt-4 text-gray-600 text-sm font-light leading-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          enim fugit ex illum similique quidem ea quo et, officia, assumenda eum
          temporibus laborum aut eligendi perferendis libero fuga suscipit
          saepe.
        </p>
      </div>
      <div className='py-4 flex flex-row justify-end'>
        <button className=' mx-6  text-blue-700  hover:text-blue-800  font-light leading-5'>
          Read more
        </button>
      </div>
    </div>
  );
};

import React from "react";

import user from "../../assets/user.svg";

export default function ResumeTemplate() {
  return (
    <div className='flex flex-col h-full w-full prose'>
      <div className='flex flex-col p-4 bg-blue-900'>
        <h1 className=' text-white font-semibold font-serif'>First Last</h1>
        <div className='text-xs text-white'>Occupation ahsdgfhgasdf</div>
      </div>

      <div className='flex flex-row h-full'>
        {/* left side */}
        <div className='flex flex-col w-4/12 bg-gray-50 text-xs border-r px-2'>
          <div className='flex flex-row items-center border-b border-t p-2'>
            <img src={user} className='w-3 mr-2' alt='user' />
            <div className='text-sm font-semibold'>Personal</div>
          </div>
          {/* address */}
          <div className='pt-2'>
            <div className='text-xs text-gray-800 leading-none'>
              123 Fort Lee Rd, Fort Lee, NJ 08002
            </div>
            <div className='text-xs text-gray-800'></div>
          </div>
          {/* email */}
          <div className='text-xs w-full text-gray-800 pt-2 flex-wrap break-words leading-none'>
            someemaiasdfl@gmail.com
          </div>
          <div className='text-xs text-gray-800 pt-2'>(650) 111-4343</div>
        </div>
        <div className='w-8/12 bg-gray-50'>
          <div className='p-2 text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            placeat repudiandae nemo impedit omnis laboriosam maxime ex maiores
            praesentium. Assumenda quo voluptas minima ea vero, ullam maxime
            sequi recusandae corrupti!
          </div>
        </div>
      </div>
    </div>
  );
}

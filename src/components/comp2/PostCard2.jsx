import React from "react";
import { Link } from "react-router-dom";
import Username from "./Username";

export default function PostCard2({ title, body, user, image }) {
  return (
    <div className='flex flex-row w-full md:w-4/6 rounded-md py-4 px-2 my-4'>
      <div className='flex flex-col w-2/3 '>
        {/* <img src='https://picsum.photos/100' alt='random' /> */}

        <div className='flex flex-col'>
          <Link>
            <h1 className='hover:underline text-base md:text-2xl leading-tight font-serif font-bold mb-2 mr-2 capitalize'>
              {title}
            </h1>
          </Link>
          <p className='hidden md:flex text-trueGray-700 font-serif'>
            {body}...
          </p>
          <div className=' mt-1 md:mt-4 text-xs md:text-sm text-trueGray-700'>
            <Username user={user ? user : "Guest"} />
          </div>
          <div className='mt-1 text-xs text-trueGray-500'>Posted 1/2/2021</div>
          <div className='hidden md:flex flex-wrap pt-4 text-trueGray-500 text-xs md:text-sm mr-2 '>
            <div className='rounded-full border px-2 py-2 mr-2'>React</div>
            <div className='rounded-full border px-2 py-2 mr-2'>JavaScript</div>
            <div className='rounded-full border px-2 py-2 mr-2'>
              Programming
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/3 mt-0 h-full'>
        <img
          src={image ? image : "https://source.unsplash.com/random/240x180"}
          alt=''
          className=''
        />
      </div>
    </div>
  );
}

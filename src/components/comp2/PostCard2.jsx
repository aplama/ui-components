import React from "react";

export default function PostCard2({ title, body }) {
  return (
    <div className='flex flex-col shadow-md prose prose-sm border my-2 rounded-md py-4 px-6'>
      {/* <img src='https://picsum.photos/100' alt='random' /> */}

      <div className='flex flex-col px-2'>
        <h1 className=' hover:underline'>{title}</h1>
        <p>{body}</p>
        <div className='flex flex-row '>
          <div className='rounded-full border px-4 mr-2'>Tag</div>
          <div className='rounded-full border px-4 mr-2'>Tag</div>
          <div className='rounded-full border px-4 mr-2'>Tag</div>
        </div>
      </div>
    </div>
  );
}

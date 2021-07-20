import React from "react";
import { posts } from "../../data/posts";

import plus from "../../assets/plus.svg";
import loupe from "../../assets/loupe.svg";
import arrow from "../../assets/next.svg";

import PostCard2 from "../../components/comp2/PostCard2";
// import { PostCard } from "../../components/PostCard";

export default function Blog2() {
  return (
    <div>
      {/* <div className='container mx-auto text-center prose prose-2xl font-serif py-8 '>
        Blog
      </div> */}
      {/* {posts.map((post) => console.log(post))} */}
      <div className='container flex flex-col mx-auto pt-12 '>
        <div className='mx-auto flex flex-row border focus-within:border-blue-400'>
          <img src={loupe} alt='loupe' className='w-4 ml-2' />
          <input
            type='text'
            className='border-none'
            placeholder='Search posts'
          />
          <button className='outline-none focus:outline-none bg-gray-200 px-2 hover:bg-gray-300 shadow '>
            {/* <img src={arrow} alt='loupe' className='w-5 mx-2' /> */}
            Search
          </button>
        </div>
        <div className=' flex justify-end mb-8 pt-6'>
          <button className=' py-2 px-4 mr-2 md:mr-16 outline-none focus:outline-none flex flex-row items-center hover:underline'>
            <img src={plus} alt='add' className='w-6 mr-2' />
            Add Post
          </button>
        </div>
        <div className='flex flex-col items-center px-4'>
          {posts.map((post) => (
            <PostCard2
              title={post.title}
              body={post.body.substring(0, 60)}
              key={post.id}
              user={post.username}
            />
            // <PostCard title={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

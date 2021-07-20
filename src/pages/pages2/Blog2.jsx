import React from "react";
import { posts } from "../../data/posts";

import plus from "../../assets/plus.svg";
import PostCard2 from "../../components/comp2/PostCard2";
// import { PostCard } from "../../components/PostCard";

export default function Blog2() {
  return (
    <div>
      <div className='container mx-auto text-center prose prose-2xl font-serif py-8 '>
        Blog
      </div>
      {/* {posts.map((post) => console.log(post))} */}
      <div className='container flex flex-col mx-auto'>
        <div className='mx-auto'>
          <input type='text' placeholder='Search posts' />
        </div>
        <div className=' flex justify-end mb-8'>
          <button className=' py-2 px-4 mr-2 md:mr-16 outline-none focus:outline-none flex flex-row items-center hover:underline'>
            <img src={plus} alt='add' className='w-6 mr-2' />
            Add Post
          </button>
        </div>
        <div className='flex flex-col items-center px-4'>
          {posts.map((post) => (
            <PostCard2 title={post.title} body={post.body} key={post.id} />
            // <PostCard title={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

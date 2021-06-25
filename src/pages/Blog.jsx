import React from "react";
import { CardList } from "../components/CardList";
import SearchBox from "../components/SearchBox";

const Blog = () => {
  return (
    <div className='flex flex-col mx-auto'>
      <div className='flex flex-row justify-center pt-16'>
        <p className='text-2xl uppercase font-serif border-b'>blog</p>
      </div>

      <div className='flex flex-row justify-center'>
        <SearchBox />
      </div>
      <CardList />
    </div>
  );
};

export default Blog;

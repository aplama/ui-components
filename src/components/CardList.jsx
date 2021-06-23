import React, { useState } from "react";
// import { Card } from "../card/card.components";
// import "./card-list.styles.css";
import { PostCard } from "./PostCard";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const CardList = () => {
  const [posts, setPosts] = useState([]);

  const componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts({ posts }));
    return posts;
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {posts.map((post) => (
        <PostCard key={post.id} />
      ))}
    </div>
  );
};

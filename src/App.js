import React from "react";
import { PostCard } from "./components/PostCard";
import { CardList } from "./components/CardList";

function App() {
  return (
    <div className='md:px-4 md:py-4'>
      {/* <PostCard /> */}
      <CardList />
    </div>
  );
}

export default App;

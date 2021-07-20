import React from "react";

import userimg from "../../assets/user.svg";

export default function Username({ user }) {
  return (
    <div className='flex flex-row items-center space-x-2'>
      <img src={userimg} alt='user' className='w-4' />
      <div>{user}</div>
    </div>
  );
}

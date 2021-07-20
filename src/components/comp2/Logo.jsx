import React from "react";

import inteligence from "../../assets/intelligence.svg";

export default function Logo() {
  return (
    <div className='flex flex-row items-center'>
      <img src={inteligence} alt='logoimg' className='w-6 mr-2' />
      <div className='prose prose-2xl font-serif'>rezoome</div>
    </div>
  );
}

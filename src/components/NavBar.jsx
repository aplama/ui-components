import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className='bg-red-200 py-4 flex flex-row items-center justify-center'>
        <div className='px-4 items-start'>Logo</div>
        <div className='flex flex-row items-center space-x-4'>
          <Link to='/'>
            <p>Home</p>
          </Link>
          <Link to='/blog'>
            <p>Blog</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;

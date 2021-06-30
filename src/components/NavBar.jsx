import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className='bg-gray-200 py-4 flex flex-row items-center justify-center'>
        <div className='px-4 items-start'>Logo</div>
        <div className='flex flex-row items-center space-x-4'>
          <Link to='/'>
            <p>Home</p>
          </Link>
          <Link to='/blog'>
            <p>Blog</p>
          </Link>
          <Link to='/form'>
            <p>Form</p>
          </Link>
          <Link to='/components'>
            <p>Components</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;

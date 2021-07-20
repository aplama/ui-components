import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Nav() {
  return (
    <nav>
      <div className='container mx-auto px-6 py-2 flex justify-between items-center'>
        <Link to='/'>
          <Logo />
        </Link>

        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='hidden lg:inline-flex items-center'>
          <div className='lg:mx-16'>
            <ul className='flex'>
              <li>
                <Link
                  className='px-4 hover:underline hover:text-blue-500'
                  to='/resume'
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  className='px-4 hover:underline hover:text-blue-500'
                  to='/cv'
                >
                  CV
                </Link>
              </li>
              <li>
                <Link
                  className='px-4 hover:underline hover:text-blue-500'
                  to='/blog'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex lg:flex-row justify-between items-center'>
            <ul className='flex'>
              <li>
                <Link
                  className='px-2 text-lg font-semibold hover:underline hover:text-blue-500 '
                  to='/login'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className='px-2 text-lg font-semibold hover:underline hover:text-blue-500 '
                  to='/register'
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

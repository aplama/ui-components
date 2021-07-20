import React from "react";
import { Link } from "react-router-dom";

import fb from "../../assets/facebook.svg";
import ig from "../../assets/instagram.svg";
import ln from "../../assets/linkedin.svg";
import medium from "../../assets/medium.svg";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div>
      <footer className='bg-gray-100'>
        <div className=' flex flex-col md:flex-row container mx-auto px-6 pt-10 pb-6 '>
          <div className='w-1/2'>
            <div className='flex flex-col pl-0 lg:pl-32'>
              <Logo />
              <div className='flex flex-row pt-4 mb-8 items-center'>
                <a className='mr-4 w-12 md:w-8' href='https://facebook.com'>
                  <img src={fb} alt='facebook' />
                </a>
                <a className='mr-4 w-12 md:w-8' href='https://instagram.com'>
                  <img src={ig} alt='instagram' />
                </a>
                <a className='mr-4 w-12 md:w-8' href='https://linkedin.com'>
                  <img src={ln} alt='linkedin' />
                </a>
                <a className='mr-4 w-12 md:w-8 ' href='https://medium.com'>
                  <img src={medium} alt='medium' />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='flex flex-row '>
              <div className='w-full md:w-1/4 text-left'>
                <h5 className='uppercase mb-6 font-bold'>Links</h5>
                <ul className='mb-4'>
                  <li className='mt-2'>
                    <Link
                      to='/faq'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      FAQ
                    </Link>
                    {/* <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      FAQ
                    </a> */}
                  </li>
                  <li className='mt-2'>
                    <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      Help
                    </a>
                  </li>
                  <li className='mt-2'>
                    <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full md:w-1/4 text-left'>
                <h5 className='uppercase mb-6 font-bold'>Legal</h5>
                <ul className='mb-4'>
                  <li className='mt-2'>
                    <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      Terms
                    </a>
                  </li>
                  <li className='mt-2'>
                    <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className='w-full md:w-1/4 text-left'>
                <h5 className='uppercase mb-6 font-bold'>Company</h5>
                <ul className='mb-4'>
                  <li className='mt-2'>
                    <Link
                      to='/blog'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      Official Blog
                    </Link>
                  </li>
                  <li className='mt-2'>
                    <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      About Us
                    </a>
                  </li>
                  <li className='mt-2'>
                    <a
                      href='/'
                      className='hover:underline text-gray-600 hover:text-orange-500'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

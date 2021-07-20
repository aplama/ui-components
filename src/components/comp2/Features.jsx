import React from "react";

import resume from "../../assets/Resume-amico-2.svg";
import math from "../../assets/Mathematics-bro.svg";
import telework from "../../assets/Telework-rafiki.svg";

export default function Features() {
  return (
    <div>
      <section className='container mx-auto px-6 lg:px-32 p-10'>
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-8'>
          Features
        </h2>
        <div className='flex items-center flex-wrap mb-20'>
          <div className='w-full md:w-5/12 mx-auto'>
            <h4 className='text-3xl text-gray-800 font-bold mb-3'>
              Templates that will stand out
            </h4>
            <p className='text-gray-600 mb-8'>
              Choose one of many templates for your Resume and CV. Created by
              prfessional designers and approved by hiring managers.
            </p>
          </div>
          <div className='w-full md:w-5/12 mx-auto'>
            <img src={resume} alt='Monitoring' />
          </div>
        </div>

        <div className='flex items-center flex-wrap mb-20'>
          <div className='w-full md:w-5/12 mx-auto'>
            <img src={math} alt='Reporting' />
          </div>
          <div className='w-full md:w-5/12 mx-auto'>
            <h4 className='text-3xl text-gray-800 font-bold mb-3'>
              Skills suggestion
            </h4>
            <p className='text-gray-600 mb-8'>
              Use our skills suggestion tool to stand out amoung competion.
            </p>
          </div>
        </div>

        <div className='flex items-center flex-wrap mb-20'>
          <div className='w-full md:w-5/12 mx-auto'>
            <h4 className='text-3xl text-gray-800 font-bold mb-3'>
              Multiple documents
            </h4>
            <p className='text-gray-600 mb-8'>
              Create resumes and CVs for different positions and save them in
              your profile.
            </p>
          </div>
          <div className='w-full md:w-5/12 mx-auto'>
            <img src={telework} alt='Syncing' />
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { Fragment, useState } from "react";
import Button from "./Button";

const Form = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    const next = step + 1;
    setStep(next);
  };
  const previousStep = () => {
    const previous = step - 1;
    setStep(previous);
  };

  return (
    <Fragment>
      <div className=' hidden md:flex items-center justify-between w-11/12 md:w-3/5 py-4 px-3'>
        <h1 className='text-xl font-thin text-blue-800'>
          Some basic information to begin ...
        </h1>
        {/* <Button color={"bg-blue"} weight={"300"} offWeight={"400"} /> */}
        {props.button}
      </div>
      <div className='md:w-3/5 pt-4 md:pt-0'>
        {step === 0 && (
          <div className='flex flex-wrap mb-2 md:w-4/5'>
            <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-first-name'
              >
                First Name
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-first-name'
                type='text'
                placeholder='John'
              ></input>
              <input type='checkbox' class='rounded text-pink-500' />
            </div>
            <div className='w-full md:w-1/2 px-3 mb-2 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Last Name
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-last-name'
                type='text'
                placeholder='Doe'
              ></input>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className='flex flex-wrap mb-2 md:w-4/5'>
            <div className='w-full px-3 mb-2 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-password-name'
              >
                Occupation
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-ocucpation-name'
                type='text'
                placeholder='e.g. Horse Whisperer'
              ></input>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='flex flex-wrap mb-2 md:w-4/5'>
            <div className='w-full px-3 mb-2 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-address-name'
              >
                Address
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-ocucpation-name'
                type='text'
                placeholder='e.g. 123 Main Street'
              ></input>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-city'
              >
                City
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-city'
                type='text'
                placeholder='could be New York'
              ></input>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-state'
              >
                State
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-last-name'
                type='text'
                placeholder='NY'
              ></input>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                for='grid-last-name'
              >
                Zip
              </label>
              <input
                class='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 focus:border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-last-name'
                type='text'
                placeholder='01234'
              ></input>
            </div>
          </div>
        )}
        <div
          className={
            step === 0
              ? `flex flex-row justify-end px-4`
              : step === 2
              ? `flex flex-row justify-start px-4`
              : `flex flex-row justify-between px-4`
          }
        >
          {step > 0 && (
            <Button
              color={"bg-gray"}
              weight={"300"}
              offWeight={"400"}
              onClick={previousStep}
              name='Previous'
            />
          )}
          {step < 2 && (
            <Button
              color={"bg-blue"}
              weight={"300"}
              offWeight={"400"}
              onClick={nextStep}
              name='Next'
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Form;

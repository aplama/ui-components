import React from "react";

export default function RenderButton({
  step,
  handleNextStep,
  handlePreviousStep,
  valid,
  // formSubmit,
}) {
  if (step === 0) {
    return (
      <div
        className='flex flex-row py-4 items-center justify-end
          w-11/12 md:w-8/12 mx-auto mt-8'
      >
        <button
          disabled={!valid}
          onClick={handleNextStep}
          name='nextStep'
          type='button'
          className='hover:bg-green-500 text-gray-700 hover:text-white px-6 py-2 border border-green-500 focus:outline-none'
        >
          Next
        </button>
      </div>
    );
  } else if (step === 1) {
    return (
      <div
        className='flex flex-row py-4 items-center justify-between
            w-11/12 md:w-8/12 mx-auto mt-8'
      >
        <button
          onClick={handlePreviousStep}
          name='previousStep'
          id='previousStep'
          type='button'
          className='px-6 py-2 border text-gray-700 hover:bg-gray-200 focus:outline-none'
        >
          Back
        </button>
        <button
          disabled={!valid}
          onClick={handleNextStep}
          name='nextStep'
          id='nextStep'
          type='button'
          className='hover:bg-green-500 text-gray-700 hover:text-white px-6 py-2 border border-green-500 focus:outline-none'
        >
          Next
        </button>
      </div>
    );
  } else if (step === 2) {
    return (
      <div
        className='flex flex-row py-4 items-center justify-between
            w-11/12 md:w-8/12 mx-auto mt-8'
      >
        <div>
          <button
            id='previousStep'
            name='previousStep'
            onClick={handlePreviousStep}
            // name='previousStep'
            type='button'
            className='px-6 py-2 border text-gray-700 hover:bg-gray-200 focus:outline-none'
          >
            Back
          </button>
        </div>
        <div>
          <button
            disabled={!valid}
            id='submit'
            name='submit'
            // onClick={formSubmit}
            type='submit'
            className='px-6 py-2 border border-green-500 text-gray-700 hover:text-white hover:bg-green-500 focus:outline-none'
          >
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='flex flex-row py-4 items-center
            justify-center
          w-11/12 md:w-8/12 mx-auto mt-8 h-40v'
      >
        Congrats
      </div>
    );
  }
}

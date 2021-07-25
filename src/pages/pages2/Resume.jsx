import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RenderButton from "../../components/comp2/RenderButton";
// import { Link } from "react-router-dom";
import ResumeTemplate from "../../components/comp2/ResumeTemplate";

export default function Resume() {
  const formSubmit = (data) => {
    // e.preventDefault();
    setStep(3);
    console.log(data);
  };

  const [step, setStep] = useState(0);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({ mode: "all" });

  const handleNextStep = () => {
    setStep((cur) => cur + 1);
  };

  const handlePreviousStep = () => {
    setStep((cur) => cur - 1);
  };

  const renderButton = () => {
    if (step === 3) {
      return undefined;
    } else if (step === 2) {
      return (
        <button
          // onClick={handleNextStep}
          type='submit'
          className='mt-6 bg-green-600 text-white px-6 py-4 w-6/12 disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          Create Resume
        </button>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={handleNextStep}
          // type='button'
          className='mt-6 bg-green-600 text-white px-6 py-4 w-6/12 disabled:bg-gray-300 disabled:cursor-not-allowed'
        >
          Next Step
        </button>
      );
    }
  };

  return (
    <div className='flex flex-col h-90v py-8'>
      <div className='container flex flex-row mx-auto h-screen'>
        <div className='w-full md:w-2/3 mx-auto'>
          {/* <form onSubmit={handleSubmit(formSubmit)}>
            <input
              type='text'
              id='firstName'
              name='firstName'
              htmlFor='firstName'
              placeholder='John'
              className=' text-gray-800'
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName?.type === "required" && "First name is required"}

            <input
              {...register("lastName", { required: true })}
              className='border'
            />

            {errors.lastName && "Last name is required"}

            <input type='submit' className='border' />
            <div>
              <button
                id='submit'
                name='submit'
                // onClick={formSubmit}
                type='submit'
                className='px-6 py-2 border border-green-500 text-gray-700 hover:text-white hover:bg-green-500 focus:outline-none'
              >
                Submit
              </button>
            </div>
          </form> */}
          <form onSubmit={handleSubmit(formSubmit)}>
            {step >= 0 && (
              <section className={step === 0 ? "block" : "hidden"}>
                <div className='mx-auto text-center text-lg md:text-2xl capitalize font-semibold pt-2 pb-4'>
                  Personal info
                </div>

                <div className='flex flex-row items-center justify-center w-11/12 md:w-8/12 mx-auto mb-4'>
                  <div className='flex flex-col w-1/2 pr-1'>
                    <label
                      htmlFor='FirstName'
                      className='text-sm font-semibold text-gray-500'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      placeholder='John'
                      className=' text-gray-800'
                      {...register("firstName", {
                        required: true,
                      })}
                    />

                    {errors.firstName?.type === "required" && (
                      <p className='text-xs text-red-500 absolute mt-16'>
                        First name is required
                      </p>
                    )}
                  </div>

                  <div className='flex flex-col w-1/2'>
                    <label
                      htmlFor='LastName'
                      className='text-sm font-semibold text-gray-500'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      placeholder='Doe'
                      className=' text-gray-800'
                      {...register("lastName", { required: true })}
                    />
                    {errors.lastName?.type === "required" && (
                      <label className='text-xs text-red-500 absolute mt-16'>
                        Last name is required
                      </label>
                    )}
                  </div>
                </div>

                <div className='flex flex-col justify-center w-11/12 md:w-8/12 mx-auto pb-4'>
                  <label
                    htmlFor='occupation'
                    className='text-sm font-semibold text-gray-500'
                  >
                    Occupation
                  </label>
                  <input
                    type='text'
                    id='occupation'
                    name='occupation'
                    placeholder='e.g. Accountant'
                    className=' text-gray-800'
                    {...register("occupation")}
                  />
                  {/* {errors.occupation?.type === "required" && (
                    <p className='text-xs text-red-500 absolute'>
                      Please provide occupation
                    </p>
                  )} */}
                </div>
                {/* <div className='flex flex-row items-center justify-center w-11/12 md:w-8/12 mx-auto pb-4'>
                  <div className='flex flex-col w-1/2 pr-1'>
                    <label
                      htmlFor='Phone'
                      className='text-sm font-semibold text-gray-500'
                    >
                      Phone
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      placeholder='e.g. 650-111-1100'
                      className=' text-gray-800'
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <label
                      htmlFor='Email'
                      className='text-sm font-semibold text-gray-500'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      placeholder='john@email.com'
                      className=' text-gray-800'
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                  </div>
                </div> */}
                {/* <div className='flex flex-row items-center justify-center w-11/12 md:w-8/12 mx-auto pb-4'>
                  <div className='flex flex-col w-1/2 pr-1'>
                    <label
                      htmlFor='Address'
                      className='text-sm font-semibold text-gray-500'
                    >
                      Address
                    </label>
                    <input
                      type='text'
                      id='address'
                      name='address'
                      placeholder='123 Main Str'
                      className=' text-gray-800'
                      {...register("address")}
                    />
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <label
                      htmlFor='City'
                      className='text-sm font-semibold text-gray-500'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      id='city'
                      name='city'
                      placeholder='New York'
                      className=' text-gray-800'
                      {...register("city")}
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center w-11/12 md:w-8/12 mx-auto pb-4'>
                  <div className='flex flex-col w-1/2 pr-1'>
                    <label
                      htmlFor='State'
                      className='text-sm font-semibold text-gray-500'
                    >
                      State
                    </label>
                    <input
                      type='text'
                      id='state'
                      name='state'
                      placeholder='New York'
                      className=' text-gray-800'
                      {...register("state")}
                    />
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <label
                      htmlFor='Zip'
                      className='text-sm font-semibold text-gray-500'
                    >
                      Zip
                    </label>
                    <input
                      type='tel'
                      id='zip'
                      name='zip'
                      placeholder='01234'
                      className=' text-gray-800'
                      size='5'
                      maxLength='5'
                      {...register("zip", { minLength: 5 })}
                    />
                  </div>
                </div> */}
              </section>
            )}
            {step >= 1 && (
              <section className={step === 1 ? "block" : "hidden"}>
                <div className='mx-auto text-center text-lg md:text-2xl capitalize font-semibold pt-2 pb-4'>
                  Brief Summary
                </div>
                <textarea
                  className='flex flex-col justify-center w-11/12 md:w-8/12 mx-auto h-30v pb-4 resize-none'
                  {...register("summary")}
                ></textarea>
              </section>
            )}
            {step >= 2 && (
              <section className={step === 2 ? "block" : "hidden"}>
                <div className='mx-auto text-center text-lg md:text-2xl capitalize font-semibold pt-2 pb-4'>
                  Ready to Submit?
                </div>
              </section>
            )}
            {step === 3 && (
              <section>
                <div className='mx-auto text-center text-lg md:text-2xl capitalize font-semibold pt-2 pb-4'>
                  Congrats!!!
                </div>
              </section>
            )}

            {/* <RenderButton
              step={step}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
              valid={isValid}
            /> */}
            <div className='flex flex-row items-center justify-center'>
              {renderButton()}
            </div>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
            {/* <pre>{JSON.stringify(errors)}</pre> */}

            {/* <button type='submit'>Submit</button> */}
          </form>
        </div>

        <div className='w-1/3 hidden lg:flex  border'>
          <object data='' type=''>
            <ResumeTemplate />
          </object>
        </div>
      </div>
    </div>
  );
}

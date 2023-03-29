import React, { useState } from 'react';
import {  useForm } from "react-hook-form";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onSubmit"
  });

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      // If there are any validation errors, don't submit the form
      return;
    }

    try {
      // Submit the form data to getform.io
      const response = await fetch("https://getform.io/f/3ebfe179-4a46-461b-b5f3-676b76e493c3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const responseText = await response.text();
        setFormError(`Failed to submit form. Error message: ${responseText}`);
      }
    } catch (error) {
      setFormError(`Failed to submit form. Error message: ${error.message}`);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - payampartow@icloud.com</p>
            </div>
            <input {...register("name", { required: true, minLength: 3 })}
              id="name"  className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            {errors.name && <span className="text-red-500">Name is required and should be at least 3 characters long</span>}
            <input  className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
            {errors.email && <span className="text-red-500">Please enter a valid Email</span>}
            <textarea  className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message' {...register("message", { required: true })}></textarea>
            {errors.message && <span className="text-red-500">Message is required</span>}
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            {formSubmitted && <span className="text-green-500">Thanks for your message!</span>}
        </form>
    </div>
  );
};

export default Contact;
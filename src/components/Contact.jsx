import React, { useState } from 'react';
import { FieldValues, useForm } from "react-hook-form";



const Contact = () => {

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    // passing the interface we made up top in the braket
    // using this gives us the ability to see the input fields in our useForm objects
    // when we do for example errors. we get a list of all properties of it 
  } = useForm();

  
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        {/* used action to add link from my getform.io account to handle the backend for sending email  */}
        <form  method='post' action="https://getform.io/f/3ebfe179-4a46-461b-b5f3-676b76e493c3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - payampartow@icloud.com</p>
            </div>
            < input {...register("name", { required: true, minLength: 3 })}
          id="name"  className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            {/* my-4 is margin from y axis */}
            <input  className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea  className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
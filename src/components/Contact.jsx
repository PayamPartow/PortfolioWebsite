import React, { useState } from 'react';

const Contact = () => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      alert('Input field cannot be empty');
      return;
    }
    // do something with the input value
  };

  
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        {/* used action to add link from my getform.io account to handle the backend for sending email  */}
        <form onSubmit={handleSubmit} method='post' action="https://getform.io/f/3ebfe179-4a46-461b-b5f3-676b76e493c3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - payampartow@icloud.com</p>
            </div>
            < input onChange={(event) => setInputValue(event.target.value)} className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            {/* my-4 is margin from y axis */}
            <input onChange={(event) => setInputValue(event.target.value)} className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
            <textarea onChange={(event) => setInputValue(event.target.value)} className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
import './App.css';

import React from 'react';

import profilePhoto from './photo.jpg';

function App() {
  const name = 'Sayef Reyadh';
  const designation = 'Software Development Engineer I';
  const company = 'Craftsmen';
  const author = '- Ada Lovelace';
  const quote =
    'We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.';

  return (
    <div className='flex justify-center'>
      <div className='max-w-md py-4 px-8 my-20 bg-gray-200 hover:bg-gray-400 shadow-lg rounded-lg transition ease-in-out delay-150 hover:scale-110 duration-300'>
        <div className='-mt-16 flex justify-end md:justify-center'>
          <img
            className='w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-2 border-blue-500'
            src={profilePhoto}
          ></img>
        </div>
        <div className='flex flex-col mt-4'>
          <p className='text-gray-800 text-3xl font-bold'>{name}</p>
          <div className='text-orange-600 text-md font-medium md:flex gap-1'>
            <p>{designation}</p> <p>at {company}</p>
          </div>
          <br />
          <div className='text-black font-bold italic'>
            <p className='text-sm'>{quote}</p>
            <p className='text-xs'>{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(false);

  function navigateToSignUp() {
    navigate('/signup');
  }

  function handleArrowClick() {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      navigateToSignUp();
    }, 500); // Match this duration with the animation duration
  }

  return (
    <>
      <div className="w-full h-full bg-white rounded-lg p-3">
        <div className='flex flex-row justify-end items-center p-2 mt-6 gap-1 text-xl cursor-pointer'
          onClick={navigateToSignUp}
        >
          <span>Skip</span>
        </div>

        <div className='w-full mt-14'>
          <img src="./landing.png" alt="" className='w-full' />
        </div>

        <div className='flex flex-col gap-20'>
          <div>
            <div className='w-full flex justify-center'>
              <span className='text-gray-700 font-semibold text-3xl mt-12 animate-bounce'>Anywhere you are</span>
            </div>
            <div className='w-full px-3 flex justify-center mt-4 mb-6'>
              <span className='w-8/12 text-gray-400 text-center animate-fadeIn'>
                Sell houses easily with the help of Listenoryx and to make this line big I am writing more.
              </span>
            </div>
          </div>

          <div className='flex justify-center mt-20 cursor-pointer' onClick={handleArrowClick}>
            <img src="./rightarrow.png" alt="" className={`${isRotating ? 'animate-spinFast' : ''}`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;

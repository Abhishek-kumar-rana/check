import React, { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import 'react-phone-input-2/lib/style.css';
import Login from './Login';
import PhoneNumberInput from './PhoneNumberInput';
import { useNavigate } from 'react-router-dom';
        

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.mobile && formData.gender 
    ){
      if(formData.mobile.length==10){
        console.log('User registered:', formData);
    navigate('/profile',{state : {number:formData.mobile}});

      }else{
        alert('Mobile digit should be of 10 digits!.')
      }
      

    }else{
      alert('Complete form to signup!')
    }
    

    
  };

  const handleMobileNumberSubmit=(number)=>{
    setFormData({ ...formData, mobile: number });
  }
  const navigate=useNavigate();
  function navigatetoprofile(){
    navigate('/profile',{state : {number:formData.mobile}});
  }

  function backtostart(){
    navigate('/');
  }

  

  return (
    <div>
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <div className='flex flex-row items-center mt-6 gap-1 text-grey-100'
        onClick={backtostart}
        >
          <SlArrowLeft />
          <p>Back</p>
        </div>

        <h2 className="text-3xl text-gray-600 text-left font-semibold mb-7 mt-8">Sign up with your email or phone number</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
          />


          {/* phone////// */}

          <PhoneNumberInput onMobileNumberSubmit={handleMobileNumberSubmit}  />


          {/* gender dropdown //// */}

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-4 text-[20px] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 truncate"
          >
            <option value="" className='hidden text-gray-300'>Gender</option>
            <option value="male" className='truncate'>Male</option>
            <option value="female" className='truncate'>Female</option>
            <option value="other" className='truncate'>Other</option>
          </select>

          <div className="text-center flex justify-center items-center gap-3" style={{ marginBottom: '40px' }}>
            <FaRegCheckCircle className='text-green-600 w-6 h-5' />
            <div className="text-[14px] text-gray-500 text-left">
              By signing up, you agree to the <a href="#" className="text-green-600">Terms of service</a> and <a href="#" className="text-green-600">Privacy policy</a>.
            </div>
          </div>

          <div className='flex w-full items-center justify-center px-2'>
            <button
              type="submit"
              className="w-full py-4 px-3 bg-[#008955] text-white rounded-md hover:bg-green-700"
              // onClick={navigatetoprofile}
            >
              Sign Up
            </button>
          </div>

          <div className="flex items-center gap-3 mt-4 mb-4">
            <div className="flex-1 border-b border-gray-400 h-0.5"></div>
            <div className="text-gray-400 text-m font-normal">or</div>
            <div className="flex-1 border-b border-gray-400 h-0.5"></div>
          </div>
        </form>

        <div className="mt-2 mb-0 space-y-4 ">
          <Login userlogin={navigatetoprofile}/>
        </div>

        <div className="text-center flex justify-center items-center gap-3" style={{ marginBottom: '40px' }}>
          <div className="text-[16px] text-grey-900 font-semibold">
            Already have an account? <a href="#" className="text-green-600">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState, useEffect } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import PhoneNumberInput from './PhoneNumberInput';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    street: '',
    city: '',
    district: ''
  });

  const [indianCities, setIndianCities] = useState([]);

  const location = useLocation();


  useEffect(() => {
    

    if (location.state.number) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        mobileNumber: location.state.number,
      }));
    }


    setIndianCities([
      "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Aligarh", "Allahabad", "Amritsar", "Aurangabad",
      "Bangalore", "Bareilly", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Coimbatore",
      "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Faridabad", "Gandhinagar", "Ghaziabad",
      "Gorakhpur", "Guntur", "Gurgaon", "Guwahati", "Gwalior", "Hyderabad", "Indore", "Jabalpur",
      "Jaipur", "Jalandhar", "Jammu", "Jamshedpur", "Jhansi", "Jodhpur", "Kannur", "Kanpur", "Karnal",
      "Kochi", "Kolhapur", "Kolkata", "Kota", "Kozhikode", "Ludhiana", "Lucknow", "Madurai", "Mangalore",
      "Mathura", "Meerut", "Mohali", "Moradabad", "Mumbai", "Mysore", "Nagpur", "Nashik", "Navi Mumbai",
      "Noida", "Patiala", "Patna", "Puducherry", "Pune", "Raipur", "Rajkot", "Ranchi", "Rourkela",
      "Salem", "Shimla", "Siliguri", "Solapur", "Srinagar", "Surat", "Thane", "Thiruvananthapuram",
      "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tirupati", "Udaipur", "Ujjain", "Vadodara", "Varanasi",
      "Vasai-Virar", "Vellore", "Vijayawada", "Visakhapatnam", "Warangal"
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('profile', JSON.stringify(profile));
    

    
    if (profile.fullName &&
      profile.mobileNumber &&
      profile.email &&
      profile.street &&
      profile.city &&
      profile.district) {
        console.log(profile);
        alert('Profile saved successfully!');
        navigate("/Wallet")
    }else{
      alert('Profile is not completed!');
    }
    
  };

  const handleMobileNumberSubmit = (number) => {
    setProfile({ ...profile, mobileNumber: number })
  }

  const navigate = useNavigate();
  function navigatetowallet() {
    navigate("/Wallet")
  }



  function backtosignup() {
    () => setProfile({
      fullName: '',
      mobileNumber: '',
      email: '',
      street: '',
      city: '',
      district: ''
    })
    navigate('/signup')
  }

  return (
    <div className="w-full bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-1 text-gray-500" onClick={backtosignup}>
          <SlArrowLeft />
          <p>Back</p>
        </div>
        <h2 className="text-grey-100 text-[20px] font-medium">Profile</h2>
        <div className="w-12"></div> {/* Spacer to balance the flex layout */}
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className="flex items-center justify-center mb-5 mt-5">
          <div className="relative">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-full h-28 w-28 mt-6"
            />
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <img src="./camera.png" alt="" className=' absolute right-0 bottom-0' />
          </div>
        </div>
        <input
          type="text"
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
        />

        {/* Phone number */}
        <PhoneNumberInput onMobileNumberSubmit={handleMobileNumberSubmit} />

        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
        />
        <input
          type="text"
          name="street"
          value={profile.street}
          onChange={handleChange}
          placeholder="Street"
          className="w-full px-4 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
        />

        <select
          id="citySelect"
          name="city"
          value={profile.city}
          onChange={handleChange}
          className="w-full px-4 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
        >
          <option value="" className='text-red-300'>City</option>
          {indianCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>

        <select
          id="districtSelect"
          name="district"
          value={profile.district}
          onChange={handleChange}
          className="w-full px-4 py-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[20px]"
        >
          <option value="" className=''>District</option>
          {indianCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>

        <div className="flex justify-between gap-6 mt-6">
          <button
            type="button"
            className="w-full h-14 border border-[#008955] text-grey-500 rounded-lg flex items-center justify-center"
            onClick={backtosignup}


          >
            Cancel
          </button>
          <button type="submit" className="w-full h-14 bg-[#008955] text-white rounded-lg flex items-center justify-center">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

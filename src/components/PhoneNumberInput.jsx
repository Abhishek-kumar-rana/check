import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PhoneNumberInput = ({ onMobileNumberSubmit }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = response.data.map(country => ({
          name: country.name.common,
          flag: country.flags.svg,
          code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')
        })).filter(country => country.code)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryData);
        const india = countryData.find(country => country.name === 'India');
        setSelectedCountry(india);
      })
      .catch(error => console.error('Error fetching country data:', error));
  }, []);

  const handleChangeCountry = (e) => {
    const country = countries.find(country => country.name === e.target.value);
    setSelectedCountry(country);
  };

  const handleMobileNumberChange = (e) => {
    let number = e.target.value;
    // Limit to 10 digits
    if (number.length > 10) {
      number = number.slice(0, 10);
    }
    setMobileNumber(number);
    onMobileNumberSubmit(number); 
  };

  return (
    <div className="w-full px-4 py-2 flex flex-row justify-between border border-gray-400 rounded-md focus-within:ring-2 focus-within:ring-green-500 truncate">
      <div className="flex items-center">
        {selectedCountry && (
          <>
            <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4 mr-2" />
            <div className="relative">
              <select
                className="appearance-none border p-2 rounded w-10 opacity-0 absolute"
                value={selectedCountry.name}
                onChange={handleChangeCountry}
              >
                {countries.map((country) => (
                  <option key={`${country.name}-${country.code}`} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon icon={faChevronDown} className="pointer-events-none inset-y-0 right-0 w-4 h-4" />
            </div>
            <div className="flex items-center">
              <div className="border-l h-10 border-gray-300 mx-2"></div>
              <span className="text-gray-700 text-[20px] font-semibold md:pr-6">{selectedCountry.code}</span>
            </div>
          </>
        )}
      </div>
      <input
        type="text"
        placeholder="Your mobile number"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        maxLength={10} // Set max length to 10 digits
        className="pl-2 py-2 text-[20px] outline-none"
      />
    </div>
  );
};

export default PhoneNumberInput;

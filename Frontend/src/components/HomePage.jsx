import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
        const data = response.data;
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate('/login'); 
  };

  return (
    <div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded " onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4 text-center">Country List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg">
            <img src={country.flag} alt={country.name} className="w-full h-auto mb-2" />
            <h3 className="text-lg font-bold">{country.name}</h3>
            <p className="text-gray-600">Region: {country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

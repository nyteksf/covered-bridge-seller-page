import React, { useEffect, useState } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('/data/properties.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProperties(data))
      .catch((error) => {
        console.error('Error fetching the properties:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
        >
          <div className="relative">
            <img
              src={property.image}
              alt={`${property.state} ${property.county}`}
              className="w-full h-[200px] object-cover"
            />
            <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
              {property.status}
            </span>
          </div>
          <div className="p-4">
            <div className="flex gap-2 flex-wrap text-sm mb-2">
              <span className="bg-[#333] px-2 py-[2px] rounded">{property.state}</span>
              <span className="bg-[#333] px-2 py-[2px] rounded">{property.acres} Acres</span>
              <span className="bg-[#333] px-2 py-[2px] rounded">{property.county}</span>
            </div>
            <h2 className="text-xl font-bold">${property.price.toLocaleString()}</h2>
            <p className="text-xs text-gray-400 mt-1">{property.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

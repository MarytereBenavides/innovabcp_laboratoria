import React from 'react';
import Image from 'next/image';

const MenuItem = ({ image, label, active }) => {
  return (
    <button
      className={`flex items-center text-gray-600 w-full p-3 rounded-lg text-black  hover:bg-[#87CEEB80] focus:outline-none focus:ring- focus:ring-bg-[#87CEEB80]  ${
        active ? 'bg-[#87CEEB80] text-[#87CEEB]' : ''
      }`}
    >
      <Image src={image} alt={label} width={24} height={24} className="mr-3" />
      {label}
    </button>
  );
};

export default MenuItem;
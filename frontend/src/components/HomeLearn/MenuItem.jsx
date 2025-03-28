import React from 'react';

const MenuItem = ({ icon, label, active }) => {
  return (
    <button
      className={`flex items-center w-full p-3 rounded-lg text-black  hover:bg-[#87CEEB80] focus:outline-none focus:ring- focus:ring-bg-[#87CEEB80]  ${
        active ? 'bg-[#87CEEB80] text-[#87CEEB]' : ''
      }`}
    >
      <span className="mr-3">{icon}</span> {label}
    </button>
  );
};

export default MenuItem;
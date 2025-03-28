import React from 'react';
import Image from 'next/image';

export function OptionCard({ imageSrc, altText, description, onClick, isSelected, isCorrect, loading }) {
  let borderColor = "border-gray-200 bg-white"; // Default
  if (isSelected) {
    borderColor = isCorrect === null ? "border-[#0A47F0]" : 
                  isCorrect ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100";
  }
  return (
    <div className="text-center"  onClick={!loading ? onClick : undefined} >
      <div className={`rounded-lg border py-4 ${borderColor} cursor-pointer hover:border-[#0A47F0] border-4 ${loading ? "opacity-50 pointer-events-none" : ""} `}>
        <Image src={imageSrc} alt={altText} className="mx-auto mb-2" width={100} height={100} />
      </div>
      <p className='text-center text-sm'>{description}</p>
      {loading && isSelected && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 rounded-lg">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-[#0A47F0] rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
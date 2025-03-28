import React from 'react';
import Image from 'next/image';

export function OptionCard({ imageSrc, altText, description }) {
  return (
    <div className="text-center">
      <div className='rounded-lg border py-4 border-gray-200 cursor-pointer hover:border-[#0A47F0] border-4'>
        <Image src={imageSrc} alt={altText} className="mx-auto mb-2" width={100} height={100} />
      </div>
      <p className='text-center text-sm'>{description}</p>
    </div>
  );
}
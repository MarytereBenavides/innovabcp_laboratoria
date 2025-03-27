import React from 'react';
import Image from 'next/image';

export default function MainContent() {
  return (
    <div className="bg-[#0F172A] min-h-screen flex flex-col items-center pt-6">
      <div className="bg-[#F59E0B] w-[90%] max-w-md rounded-md p-4 flex justify-between items-center">
        <div>
          <p className="text-white text-sm">sigue la ruta</p>
          <h1 className="text-white text-2xl font-bold">Juega y Aprende</h1>
        </div>
        <button className="bg-white rounded-md px-4 py-2 font-semibold">GUÍA</button>
      </div>

      <div className="mt-6 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
        <p className="text-white font-semibold mt-2">EMPEZAR</p>
          <button className="bg-[#1E293B] p-2 rounded-full"  data-tip="Empezar">
            <div className='bg-[#0F172A] p-2 rounded-full' >
               <Image src="/assets/playone.png" alt="Slider Image" width={100} height={100} className="rounded-full" />   
            </div>
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
            <div className='bg-[#334155] p-2 rounded-full' >
               <Image src="/assets/playtwo.png" alt="Slider Image" width={100} height={100} className="rounded-full " />   
            </div>
          <div className="bg-[#334155] p-2 rounded-full">
          <Image src="/assets/Notes.png" alt="Slider Image" width={100} height={100} className="rounded-full " />   
          </div>
          <div className="bg-[#334155] p-2 rounded-full">
          <Image src="/assets/Messages.png" alt="Slider Image" width={100} height={100} className="rounded-full " />   
          </div>
          <div className="bg-[#334155] p-2 rounded-full">
          <Image src="/assets/Weather.png" alt="Slider Image" width={100} height={100} className="rounded-full " />   
          </div>
          <div className="bg-[#334155] p-2 rounded-full">
          <Image src="/assets/Weather.png" alt="Slider Image" width={100} height={100} className="rounded-full " />   
          </div>
        </div>
      </div>
    </div>
  );
}

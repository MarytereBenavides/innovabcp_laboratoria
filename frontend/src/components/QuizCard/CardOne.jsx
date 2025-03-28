import React from "react";

const Exercise1 = () => (
  <div className="bg-gray-900 text-white p-6 rounded-2xl max-w-md mx-auto">
    <div className="flex justify-between items-center mb-4">
      <span className="text-green-400 font-semibold">2 SEGUIDAS</span>
      <div className="h-2 bg-gray-700 w-full rounded-full overflow-hidden">
        <div className="bg-green-400 h-full w-2/5"></div>
      </div>
      <span className="text-red-400">❤ 4</span>
    </div>
    <h2 className="text-2xl font-bold mb-4">Escribe esto en español</h2>
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
      <p className="ml-4">Thank you for the meal.</p>
    </div>
    <div className="flex space-x-2">
      <button className="bg-gray-800 px-4 py-2 rounded-lg">Gracias</button>
      <button className="bg-gray-800 px-4 py-2 rounded-lg">por</button>
      <button className="bg-gray-800 px-4 py-2 rounded-lg">la</button>
      <button className="bg-gray-800 px-4 py-2 rounded-lg">comida</button>
    </div>
  </div>
);

const Exercise2 = () => (
  <div className="bg-gray-900 text-white p-6 rounded-2xl max-w-md mx-auto mt-8">
    <div className="flex justify-between items-center mb-4">
      <div className="h-2 bg-gray-700 w-full rounded-full overflow-hidden">
        <div className="bg-yellow-400 h-full w-3/5"></div>
      </div>
      <span className="text-red-400">❤ 4</span>
    </div>
    <h2 className="text-2xl font-bold mb-4">Completa el diálogo</h2>
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
      <p className="ml-4">There are many dangerous animals in this country.</p>
    </div>
    <div className="space-y-2">
      <button className="bg-gray-800 px-4 py-2 w-full rounded-lg">1. Wow! Which is the most dangerous?</button>
      <button className="bg-gray-800 px-4 py-2 w-full rounded-lg">2. I am from Mexico City, too!</button>
    </div>
    <div className="flex justify-between mt-4">
      <button className="bg-gray-800 px-4 py-2 rounded-lg">SALTAR</button>
      <button className="bg-gray-600 px-4 py-2 rounded-lg">COMPROBAR</button>
    </div>
  </div>
);

const Exercises = () => (
  <div className="min-h-screen bg-gray-900 p-4 flex flex-col space-y-8">
    <Exercise1 />
    <Exercise2 />
  </div>
);

export default Exercises;

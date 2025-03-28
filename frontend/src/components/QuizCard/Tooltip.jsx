import React from 'react';
import Image from 'next/image';

export function Tooltip() {
  return (
    <div className="relative group">
      <button className="rounded-full">
        <Image src="/assets/avatar_quiz.png" alt="Avatar" className="mx-auto mb-2" width={50} height={50} />
      </button>
      <span className="w-100 bg-red-50 p-4 mt-6 rounded-lg border border-red-300 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-red-500 font-semibold flex items-center">
          <span className="mr-2">&#10060;</span> Respuesta incorrecta
        </p>
        <p className="text-gray-600 mt-2">
          Pedir prestado no es ahorro, sino adquirir una obligación de pago. Ahorrar implica separar dinero para el futuro.
        </p>
        <div className="flex justify-between mt-4">
          <button className="text-orange-500 font-semibold">Gracias, me quedó claro 😊</button>
          <button className="text-indigo-500 font-semibold">¡Quiero saber más! 😊</button>
        </div>
      </span>
    </div>
  );
}
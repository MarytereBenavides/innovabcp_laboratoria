import React from 'react';
import Image from 'next/image';

export default function QuizCard() {
  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <button className="text-2xl text-gray-400">&times;</button>
          <div className="w-full bg-[#E5E5E5] rounded-full h-2 dark:bg-[#E5E5E5] ml-4">
            <div className="bg-[#FF7700] h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        <h2 className="text-center text-2xl font-semibold text-indigo-700 mb-6">
          ¿Cuál de estas acciones representa el ahorro?
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className=" text-center">
            <div className='rounded-lg border py-4 border-gray-200 cursor-pointer hover:border-[#0A47F0] border-4'>
              <Image src="/assets/image.png" alt="Guardar dinero" className="mx-auto mb-2" width={100} height={100} />
            </div>
            <p className='text-center text-sm'>Guardar una parte del sueldo en una cuenta bancaria</p>
          </div>
          <div className=" text-center">
            <div className='rounded-lg border py-4 border-gray-200 cursor-pointer hover:border-[#0A47F0] border-4'>
              <Image src="/assets/image.png" alt="Guardar dinero" className="mx-auto mb-2" width={100} height={50} />
            </div>
            <p className='text-center text-sm'> Gastar todo el sueldo en compras impulsivas</p>
          </div>
          <div className=" text-center">
            <div className='rounded-lg border py-4 border-gray-200 cursor-pointer hover:border-[#0A47F0] border-4'>
              <Image src="/assets/image.png" alt="Guardar dinero" className="mx-auto mb-2" width={100} height={100} />
            </div>
            <p className='text-center text-sm'>Pedir prestado para pagar deudas</p>
          </div>
        </div>
        <div></div>
        <div className="flex justify-between mt-8">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm h-10">Regresar</button>
          <div class="relative group">
            <button class="rounded-full">
              <Image src="/assets/avatar_quiz.png" alt="Guardar dinero" className="mx-auto mb-2" width={50} height={50} />
            </button>
            <span class=" w-100 bg-red-50 p-4 mt-6 rounded-lg border border-red-300 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900  text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
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
          <button className="bg-orange-400 text-white px-4 h-10 rounded-lg">Siguiente</button>
        </div>
      </div>
    </div>
  );
}

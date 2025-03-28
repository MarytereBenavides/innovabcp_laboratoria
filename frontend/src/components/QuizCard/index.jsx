import React from 'react';
import { ProgressBar } from '@/components/QuizCard/ProgressBar';
import { OptionCard } from '@/components/QuizCard/OptionCard';
import { Tooltip } from '@/components/QuizCard/Tooltip';

export default function QuizCard() {
  return (
    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <button className="text-2xl text-gray-400">&times;</button>
          <ProgressBar progress={10} />
          <div className='flex flex-col items-center'>
            <span className="text-md font-semibold">4</span>
            <span className='text-xs'>Puntos</span>
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold text-indigo-700 mb-6">
          ¿Cuál de estas acciones representa el ahorro?
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <OptionCard 
            imageSrc="/assets/image.png" 
            altText="Guardar dinero" 
            description="Guardar una parte del sueldo en una cuenta bancaria" 
          />
          <OptionCard 
            imageSrc="/assets/image.png" 
            altText="Gastar dinero" 
            description="Gastar todo el sueldo en compras impulsivas" 
          />
          <OptionCard 
            imageSrc="/assets/image.png" 
            altText="Pedir prestado" 
            description="Pedir prestado para pagar deudas" 
          />
        </div>

        <div className="flex justify-between mt-12 mb-0">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm h-10">Regresar</button>
          <Tooltip />
          <button className="bg-orange-400 text-white px-4 h-10 rounded-lg">Siguiente</button>
        </div>
      </div>
    </div>
  );
}

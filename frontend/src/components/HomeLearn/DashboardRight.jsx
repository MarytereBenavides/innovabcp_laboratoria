import React from 'react';
import Image from 'next/image';

export default function DashboardRight() {
  return (
    <div className="bg-white text-black p-4 space-y-4 w-[320px] rounded-2xl">
      <div className='p-4 rounded-xl  border border-gray-200 '>
        <h3>unlock next unit</h3>
        <div className=" flex items-center space-x-4">

          <div>
            <Image src="/assets/playtwo.png" alt="Logo" width={100} height={100} />
          </div>
          <div>
            <p className="text-sm text-gray-400">
              Completa la leccion para habilitar la isguiente unidad
            </p>
          </div>
        </div>
      </div>

      <div className=" p-4 rounded-xl  border border-gray-200 ">
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-600">Acumula puntos</h3>
          <a href="#" className="text-blue-400 text-sm">VER TODO</a>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Image src="/assets/one.svg" alt="Logo" width={50} height={50} />
          <span className="text-md text-gray-400">
            10 PUNTOS
          </span>
        </div>
      </div>
     <div className="border border-gray-200 p-4 rounded-xl flex flex-col space-y-3">
       <h3 className="text-xs text-gray-600">Crea un perfil para guardar tus puntos</h3>
       <button className="bg-orange-500 text-white p-2 rounded-full text-sm">Crear mi perfil</button>
       <button className="bg-gray-200 text-gray-500 p-2 rounded-full text-sm">Iniciar Sesión</button>
     </div>
      <div className=" border border-gray-200 p-4 rounded-xl space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm">Desafíos del día</h3>
          <a href="#" className="text-blue-400 text-sm">VER TODOS</a>
        </div>

        <Challenge text="Gana 20 EXP" progress="0/20" />
        <Challenge text="Obtén un puntaje de 90% o más en 2 lecciones" progress="0/2" />
        <Challenge text="Responde correctamente 5 veces seguidas en 4 lecciones" progress="0/4" />
      </div>

    </div>
  );
}

function Challenge({ text, progress }) {
  return (
    <div>
      <p className="text-sm text-gray-300">{text}</p>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '0%' }}></div>
      </div>
      <p className="text-xs text-gray-400 mt-1">{progress}</p>
    </div>
  );
}

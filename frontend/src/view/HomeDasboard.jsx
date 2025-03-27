import React from 'react';

export default function HomeDasboard() {
  return (
    <div className="bg-[#0f172a] text-white p-4 space-y-4 w-[320px] rounded-2xl">
      <div className="flex justify-between items-center">
        <img src="/flags/usa.png" alt="USA" className="w-6" />
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-gray-300">47</span>
          </div>
          <div className="text-blue-400">4172</div>
          <div className="text-red-500">5</div>
        </div>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl space-y-2">
        <span className="text-pink-500 font-bold">SUPER</span>
        <h2 className="text-lg font-semibold">Prueba Súper gratis</h2>
        <p className="text-sm text-gray-400">
          Sin anuncios, con prácticas personalizadas y sin límites para el nivel Legendario.
        </p>
        <button className="bg-purple-600 text-white w-full py-2 rounded-lg mt-2">
          PROBAR 2 SEMANAS GRATIS
        </button>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">División Zafiro</h3>
          <a href="#" className="text-blue-400 text-sm">VER LIGAS</a>
        </div>
        <p className="text-green-400 font-semibold mt-2">Estás en el puesto #4</p>
        <p className="text-sm text-gray-400">
          ¡Ya casi estás en el top 3!
        </p>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">Desafíos del día</h3>
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

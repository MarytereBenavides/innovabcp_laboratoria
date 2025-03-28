`use client`;

import { useState } from 'react';

export default function Card() {
  const [matches, setMatches] = useState({});

  const concepts = ['Ahorro', 'Ingreso', 'Gasto'];
  const meanings = [
    'Guardar dinero para el futuro',
    'Dinero que recibes por tu trabajo',
    'Usar dinero para comprar bienes o servicios',
  ];

  const handleDragStart = (e, concept) => {
    e.dataTransfer.setData('text/plain', concept);
  };

  const handleDrop = (e, meaning) => {
    const concept = e.dataTransfer.getData('text/plain');
    setMatches((prev) => ({ ...prev, [concept]: meaning }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        Relaciona cada concepto con su significado:
      </h2>
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        <div className="flex flex-col space-y-4">
          {concepts.map((concept) => (
            <div
              key={concept}
              draggable
              onDragStart={(e) => handleDragStart(e, concept)}
              className="bg-white p-4 shadow-md rounded-lg text-center cursor-move"
            >
              {concept}
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          {meanings.map((meaning) => (
            <div
              key={meaning}
              onDrop={(e) => handleDrop(e, meaning)}
              onDragOver={handleDragOver}
              className="bg-white p-4 shadow-md rounded-lg min-h-[60px] flex items-center justify-center"
            >
              {Object.values(matches).includes(meaning)
                ? Object.keys(matches).find(
                    (key) => matches[key] === meaning
                  )
                : meaning}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

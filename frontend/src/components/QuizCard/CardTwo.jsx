// /components/TranslationExercise.js
import Image from 'next/image';

export default function TranslationExercise() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white p-6">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-green-400 font-bold">2 SEGUIDAS</div>
          <div className="flex-1 mx-4 h-2 bg-gray-700 rounded">
            <div className="h-2 bg-green-400 rounded" style={{ width: '50%' }}></div>
          </div>
          <div className="text-red-400">❤ 4</div>
        </div>

        {/* Exercise Prompt */}
        <h2 className="text-2xl font-semibold text-center mb-4">Escribe esto en español</h2>

        {/* Character and Speech */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/character.png" // Reemplaza con la ruta de tu imagen
            alt="Character"
            width={80}
            height={80}
            className="mb-4"
          />
          <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-2">
            <button className="text-blue-400">
              🔊
            </button>
            <span className="text-white">Thank you for the meal.</span>
          </div>
        </div>

        {/* Answer Options */}
        <div className="flex justify-center flex-wrap gap-2">
          {['Gracias', 'por', 'la', 'comida'].map((word, idx) => (
            <button
              key={idx}
              className="bg-gray-800 px-4 py-2 rounded-lg text-white text-lg border border-gray-700 hover:bg-gray-700"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

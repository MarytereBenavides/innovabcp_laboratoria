import { useState } from "react";

export default function QuestionCard({ question, words, correctAnswer, onComplete }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleClick = (word) => {
    setUserAnswer((prev) => `${prev} ${word}`.trim());
  };

  const checkAnswer = () => {
    if (userAnswer === correctAnswer) {
      onComplete();
    }
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg text-white">
      <h2 className="text-lg mb-4">{question}</h2>
      <div className="flex flex-wrap gap-2">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => handleClick(word)}
            className="bg-gray-800 p-2 rounded-md hover:bg-gray-700"
          >
            {word}
          </button>
        ))}
      </div>
      <p className="mt-4">Tu respuesta: {userAnswer}</p>
      <button
        onClick={checkAnswer}
        className="mt-4 bg-green-500 px-4 py-2 rounded-md"
      >
        Comprobar
      </button>
    </div>
  );
}

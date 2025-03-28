export default function DialogueCard({ prompt, options, onAnswer }) {
    return (
      <div className="p-4 bg-gray-900 rounded-lg text-white">
        <h2 className="text-lg mb-4">{prompt}</h2>
        <div className="space-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
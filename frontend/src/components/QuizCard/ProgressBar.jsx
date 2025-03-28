export default function ProgressBar({ progress }) {
    return (
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-400 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  
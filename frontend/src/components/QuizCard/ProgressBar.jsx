import React from 'react';

export function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-[#E5E5E5] rounded-full h-2 dark:bg-[#E5E5E5] ml-4">
      <div className="bg-[#FF7700] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
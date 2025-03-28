'use client';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from 'react';
import Image from 'next/image';

export function Tooltip({ isCorrect, message, advice, onClose }) {
  const router = useRouter();
  const handleShowExperience = () => {
    router.push("/?ia=true");
  };

  return (
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
      <button className="rounded-full">
        <Image src="/assets/avatar_quiz.png" alt="Avatar" className="mx-auto mb-2" width={50} height={50} />
      </button>
      <span className="w-100 bg-red-50 p-4 mt-6 rounded-lg border border-red-300 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-sm px-2 py-1 rounded-lg">
        <p className={`font-semibold flex items-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
          <span className="mr-2">{isCorrect ? '✅' : '❌'}</span> 
          {message}
        </p>
        <p className="text-gray-600 mt-2">
          {advice}
        </p>
        <div className="flex justify-between mt-4">
          <button className="text-orange-500 font-semibold cursor-pointer" onClick={onClose}>Gracias, me quedó claro 😊</button>
          <button className="text-indigo-500 font-semibold cursor-pointer" onClick={handleShowExperience}>¡Quiero saber más! 😊</button>
        </div>
      </span>
      </motion.div>
    </div>
  );
}
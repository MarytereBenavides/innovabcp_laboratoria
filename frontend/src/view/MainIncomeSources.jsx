"use client";

import React from "react";
import { useState } from "react";
import ImageComponent from "@/components/ImageSlider/ImageComponent";
const options = [
  { id: 1, label: "Soy dependiente (trabajo en una empresa)", emoji: "🧑‍💼", image: "/phone.jpg" },
  { id: 2, label: "Soy independiente (tengo un negocio o soy freelancer)", emoji: "👨‍💻", image: "/phone.jpg" },
  { id: 3, label: "Soy estudiante", emoji: "🎓", image: "/phone.jpg" },
  { id: 4, label: "Me dedico al hogar", emoji: "🏡", image: "/phone.jpg" },
  { id: 5, label: "Otro", emoji: "➕", image: "/phone.jpg" }
];

export default function IncomeSourceForm() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen border ">
     
      <h2 className="text-lg font-semibold text-center mb-2 text-black">¿Cuál es tu principal fuente de ingresos?</h2>
      <div className="grid grid-cols-2 gap-2">
        {options.slice(0, 4).map((option) => (
          <div
            key={option.id}
            className={`w-60 relative flex flex-col items-center  p-2 cursor-pointer transition-all ${
              selected === option.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
            }`}
            onClick={() => setSelected(option.id)}
          >
            <div className="border border-gray-300 p-2  ">
              <ImageComponent src={option.image} alt={option.label}  className=" mb-2"  />
            </div>
            <span className="text-sm text-center text-black mt-2">{option.emoji} {option.label}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="border border-gray-300 p-2 mt-4">
          <ImageComponent src={options[4].image} alt={options[4].label} width={64} height={64} className="w-40 h-40 rounded-md mb-2" />
        </div>
        <span className="text-md text-center text-black mt-4">{options[4].emoji} {options[4].label}</span>
        
      </div>
    </div>
  );
}

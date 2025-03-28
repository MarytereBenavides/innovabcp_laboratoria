"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MainContent = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/quizcard");
  };
  const sections = [
    {
      title: "Ahorros",
      items: [
        "¿Qué es el ahorro?",
        "Tipos de ahorro",
        "¿Por qué es importante ahorrar?",
        "Cómo empezar a ahorrar",
        "Alternativas de inversión",
      ],
    },
    {
      title: "Hábitos financieros saludables",
      items: [
        "Buenos y malos hábitos financieros",
        "Cómo hacer un plan de ahorro",
        "Gastos pequeños que afectan tu bolsillo",
        "Ahorro constante",
        "Motivación para ahorrar",
      ],
    },
    {
      title: "Presupuesto Personal y Familiar",
      items: [
        "¿Qué es un presupuesto?",
        "Ingresos y gastos",
        "Gastos fijos vs. variables",
        "Cómo reducir gastos",
        "Ajuste del presupuesto",
      ],
    },
    {
      title: "Organización Financiera",
      
      items: [
        "Registrar ingresos y gastos",
        "Revisar y categorizar gastos",
        "Control de ingresos",
        "Cómo distribuir tu presupuesto",
        "Apps para tu día a día",
      ],
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="bg-[#002A8D] text-white p-4 rounded-lg mb-4 flex justify-between items-center">
        <div>
        <span className="text-sm">Sección 1, Unidad 1</span>
        <h1 className="text-xl font-bold">Ahorro y presupuesto</h1>
        </div>
        <span className="text-sm mr-4">INDICE</span>
      </header>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-gray-500 font-semibold mb-4">{section.title}</h2>
         
          <div className="grid grid-cols-5 md:grid-cols-5 gap-8">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
              >
                
                <div className="bg-white py-4 px-8 rounded-lg shadow-md flex justify-center items-center hover:bg-purple-100 cursor-pointer
                " onClick={handleNavigation}>
                  <Image src="/assets/pig.png" alt="Logo" width={50} height={50} />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <footer className="bg-white p-4 rounded-lg shadow-md text-center mt-8">
        <h3 className="text-gray-500 font-semibold">Cuentas bancarias y servicios financieros</h3>
        <p className="text-gray-400 text-sm mb-4">
          Conoce cómo funcionan las cuentas bancarias y qué servicios pueden ayudarte.
        </p>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500">
          Saltar a esta sección
        </button>
      </footer>
    </div>
  );
};

export default MainContent;

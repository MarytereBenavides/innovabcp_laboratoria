import React from "react";
import { driver } from "driver.js";


export default function OnboardingDriver() {
  return (
    <div>
      <button
        className="bg-white text-black  hover:bg-gray-200 font-bold py-2 px-4"
        onClick={() => {
          driver.start();
        }}
      >
        Iniciar Tour
      </button>
    </div>
  );
};
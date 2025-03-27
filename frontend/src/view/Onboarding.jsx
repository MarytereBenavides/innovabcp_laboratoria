import React from "react";
import OnboardingDriver from "@/components/OnboardingDriver";

export default function Onboarding() {
  return (
    <div>
    
      <OnboardingDriver /> 
      <main className="p-4">
        <h1 className="text-4xl font-bold">Bienvenido a la App</h1>
        <p>Explora las funcionalidades con el tour guiado.</p>
      </main>
    </div>
  );
}
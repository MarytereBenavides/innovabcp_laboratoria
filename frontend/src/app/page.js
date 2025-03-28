'use client';
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Experience } from "@/components/virtualAssitant/Experience";
import MainSection from "@/components/MainSection";

function HomeContent() {
  const [showExperience, setShowExperience] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("ia") === "true") {
      setShowExperience(true);
    } else {
      setShowExperience(false);
    }
  }, [searchParams]);

  return (
    <main className="h-screen min-h-screen">
      {showExperience ? (
        <Experience />
      ) : (
        <div>
          <MainSection />
        </div>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HomeContent />
    </Suspense>
  );
}

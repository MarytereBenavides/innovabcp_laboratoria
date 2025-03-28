import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

export default function MainSection() {

    return (
      <div>
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen p-8 max-w-7xl mx-auto w-full bg-white">
          <div className="flex justify-between w-full">
            <div className="w-1/2 ml-auto">
              <Image src="/assets/main.png" alt="Slider Image" width={500} height={500} className="mb-4" />
            </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center mr-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Aprende, juega y toma el control de tus finanzas</h2>
            <div className="flex flex-col gap-4 w-80">
            <Link href="/learn">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full w-80">Empezar a aprender</button>
            </Link>
              <button className="border border-gray-300 px-6 py-2 rounded-full">Tengo una cuenta</button>
            </div>
          </div>
          </div>
        </main>
      </div>
    );
  
}
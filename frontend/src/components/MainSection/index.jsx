export default function MainSection() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Aprende, juega y toma el control de tus finanzas</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Empezar a aprender</button>
            <button className="border border-gray-300 px-6 py-2 rounded-full">Tengo una cuenta</button>
          </div>
        </div>
      </main>
    );
  }
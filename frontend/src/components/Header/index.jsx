import Image from "next/image";
export default function Header() {
    return (
     

     <header className="bg-[#002A8D] text-white p-4 flex justify-between items-center">
        <Image src="/assets/logo_blanco.svg" alt="Slider Image" width={70} height={0} className="flex items-center" />
       <div className="container mx-auto flex justify-between items-center">
        <div className="ml-4">
        <Image src="/assets/logo-app.png" alt="Slider Image" width={70} height={0} className="flex items-center" />

        </div>
         <nav className="text-sm">Español / Otras</nav>
       </div>
     </header>
    );
  }
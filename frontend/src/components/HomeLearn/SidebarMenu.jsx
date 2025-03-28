import React from 'react';
import MenuItem from './MenuItem';
import Image from 'next/image';

const SidebarMenu = () => {
  return (
    <div className="bg-white h-screen w-64 p-4 flex flex-col items-start border-r border-gray-200">
      <div className='mb-4 '>
        <Image src="/assets/logo-bcp.svg" alt="Logo" width={100} height={100} className='h-9 object-cover'/>
      </div>
      <nav className="flex flex-col space-y-4 w-full text-gray-600">
        <MenuItem image="/assets/hause.png" label="Aprender y jugar" active />
        <MenuItem image="/assets/unit.png" label="Unidades" />
        <MenuItem image="/assets/avatar.png" label="Mi perfil" />
        <MenuItem image="/assets/phone.png" label="Banca Móvil BCP" />
        <MenuItem image="/assets/abc.png" label="ABC del BCP" />
        <MenuItem image="/assets/ulyimo.png" label="Organízate" />
      </nav>
    </div>
  );
};

export default SidebarMenu;
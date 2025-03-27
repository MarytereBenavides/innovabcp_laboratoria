import React from 'react';
import MenuItem from './MenuItem';
import Image from 'next/image';

const SidebarMenu = () => {
  return (
    <div className="bg-white h-screen w-64 p-4 flex flex-col items-start rounded-3xl">
      <div className='mb-4'>
        <Image src="/assets/logo-bcp.png" alt="Logo" width={100} height={100} />
      </div>
      <nav className="flex flex-col space-y-4 w-full">
        <MenuItem icon="🏠" label="APRENDER" active />
        <MenuItem icon="🎤" label="SONIDOS" />
        <MenuItem icon="🧩" label="PRACTICAR" />
        <MenuItem icon="🛡️" label="LIGAS" />
        <MenuItem icon="🏆" label="DESAFÍOS" />
        <MenuItem icon="🛒" label="TIENDA" />
        <MenuItem icon="👤" label="PERFIL" />
        <MenuItem icon="⋯" label="MÁS" />
      </nav>
    </div>
  );
};

export default SidebarMenu;
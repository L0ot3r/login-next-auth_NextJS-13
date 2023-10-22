'use client';

import React from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import { MenuDrop } from '.';

const Navbar = () => {
  const { setOpenModalConnect } = useGlobalContext();
  

	return (
		<header className='flex justify-between items-center h-16 bg-white text-black shadow-sm'>
			<nav className='flex justify-between items-center w-full px-10 py-5'>
				<div className='logo-brand'></div>
				<div className='text-gray-700 flex items-center gap-3'>
					<button 
            type='button'
            className='btn-nav'
            onClick={() => {
              setOpenModalConnect(true)
            }}
          >
            Connexion
          </button>
					<button 
            type='button'
            className='btn-nav'
          >
            Inscription
          </button>

					<MenuDrop />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

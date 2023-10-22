'use client';

import { createContext, useContext, useState } from 'react';
import { 
	IGlobalContext, 
	UserWithEmailAndPassword 
} from '@/types';

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalContextProvider = ({ children } : { children: React.ReactNode }) => {
	const [name, setName] = useState('');
	const [userWithEmailAndPwd, setUserWithEmailAndPwd] = useState(
		{} as UserWithEmailAndPassword
	);
	const [openModalConnect, setOpenModalConnect] = useState(false)
	

	return (
		<GlobalContext.Provider
			value={{
				name,
				setName,
				userWithEmailAndPwd,
				setUserWithEmailAndPwd,
				openModalConnect,
				setOpenModalConnect
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);

'use client';

import { Dialog } from '@headlessui/react';
import { useGlobalContext } from '@/context/GlobalContext';
import { LoginBtn } from '.';
import { signIn } from 'next-auth/react';

export default function LoginModal() {
	const { openModalConnect, setOpenModalConnect } = useGlobalContext();

	return (
		<Dialog
			open={openModalConnect}
			onClose={() => setOpenModalConnect(false)}
			className='fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-gray-500 bg-opacity-50'
		>
			<Dialog.Panel className='flex flex-col min-w-[320px] w-[500px] justify-center bg-white rounded-md shadow-md p-10 relative'>
				<Dialog.Title as='h3' className='text-2xl font-bold text-center'>
					Login Modal
				</Dialog.Title>
				<Dialog.Description as='p' className='text-center'>
					Choose your login method
				</Dialog.Description>
				<div className='flex flex-col justify-center gap-5 py-5'>
					<LoginBtn
						title='Google'
						action={() => signIn('google')}
						style='bg-red-400 hover:bg-red-500 text-white font-semibold'
					/>
					<LoginBtn
						title='Github'
						action={() => signIn('github')}
						style='bg-gray-600 hover:bg-slate-700 text-white font-semibold'
					/>
					<LoginBtn
						title='Facebook'
						action={() => signIn('facebook')}
						style='bg-blue-600 hover:bg-blue-800 text-white font-semibold'
					/>
					<LoginBtn
						title='Discord'
						action={() => signIn('discord')}
						style='bg-blue-600 hover:bg-blue-800 text-white font-semibold'
					/>
					<LoginBtn
						title='Email'
						action={() => console.log('Email')}
						style='bg-transparent border-2 border-gray-600 hover:bg-gray-100 text-inherit font-semibold'
					/>
				</div>

				<button
					onClick={() => setOpenModalConnect(false)}
					className='absolute top-5 right-5 font-bold bg-red-500 hover:bg-red-400 text-white rounded-md px-2'
				>
					X
				</button>
			</Dialog.Panel>
		</Dialog>
	);
}

'use client';

import React from 'react';
import Image from 'next/image';

import { useSession } from 'next-auth/react';

const Profil = () => {
	const { data: session } = useSession();

	return (
		<div className='flex flex-col items-center justify-center py-2'>
			<h1 className='text-4xl font-bold'>Profil</h1>
			{session ? (
				<div>
					<p className='text-2xl font-semibold text-center'>
						Welcome {session.user?.name}
					</p>
					<div className='flex flex-col items-center justify-center py-2'>
						<Image
							src={session.user?.image!}
							alt='Profile Picture'
							width={150}
							height={150}
							className='rounded-full'
						/>
						<p>Utilise {session.user?.email}</p>
					</div>
				</div>
			) : (
				<>
					<p className='text-2xl font-semibold text-center'>
						You are not logged in
					</p>
					<div className='flex flex-col items-center justify-center py-2'>
						<Image
							src='/images/profil.jpg'
							alt='Profile Picture'
							width={150}
							height={150}
							className='rounded-full'
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Profil;

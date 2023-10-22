'use client';

import React from 'react';
import Link from 'next/link';

export default function SignIn() {
	return (
		<div className='flex flex-col min-h-screen items-center p-24 gap-4'>
			<h1 className='text-4xl font-bold text-center'>SignIn Page</h1>
			<Link
				href='/'
				className='bg-blue-500 hover:bg-blue-700 text-white flex justify-center font-bold py-2 px-4 rounded'
			>
				Retour
			</Link>
		</div>
	);
}

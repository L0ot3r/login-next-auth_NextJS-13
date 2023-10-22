'use client';

import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';

import { useSession, signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import {
	PencilSquareIcon,
	ArrowLeftOnRectangleIcon,
} from '@heroicons/react/20/solid';

const MenuLinks = [
	{
		name: 'Logout',
		href: '/logout',
		icon: ArrowLeftOnRectangleIcon,
		actionBtn: () => signOut(),
	},
	{
		name: 'Edit',
		href: '/edit',
		icon: PencilSquareIcon,
		actionBtn: () => console.log('edit'),
	},
];

export default function MenuDrop() {
	const { data: session } = useSession();
	const [user, setUser] = useState(session?.user);

	useEffect(() => {
		setUser(session?.user);
	}, [session]);

	return (
		<Menu as='div' className='btn-nav flex flex-col'>
			<Menu.Button className='flex items-center justify-center gap-2'>
				Profile
				<Image
					src={user?.image ? user?.image : '/images/profil.jpg'}
					alt='profil'
					width={25}
					height={25}
					className='rounded-full'
				/>
			</Menu.Button>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='px-1 py-1'>
						{MenuLinks.map((item) => (
							<Menu.Item key={item.name}>
								<button
									className='group flex w-full items-center rounded-md px-2 py-2 text-sm gap-4 hover:bg-violet-500 hover:text-white'
									onClick={item.actionBtn}
								>
									{item.icon && (
										<item.icon
											className='w-4 h-4 text-violet-500 group-hover:text-white'
											aria-hidden='true'
										/>
									)}
									{item.name}
								</button>
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

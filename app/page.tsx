import { LoginModal, Profil } from '@/components';

export default function Home() {

	return (
		<main className='flex flex-col items-center min-h-screen gap-5 py-10 px-24 relative'>
			<Profil />
			<LoginModal />
		</main>
	);
}

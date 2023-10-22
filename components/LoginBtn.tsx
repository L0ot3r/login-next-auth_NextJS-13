import React from 'react';

interface ILoginBtn {
	title: string;
	action: () => void;
	style?: string;
}

const LoginBtn = ({ title, action, style }: ILoginBtn) => {
	return (
		<button
			type='button'
			onClick={action}
			className={`bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded w-full ${style}`}
		>
			{title}
		</button>
	);
};

export default LoginBtn;

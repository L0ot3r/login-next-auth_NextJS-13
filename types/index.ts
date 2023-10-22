import React from 'react';

export interface IGlobalContext {
	name?: string;
	setName: (name: string) => void;
	userWithEmailAndPwd: UserWithEmailAndPassword;
	setUserWithEmailAndPwd: React.Dispatch<
		React.SetStateAction<UserWithEmailAndPassword>
	>;
	openModalConnect: boolean;
	setOpenModalConnect: (openModalConnect: boolean) => void;
}


export interface ILoginForm {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserWithEmailAndPassword {
	email: string;
	pwd: string;
	firstname?: string;
	lastname?: string;
}

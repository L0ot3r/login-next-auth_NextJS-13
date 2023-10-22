import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

export const createUser = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
};

export const signIn = (email: string, password: string) => {
	signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
		console.log(user);
	}
	).catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	});
}
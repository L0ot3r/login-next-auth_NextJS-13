import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdO443eORMk-1aMH-WYb3x7yTClanNhW0",
  authDomain: "test-auth-de2ec.firebaseapp.com",
  projectId: "test-auth-de2ec",
  storageBucket: "test-auth-de2ec.appspot.com",
  messagingSenderId: "1037422351994",
  appId: "1:1037422351994:web:3ab713643c58f6dc8b8dc3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
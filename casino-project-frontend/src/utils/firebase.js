import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCattnnzlnv5mFeU6jrc1vUGVoWcp64I8",
    authDomain: "casino-86222.firebaseapp.com",
    projectId: "casino-86222",
    storageBucket: "casino-86222.appspot.com",
    messagingSenderId: "430953193108",
    appId: "1:430953193108:web:e06bb5e99e9dd80a725e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
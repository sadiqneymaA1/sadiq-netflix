// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqa1kuemUyZen8DvBH02kS4eIfEyxaodc",
    authDomain: "netflix-eace5.firebaseapp.com",
    projectId: "netflix-eace5",
    storageBucket: "netflix-eace5.appspot.com",
    messagingSenderId: "936924874004",
    appId: "1:936924874004:web:d2e812141edce40024ee01"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
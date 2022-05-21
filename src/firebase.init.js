// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZ8tH1ffaLgUAx_wB3n-MjOKJMMn-rm6Y',
  authDomain: 'green-grocery-delivery.firebaseapp.com',
  projectId: 'green-grocery-delivery',
  storageBucket: 'green-grocery-delivery.appspot.com',
  messagingSenderId: '337571270074',
  appId: '1:337571270074:web:3feffff443e56ded356183',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

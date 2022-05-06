// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyAqIU9FR8sAszBJD_LTs3fsAkqipb4uabo',
  authDomain: 'honkai-tools.firebaseapp.com',
  projectId: 'honkai-tools',
  storageBucket: 'honkai-tools.appspot.com',
  messagingSenderId: '173725083873',
  appId: '1:173725083873:web:d47fb4080443b7cf9b2fa0',
  measurementId: 'G-DKK571WNM9',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, db, analytics, getFirestore };
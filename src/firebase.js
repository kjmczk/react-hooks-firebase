// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD29ojIoAxxWLZZk2w4xjI1AqoXi0rG0iY',
  authDomain: 'react-hooks-firestore-test.firebaseapp.com',
  databaseURL: 'https://react-hooks-firestore-test.firebaseio.com',
  projectId: 'react-hooks-firestore-test',
  storageBucket: 'react-hooks-firestore-test.appspot.com',
  messagingSenderId: '726435971543',
  appId: '1:726435971543:web:43459934002ee3d8'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

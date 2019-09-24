import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAGjgLvHNFxfe5LM3eBHkcErEkrFES2C0c',
  authDomain: 'crmm-application.firebaseapp.com',
  databaseURL: 'https://crmm-application.firebaseio.com',
  projectId: 'crmm-application',
  storageBucket: '',
  messagingSenderId: '943859853433',
  appId: '1:943859853433:web:8363e64d104f07d0eb4ca8',
});

const db = firebase.firestore();

export default db;

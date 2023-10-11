import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCQxYkaDICelhW6FcomxjxTgyWzQlaWCVk",
    authDomain: "linkedin-clone-b2abf.firebaseapp.com",
    projectId: "linkedin-clone-b2abf",
    storageBucket: "linkedin-clone-b2abf.appspot.com",
    messagingSenderId: "689687801279",
    appId: "1:689687801279:web:8e38085f85cfdb2139450a"
  };
const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);
export {db,auth};
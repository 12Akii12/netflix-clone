import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDDHaSDS9mYYYMqfcdsKJJLwLeOs0b7dP4",
    authDomain: "netflix-clone-e51c5.firebaseapp.com",
    projectId: "netflix-clone-e51c5",
    storageBucket: "netflix-clone-e51c5.appspot.com",
    messagingSenderId: "23470633265",
    appId: "1:23470633265:web:18a4269dc1b528bb794010",
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);

export { firebase };
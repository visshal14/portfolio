import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD-OnEg0PiJwx96H8FqvZ7fJQGIPvjkzo",
    authDomain: "vishal-c0796.firebaseapp.com",
    projectId: "vishal-c0796",
    storageBucket: "vishal-c0796.appspot.com",
    messagingSenderId: "135648070728",
    appId: "1:135648070728:web:66ee1faa013c043f295c7d"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
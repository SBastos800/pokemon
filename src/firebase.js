// Your web app's Firebase configuration
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDyYXVg1zu0og7xAsN9OuyL0eJ_K0pCkTg",
    authDomain: "pokemon-f53c3.firebaseapp.com",
    databaseURL: "https://pokemon-f53c3.firebaseio.com",
    projectId: "pokemon-f53c3",
    storageBucket: "pokemon-f53c3.appspot.com",
    messagingSenderId: "86988381336",
    appId: "1:86988381336:web:df1c560f1a7c3d55c744ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;
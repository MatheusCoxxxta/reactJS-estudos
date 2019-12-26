import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZjlYORslKOzgRyewpf02yslM2wk7IdLM",
    authDomain: "eventos-25738.firebaseapp.com",
    databaseURL: "https://eventos-25738.firebaseio.com",
    projectId: "eventos-25738",
    storageBucket: "eventos-25738.appspot.com",
    messagingSenderId: "355075967996",
    appId: "1:355075967996:web:3f2c93afd3aa66538bc079"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
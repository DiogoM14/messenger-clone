import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9Wv8QhYf8LXkf3wRI-m4Kqe5NYLTWoxU",
    authDomain: "facebook-messenger-clone-35b4e.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-35b4e.firebaseio.com",
    projectId: "facebook-messenger-clone-35b4e",
    storageBucket: "facebook-messenger-clone-35b4e.appspot.com",
    messagingSenderId: "656193805801",
    appId: "1:656193805801:web:c4bad452774276837fbf78",
    measurementId: "G-73E6NNY6ZY"
});

const db = firebaseApp.firestore();

export default db;
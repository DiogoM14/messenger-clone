import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATA_BASE_URL,
    projectId: "facebook-messenger-clone-35b4e",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
});

const db = firebaseApp.firestore();

export default db;
import firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDaOyZSMGHtRMz8ze4eu20GT4CuCFrPLKY",
    authDomain: "lotus-fitness.firebaseapp.com",
    databaseURL: "https://lotus-fitness.firebaseio.com",
    projectId: "lotus-fitness",
    storageBucket: "lotus-fitness.appspot.com",
    messagingSenderId: "298181651263"
};

firebase.initializeApp(config);

export default firebase;

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUwf5PofQ_zRBUnnAHXjOZOfx3dZCD2QI",
    authDomain: "challenge-530c9.firebaseapp.com",
    projectId: "challenge-530c9",
    storageBucket: "challenge-530c9.appspot.com",
    messagingSenderId: "248601926849",
    appId: "1:248601926849:web:cbf00b4e4bca9020670840",
    measurementId: "G-2MTTHPP2RP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

// Initialize the database
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
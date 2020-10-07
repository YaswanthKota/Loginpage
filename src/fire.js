import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBUzPaEVdJJyDmgbCnixNhjpx2TsBllO2Q",
    authDomain: "login-page-fc387.firebaseapp.com",
    databaseURL: "https://login-page-fc387.firebaseio.com",
    projectId: "login-page-fc387",
    storageBucket: "login-page-fc387.appspot.com",
    messagingSenderId: "956054860775",
    appId: "1:956054860775:web:8043b84f4928ba23a44342",
    measurementId: "G-K55J4G5HRB"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire
import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN3MyQDpj8zw4aCZwRl3T5Xxtabro4_8o",
    authDomain: "voting-app-22137.firebaseapp.com",
    databaseURL: "https://voting-app-22137-default-rtdb.firebaseio.com",
    projectId: "voting-app-22137",
    storageBucket: "voting-app-22137.appspot.com",
    messagingSenderId: "444936579151",
    appId: "1:444936579151:web:78eab333b32362bdd0e23a",
    measurementId: "G-VJ00KBEGDG"
  };
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCoUP_ZsYahQ99bIewadYnrQbD84YVPzA",
    authDomain: "portfolio-86910.firebaseapp.com",
    databaseURL: "https://portfolio-86910.firebaseio.com",
    projectId: "portfolio-86910",
    storageBucket: "portfolio-86910.appspot.com",
    messagingSenderId: "616604950516",
    appId: "1:616604950516:web:160fc1651c304e97"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
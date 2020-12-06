import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCjZwUTbEKilLsN2mcBuMDnudQxI2jdow0",
  authDomain: "todo-1ba41.firebaseapp.com",
  databaseURL: "https://todo-1ba41.firebaseio.com",
  projectId: "todo-1ba41",
  storageBucket: "todo-1ba41.appspot.com",
  messagingSenderId: "407035377963",
  appId: "1:407035377963:web:b766004030dee5ea02ad6e"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebase.auth();

export { firebaseAuth };

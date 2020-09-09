import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBU70kLa0pWlWFEFFk-kvp0Rf0upiMhZS4",
  authDomain: "thecookbook-5c258.firebaseapp.com",
  databaseURL: "https://thecookbook-5c258.firebaseio.com",
  projectId: "thecookbook-5c258",
  storageBucket: "thecookbook-5c258.appspot.com",
  messagingSenderId: "176789466019",
  appId: "1:176789466019:web:bcd0d3e895e1a771764816",
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
// Initialize Firebase
export { storage };
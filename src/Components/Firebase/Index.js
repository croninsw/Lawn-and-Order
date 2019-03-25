import firebase from "firebase/app"
import "firebase/storage"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbopC9bV3b0h8-Mb6oy29JdoPYZRuK3DE",
    authDomain: "nss-capstone-c30.firebaseapp.com",
    databaseURL: "https://nss-capstone-c30.firebaseio.com",
    projectId: "nss-capstone-c30",
    storageBucket: "nss-capstone-c30.appspot.com",
    messagingSenderId: "861158125087"
  };
  firebase.initializeApp(config)

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }
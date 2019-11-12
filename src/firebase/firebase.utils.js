import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDiAc9AboVRnliKBRF8Evp6gVgy0LZYGQA",
    authDomain: "shop-db-8acff.firebaseapp.com",
    databaseURL: "https://shop-db-8acff.firebaseio.com",
    projectId: "shop-db-8acff",
    storageBucket: "shop-db-8acff.appspot.com",
    messagingSenderId: "107916850242",
    appId: "1:107916850242:web:107850bcbc27529086a9db",
    measurementId: "G-E5YWNKVZDR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
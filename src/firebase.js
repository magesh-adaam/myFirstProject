import firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyADG8MfMF_xRmOqHV3ZeVHzM_e_ew33Txk",
    authDomain: "my-shop-c27cd.firebaseapp.com",
    databaseURL: "https://my-shop-c27cd-default-rtdb.firebaseio.com",
    projectId: "my-shop-c27cd",
    storageBucket: "my-shop-c27cd.appspot.com",
    messagingSenderId: "596590198689",
    appId: "1:596590198689:web:c7994671de2f105f8555e0",
    measurementId: "G-32ZYCB3D3Q"
  };
  // Initialize Firebase
  export const fireDb =  firebase.initializeApp(firebaseConfig);
//   export const fireAnalyt = firebase.analytics();

  export default fireDb.database().ref();
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export const initFire = firebase.initializeApp({
    apiKey: "AIzaSyBCB_FbTx-QPpswTw1MBRWpmTgmSbpQ0_E",
    authDomain: "instagram-clone-df951.firebaseapp.com",
    projectId: "instagram-clone-df951",
    storageBucket: "instagram-clone-df951.appspot.com",
    messagingSenderId: "418764753558",
    appId: "1:418764753558:web:0125d7e1a485dd863550b7"
});

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const firestoreFieldValue = firebase.firestore.FieldValue;
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();
export const storage = firebase.storage();
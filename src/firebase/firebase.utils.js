import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBT1NYBDudDCN0xhEX1OqG_i9QZaxa0oOA",
    authDomain: "crwn-react-b6f8d.firebaseapp.com",
    databaseURL: "https://crwn-react-b6f8d.firebaseio.com",
    projectId: "crwn-react-b6f8d",
    storageBucket: "crwn-react-b6f8d.appspot.com",
    messagingSenderId: "91331008522",
    appId: "1:91331008522:web:9da8c8d887a52df339e7f3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
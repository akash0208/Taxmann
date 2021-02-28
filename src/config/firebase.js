// import firebase from 'firebase';
// const config = {
//     apiKey: "AIzaSyBCHr2piZ808-BMSeI6TqnBgCujeBIw2jI",
//     authDomain: "taxmann-97429.firebaseapp.com",
//     projectId: "taxmann-97429",
//     storageBucket: "taxmann-97429.appspot.com",
//     messagingSenderId: "938484153275",
//     appId: "1:938484153275:web:e66713b6a491fafbb3229e",
//     measurementId: "G-DY1T7TQJXV"
// }
// const Firebase = firebase.initializeApp(config);
// const db = firebase.firestore(Firebase)
// export default db;


import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCHr2piZ808-BMSeI6TqnBgCujeBIw2jI",
    authDomain: "taxmann-97429.firebaseapp.com",
    projectId: "taxmann-97429",
    storageBucket: "taxmann-97429.appspot.com",
    messagingSenderId: "938484153275",
    appId: "1:938484153275:web:e66713b6a491fafbb3229e",
    measurementId: "G-DY1T7TQJXV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
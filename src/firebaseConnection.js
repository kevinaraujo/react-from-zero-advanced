import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/app';

let firebaseConfig = {
    apiKey: "AIzaSyDzWmNTf3MsLpMJ5DAoYANxdxkzTzI3kH4",
    authDomain: "react-app-e409d.firebaseapp.com",
    projectId: "react-app-e409d",
    storageBucket: "react-app-e409d.appspot.com",
    messagingSenderId: "908039182483",
    appId: "1:908039182483:web:8e7850295828444bc69566",
    measurementId: "G-6RLTSLBGZ1"
};
    
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
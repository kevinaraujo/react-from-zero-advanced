import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDzWmNTf3MsLpMJ5DAoYANxdxkzTzI3kH4",
    authDomain: "react-app-e409d.firebaseapp.com",
    databaseURL: "https://react-app-e409d-default-rtdb.firebaseio.com",
    projectId: "react-app-e409d",
    storageBucket: "react-app-e409d.appspot.com",
    messagingSenderId: "908039182483",
    appId: "1:908039182483:web:8e7850295828444bc69566",
    measurementId: "G-6RLTSLBGZ1"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    async register(email, password, name) {
        await app.auth().createUserWithEmailAndPassword(email, password);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('users').child(uid).set({
            name: name
        });
    }

    isInitialized() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        });
    }
}

export default new Firebase();
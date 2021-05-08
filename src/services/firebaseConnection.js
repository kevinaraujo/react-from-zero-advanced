import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyBr2MtIKnTX3esSvq29TulIjUL2lFYxeec",
  authDomain: "call-project-229c6.firebaseapp.com",
  projectId: "call-project-229c6",
  storageBucket: "call-project-229c6.appspot.com",
  messagingSenderId: "1074878085624",
  appId: "1:1074878085624:web:9c6c3169fc358336f17e0d",
  measurementId: "G-G7K8331G7R"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

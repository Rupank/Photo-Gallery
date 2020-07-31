import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4lhkC79fOGl-g5_LY_TeAVV5hO50n8Bw",
    authDomain: "photogallery-b93ca.firebaseapp.com",
    databaseURL: "https://photogallery-b93ca.firebaseio.com",
    projectId: "photogallery-b93ca",
    storageBucket: "photogallery-b93ca.appspot.com",
    messagingSenderId: "72962615588",
    appId: "1:72962615588:web:5cc5c09a78cdb981812bb1",
    measurementId: "G-9H4NZC6JST"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage, projectFirestore, timestamp};

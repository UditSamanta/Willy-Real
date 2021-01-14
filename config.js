import * as firebase from 'firebase'
require('@firebase/firestore')

// var firebaseConfig = {
//     apiKey: "AIzaSyCSvK-SsEwvO7rHrf0WLiqsO0o5S7pI9-8",
//     authDomain: "wily-app-86cec.firebaseapp.com",
//     databaseURL: "https://wily-app-86cec.firebaseio.com",
//     projectId: "wily-app-86cec",
//     storageBucket: "wily-app-86cec.appspot.com",
//     messagingSenderId: "436866087439",
//     appId: "1:436866087439:web:1a3bcf134182eb6559017a"
//   };

   const firebaseConfig = {
    apiKey: "AIzaSyBvlTqPRoJgvR8Ef2hh6_sNSEDzw_w2Elc",
    authDomain: "willy-c9942.firebaseapp.com",
    projectId: "willy-c9942",
    storageBucket: "willy-c9942.appspot.com",
    messagingSenderId: "233293381376",
    appId: "1:233293381376:web:12827dd7a95db48173bde5"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
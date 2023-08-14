const firebaseConfig = {
  apiKey: "AIzaSyA5UNmcWb0oXT9kbZFcA0QWSoAFkZsTROc",
  authDomain: "lets-chat-cf6d7.firebaseapp.com",
  databaseURL: "https://lets-chat-cf6d7-default-rtdb.firebaseio.com",
  projectId: "lets-chat-cf6d7",
  storageBucket: "lets-chat-cf6d7.appspot.com",
  messagingSenderId: "701577999591",
  appId: "1:701577999591:web:134af12c8fd94a6af71e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
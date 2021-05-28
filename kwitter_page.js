//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAeXIJcJRBKTYKjF6baLe8PpeD2hUnU-Tg",
    authDomain: "kwitter-86cd3.firebaseapp.com",
    databaseURL: "https://kwitter-86cd3-default-rtdb.firebaseio.com",
    projectId: "kwitter-86cd3",
    storageBucket: "kwitter-86cd3.appspot.com",
    messagingSenderId: "1030279020362",
    appId: "1:1030279020362:web:25d5b4d6aca96ef6b94bb3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var user_name=localStorage.getItem("user_name");
  var room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
    function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

getData()     

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
  
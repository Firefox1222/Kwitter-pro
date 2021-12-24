
var firebaseConfig = {
      apiKey: "AIzaSyDxaUk5bcS4Ac6D48NjRi5hSQNaST6jnFc",
      authDomain: "kwitter-49428.firebaseapp.com",
      databaseURL: "https://kwitter-49428-default-rtdb.firebaseio.com",
      projectId: "kwitter-49428",
      storageBucket: "kwitter-49428.appspot.com",
      messagingSenderId: "732851207453",
      appId: "1:732851207453:web:ee5eecb271a13d303ef5f4",
      measurementId: "G-L4HME1M4LF"
    };
    firebase.initializeApp(firebaseConfig)
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

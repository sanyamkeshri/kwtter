var firebaseConfig = {
      apiKey: "AIzaSyA6LI8W8p5_fT9SgA6mXdEnHcZVyvi8t0g",
    authDomain: "oh-3fa6a.firebaseapp.com",
    databaseURL: "https://oh-3fa6a-default-rtdb.firebaseio.com",
    projectId: "oh-3fa6a",
    storageBucket: "oh-3fa6a.appspot.com",
    messagingSenderId: "849076726601",
    appId: "1:849076726601:web:0a4d05daf6dabae0dc0898",
    measurementId: "G-9YF1SEQ7LF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  /*
  document.getElementById("addRoombtn").addEventListener("click", () => {
      room_name = document.getElementById("room_name").value;
      if(room_name != null) {
          
          firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
              });
          localStorage.setItem("user_name", room_name);
          window.location = "kwitter_page.html";
      }else {
          window.alert("😔😓 opps!! Error plaese fill the form and try again");
          console.error("😔😓 opps!! Error plaese fill the form and try again");
      }
  });
  */

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
   });
  
      localStorage.setItem("room_name", room_name);
      
      window.location ="kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }

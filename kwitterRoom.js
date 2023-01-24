
 var firebaseConfig = {
  apiKey: "AIzaSyAIojjPeVY_XzDbB5q-VTfCY_r2zrTAc_g",
  authDomain: "quitter-533d3.firebaseapp.com",
  databaseURL: "https://quitter-533d3-default-rtdb.firebaseio.com",
  projectId: "quitter-533d3",
  storageBucket: "quitter-533d3.appspot.com",
  messagingSenderId: "377754599861",
  appId: "1:377754599861:web:4c1316e0fb47e7cf9fd9fc"
};
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "KwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}

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
function addUser() {

  userName = document.getElementById("userName").value;
firebase.database().ref("/").child(userName).update({
  purpose:"adicionar usuário"
})
                               
localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html";
}


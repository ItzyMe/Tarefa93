
//ADD YOUR FIREBASE LINKS
function addUser(){
 user_name=document.getElementById("user_name").value;
 //Enviando dados para o banco de dados
 firebase.database().ref("/").child (user_name).update({ purpose:"adding user" });
    
}
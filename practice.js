
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = { apiKey: "AIzaSyA-L5bJaYj38IueydpdkM8xQ1l7MW56ziw", authDomain: "talkkwiter.firebaseapp.com", databaseURL:
"https://talkkwiter-default-rtdb.firebaseio.com",
projectId: "talkkwiter", storageBucket: "talkkwiter.appspot.com", messagingSenderId: "567592005132", appId: "1:567592005132:web:9fa2473e691501b2b98829" };


// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuário 
function addUser()
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuário"
   })
}
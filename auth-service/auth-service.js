// Authentication service for SPWS. 
// Here will contain the login functions using firebase auth-service.
// This file should be inserted as your first script.
// Note: you also need the firebase SKD in your HTML file and it needed to be first than this file.
// The SDKs needed are:
/* 
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-firestore.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
*/


var firebaseConfig = {
    apiKey: "AIzaSyAbB_Z-BdN0Rn8SYZCVgBKf6z6-zZlcsT8",
    authDomain: "spws-authentication.firebaseapp.com",
    databaseURL: "https://spws-authentication.firebaseio.com",
    projectId: "spws-authentication",
    appId: "1:144417189463:web:e5d6272161b11d4fa2bd12"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Function to check if the user is logged in the system of not.

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in: ', user.email);
    }else{
        console.log('user logged out');
    }
})

// Function to add a new User in the frebase database.
async function createUser(email, password){
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log('User created on: ',cred.user.email);
    })
}
// Function to logout the user in the firebase database.
async function logoutUser(){
    auth.signOut().then((status)=>{
        console.log(status);
        return true;
    })
}
// Function to login a new user in the firebase database.
async function loginUser(email,password){
    auth.signInWithEmailAndPassword(email,password)
        .then(cred => {
            console.log(cred.user);
            return true;
        })
        .catch(err => {
            console.log(err.code);
        })
}
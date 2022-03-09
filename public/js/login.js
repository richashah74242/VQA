const {initializeApp} = require('firebase/app')
const {getAuth, signInWithEmailAndPassword } = require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyDQdq18NlpZkAF659hi-8SxkGa_mSWsMP8",
    authDomain: "vqa1-b77f2.firebaseapp.com",
    projectId: "vqa1-b77f2",
    storageBucket: "vqa1-b77f2.appspot.com",
    messagingSenderId: "424772604561",
    appId: "1:424772604561:web:bf3262169589749eb46530",
    measurementId: "G-2W285E2L04"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth();

function signUp(email, password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

module.exports = signUp
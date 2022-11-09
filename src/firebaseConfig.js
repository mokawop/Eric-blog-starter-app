import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQX_lyQoklYRb7TiKF0_qhaNf9UqOY_Pg",
    authDomain: "blog-codealong-f2da7.firebaseapp.com",
    projectId: "blog-codealong-f2da7",
    storageBucket: "blog-codealong-f2da7.appspot.com",
    messagingSenderId: "878264100280",
    appId: "1:878264100280:web:6082c8de93aed07a19db4d"
  };
  
  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export const db = getFirestore(app)
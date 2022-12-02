import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, getDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCW349owSbKE2zrXUGtWvOSHjjtHmpXMq4",
    authDomain: "vue-blog-system-1d816.firebaseapp.com",
    projectId: "vue-blog-system-1d816",
    storageBucket: "vue-blog-system-1d816.appspot.com",
    messagingSenderId: "9694763401",
    appId: "1:9694763401:web:666fb98cd030c083cf2958"
  };

//init firebase
const firebase = initializeApp(firebaseConfig)

//database setup
const db = getFirestore(firebase)
export {db}
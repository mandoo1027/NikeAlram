 
import { initializeApp } from 'firebase/app';
import { getDatabase ,ref, onValue} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDBJpu7s4rI44xzG0aQc77UcpIc_nEHUgU",
    authDomain: "nikearlam.firebaseapp.com",
    databaseURL: "https://nikearlam-default-rtdb.firebaseio.com",
    projectId: "nikearlam",
    storageBucket: "nikearlam.appspot.com",
    messagingSenderId: "1093533425103",
    appId: "1:1093533425103:web:54ae1f5c7587bf6c59c6ba",
    measurementId: "G-7VZCRJZN9X"
};
 



export function getNikeList(){
const app = initializeApp(firebaseConfig);
    let db = getDatabase(app)
    const starCountRef = ref(db, 'nike');
    return starCountRef
}
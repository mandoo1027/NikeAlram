 
import { initializeApp } from 'firebase/app';
import { getDatabase ,ref, limitToLast,query,onValue } from 'firebase/database'; 
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
 



export async function getNikeList(callbackData){
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const recentPostsRef = await  query(ref(db, 'nike'), limitToLast(100));
    onValue(recentPostsRef, (snapshot) => {
        let dataList = chageArrayList(snapshot)
        callbackData(dataList)
    })
}

function chageArrayList(snapshot){
    let arrayList = []

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        arrayList.push(item);
    });
    return arrayList
}
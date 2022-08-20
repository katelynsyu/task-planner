import { fb } from "./../firebase/config";
import {addDoc, collection} from "firebase/firestore"

const HandleDateClick = (e) => {
    // const db = fb.firestore().collection("events");

    if (e.jsEvent.altKey) { //on mac, option key 
        console.log("Alt Key clicked");
        const title = prompt ('Enter title', e.dateStr)
        const event = {
            title: title ? title : e.dateStr,
            // start: e.dateStr,
            start: `${e.dateStr}T00:00:00`,
            allDay: true,
        }
        addDoc(collection(fb,'events'),event)
        console.log(event.start)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    else
        console.log (e);
}

export default HandleDateClick
import { db } from "./firebase_config";
import { collection, getDocs } from "firebase/firestore";

export const get_gardens = async () => {
    const snap = await getDocs(collection(db, 'gardens'))
    gardens = []
    snap.forEach((doc) => {
        data = doc.data()
        gardens.push({id: doc.id, ...data})
      });

    return gardens
}

export const create_garden = async (name, plants, remind_time) => {
    const collection_ref = db.collection('gardens');
    const document_ref = collection_ref.doc();
    data = {
        name: name,
        plants: plants,
        remind_time: remind_time,
        timestamp: new Date().getTime()
      };
    
    await document_ref.set(data)
}
import { db } from "./firebase_config";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, arrayUnion, getDoc, onSnapshot, arrayRemove } from "firebase/firestore";
import 'firebase/database';
import { getPlantDetailsByName } from "./data_controller";

export const get_gardens = async () => {

    const snap = await getDocs(collection(db, 'gardens'))
    gardens = []
    snap.forEach((doc) => {
        data = doc.data()
        gardens.push({id: doc.id, ...data})
      });

    return gardens
}

export const get_gardens_listener = (callback) => {
  const gardensRef = collection(db, 'gardens');
  const unsubscribe = onSnapshot(gardensRef, (snapshot) => {
    const gardensData = [];
    snapshot.forEach(doc => {
      gardensData.push({ id: doc.id, ...doc.data() });
    });        
    callback(gardensData);
  });
  return unsubscribe;
};

export const create_garden = async (name, plants, remind_time) => {
    const collection_ref = collection(db, 'gardens');
    const document_ref = doc(collection_ref); 
    const data = {
        name: name,
        plants: plants,
        remind_time: remind_time,
        timestamp: new Date().getTime()
    };
    
    await setDoc(document_ref, data);
}

export const delete_garden = async (id) => {
    const gardenRef = doc(collection(db, 'gardens'), id);
    try {
      await deleteDoc(gardenRef);
      console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
}

export const delete_plant = async (garden_id, plant_name) => {
  const gardenRef = doc(collection(db, 'gardens'), garden_id);
  try {
    await updateDoc(gardenRef, {
      plants: arrayRemove(plant_name)
    });
    console.log('Plant successfully deleted!');
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
}

export const add_plant = async (garden_id, plant_name) => {
  const gardenRef = doc(collection(db, 'gardens'), garden_id)
  try {
    await updateDoc(gardenRef, {
      plants: arrayUnion(plant_name)
    });
    console.log("Garden updated")
  } catch (error) {
    console.error('Error adding plant: ', error);
  }
}

export const get_garden_data = async garden_id => {
  const gardenRef = doc(collection(db, 'gardens'), garden_id)
  try {
    const docSnap = await getDoc(gardenRef);
    const gardenData = docSnap.data();
    const plants = gardenData.plants;
    new_data = []
    for (const plant of plants) {
      const data = await getPlantDetailsByName(plant)
      new_data.push(data)
    }
    gardenData.plants = new_data
    return gardenData

  } catch (error) {
    console.error('Error getting plants: ', error);
  }
}
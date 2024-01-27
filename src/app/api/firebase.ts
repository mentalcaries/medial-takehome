import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from './config';

export const getAllItems = async (list: string) => {
  const querySnapshot = await getDocs(collection(db, list));
  return querySnapshot.docs.map((docRef) => {
    const data = docRef.data(); // returns an object with doc data
    data.id = docRef.id; // adds the doc id to the object
    return data;
  });
};

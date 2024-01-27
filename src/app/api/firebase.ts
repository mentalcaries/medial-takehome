import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from './config';

export const getTasks = async () => {
  const tasks: Task[] = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  return querySnapshot.docs.map((docRef) => {
    const data = docRef.data(); // returns an object with doc data
    data.id = docRef.id; // adds the doc id to the object
    return data;
  });
};

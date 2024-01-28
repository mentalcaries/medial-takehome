import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
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


export function streamListItems(list: any, handleSuccess: any) {
	const listCollectionRef = collection(db, list);
	return onSnapshot(listCollectionRef, handleSuccess);
}

export function getTaskData(snapshot) {

	return snapshot.docs
		.map((docRef) => {
			const data = docRef.data();
			data.id = docRef.id;

			return data;
		})
}

// export const testSubs = () => {
//   const q = query(collection(db, 'tasks'));
//   const tasks: Task[] = [];
//   onSnapshot(q, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       tasks.push(doc.data());
//     });
//   });
//   return tasks
// };

export const addNewTask = async (task: Task) => {
  const listCollectionRef = collection(db, 'tasks');
  try {
    await addDoc(listCollectionRef, task);
  } catch (error) {
    console.error('Something went wrong', error);
    return false;
  }
};

export const editTask = async (updatedData: Task) => {
  const { id } = updatedData;
  const listCollectionRef = doc(db, 'tasks', id as string);
  try {
    await setDoc(listCollectionRef, updatedData, { merge: true });
  } catch (error) {
    console.error('Something went wrong', error);
    return false;
  }
};

export const deleteTask = async (taskId: string) => {
  const taskRef = doc(db, 'tasks', taskId as string);
  try {
    await deleteDoc(taskRef);
  } catch (error) {
    console.error('Something went wrong', error);
    return false;
  }
};

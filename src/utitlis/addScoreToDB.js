import db from "../firebase/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const addScoreToDB = async (name, time, levelData) => {
  await addDoc(collection(db, levelData.name), {
    name: name,
    time: time,
  });
};

export default addScoreToDB;

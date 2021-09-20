import db from "../firebase/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const addScoreToDB = async (name, time) => {
  await addDoc(collection(db, "highscores"), {
    name: name,
    time: time,
  });
};

export default addScoreToDB;

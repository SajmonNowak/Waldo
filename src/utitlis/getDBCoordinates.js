import db from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const getDBCoordinates = async (character) => {
  const docRef = doc(db, "coordinates", character);
  const docSnap = await getDoc(docRef);
  let coordinates;

  if (docSnap.exists()) {
    coordinates = docSnap.data();
  } else {
    console.log("No such document!");
  }

  return coordinates;
};

export default getDBCoordinates;

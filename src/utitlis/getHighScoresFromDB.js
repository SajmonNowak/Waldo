import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

const getHighScoresFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, "highscores"));
    let data = [];
querySnapshot.forEach((doc) => {
  data.push( doc.data());
});

return data;
}

export default getHighScoresFromDB
import { useState, useEffect } from "react";
import db from "../firebase/firebase";
import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";

const useFirestore = (col) => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const ref = collection(db, col);
      const q = query(ref, orderBy("time"), limit(10));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setDocs(data);
      console.log(data);
    };
    setData();
  }, [col]);

  return [docs];
};

export default useFirestore;

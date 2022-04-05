import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(projectFirestore, collectionName);
    orderBy("createdAt", "asc");
    onSnapshot(collectionRef, (snap) => {
      let documents = [];

      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
  }, [collectionName]);
  return { docs };
};

export default useFirestore;

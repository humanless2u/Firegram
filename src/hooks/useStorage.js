import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(0);
  const [url, setUrl] = useState(0);

  useEffect(() => {
    const storageRef = ref(projectStorage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;

import { storage } from './firebase'; 
import { ref, uploadBytes } from "firebase/storage";

const uploadFile = (file) => {
  const fileRef = ref(storage, 'files/' + file.name); 
  
  uploadBytes(fileRef, file).then((snapshot) => {
    console.log("Uploaded a file!", snapshot);
  }).catch((error) => {
    console.error("Error uploading file:", error);
  });
};

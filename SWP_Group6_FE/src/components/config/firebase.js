import { storage } from './firebase'; // Đảm bảo đường dẫn chính xác
import { ref, uploadBytes } from "firebase/storage";

const uploadFile = (file) => {
  const fileRef = ref(storage, 'files/' + file.name); // Lưu tệp vào thư mục "files/"
  
  uploadBytes(fileRef, file).then((snapshot) => {
    console.log("Uploaded a file!", snapshot);
  }).catch((error) => {
    console.error("Error uploading file:", error);
  });
};
import { storage } from './firebase'; // Đảm bảo đường dẫn chính xác
import { ref, uploadBytes } from "firebase/storage";

const uploadFile = (file) => {
  const fileRef = ref(storage, 'files/' + file.name); // Lưu tệp vào thư mục "files/"
  
  uploadBytes(fileRef, file).then((snapshot) => {
    console.log("Uploaded a file!", snapshot);
  }).catch((error) => {
    console.error("Error uploading file:", error);
  });
};

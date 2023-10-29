import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";  // your Firebase config file

const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  const storageRef = ref(storage, 'profileImages/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
      // You can use this to display upload progress if you wish
    }, 
    (error) => {
      console.log(error);
    }, 
    () => {
      // When the upload completes
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        // Here you can save the downloadURL to the user's document in Firestore
      });
    }
  );
};

export default handleImageUpload;

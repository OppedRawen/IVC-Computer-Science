import React from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db,storage} from "../utils/firebaseConfig";  // your Firebase config file
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const uploadToFirebaseStorage = async (file) => {
    const storageRef = ref(storage, 'profileImages/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
            (snapshot) => {
                // You can use this to display upload progress if you wish
            }, 
            (error) => {
                console.error('Upload Failed', error);
                reject(error);
            }, 
            async () => {
                // When the upload completes
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('File available at', downloadURL);
                resolve(downloadURL);
            }
        );
    });
};
const uploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file.type == 'image/jpeg' || file.type == 'image/png') {
        let response = await uploadToFirebaseStorage(file); 
        console.log(response);

        uploadProfilePicture({
            variables: {
                profileImage: response,
                username: username,
            },
        });

        // window.location.reload();
    } else {
        console.log('not an image');
    }
}

const handleBioSave = async (bioText) => {
  const userDoc = doc(db, 'users', userId);  // make sure you have the userId available
  await setDoc(userDoc, { bio: bioText }, { merge: true });
};

const UserProfile = () => {

    return (
        <div>
        <textarea onChange={(e) => handleBioSave(e.target.value)} />
        </div>
    );
    };

export default UserProfile;

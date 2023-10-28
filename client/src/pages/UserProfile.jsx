import React,{useState,useEffect} from "react";
import { doc, setDoc, getDoc } from "@firebase/firestore"; 
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebaseConfig";  // your Firebase config file
import { db,storage} from "../utils/firebaseConfig";  // your Firebase config file
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";



const UserProfile = () => {
    const [userId, setUserId] = useState(null);
    const [bio, setBio] = useState("");
    const [displayBio, setDisplayBio] = useState("");
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // This will set the userId once the user is logged in.
        const unsubscribe = onAuthStateChanged(auth, user => {
          if (user) {
            setUserId(user.uid);
            fetchUserData(user.uid);
          }
        });
    
        return () => unsubscribe();
      }, []);

      const fetchUserData = async (uid) => {
        const userDocRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setDisplayBio(docSnap.data().bio);
          setImageUrl(docSnap.data().profileImage);
        }
      };
    const uploadToFirebaseStorage = async (file,storagePath) => {
        const storageRef = ref(storage, storagePath);
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
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
          const storagePath = `profileImages/${userId}/${file.name}`;
          const response = await uploadToFirebaseStorage(file, storagePath); 
          setImageUrl(response);
          const userDoc = doc(db, 'users', userId);
          await setDoc(userDoc, { profileImage: response }, { merge: true });
        } else {
          console.log('not an image');
        }
      };
    
    const handleBioSave = async () => {
        const userDoc = doc(db, 'users', userId);
        await setDoc(userDoc, { bio }, { merge: true });
        setDisplayBio(bio);
      };
    
      return (
        <div>
          {imageUrl && <img src={imageUrl} alt="Profile" width="100" />}
          <input type="file" onChange={handleFileChange} />
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          <button onClick={handleBioSave}>Save Bio</button>
          <p>{displayBio}</p>
        </div>
      );
    };

export default UserProfile;

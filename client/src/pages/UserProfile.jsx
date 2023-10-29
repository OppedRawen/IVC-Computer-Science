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
        // <div>
        //   {imageUrl && <img src={imageUrl} alt="Profile" width="100" />}
        //   <input type="file" onChange={handleFileChange} />
        //   <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        //   <button onClick={handleBioSave}>Save Bio</button>
        //   <p>{displayBio}</p>
        // </div>
        <div className="mx-auto max-w-7xl sm:px-0 lg:px-8">
          <div className="container mx-auto sm:px-6 lg:px-8">
          <div className='rounded-lg bg-white shadow mt-10'>
            {/* banner image */}
          <div className=''>
                        <img className='w-full h-60 object-cover rounded-t-lg' src="https://t4.ftcdn.net/jpg/04/18/89/65/240_F_418896520_a39fztdXigujTwxlfWbvxFAlYplAtfEJ.jpg" alt="Banner" />
                    </div>
          </div>
        {/* profile image */}
        <img className='rounded-full w-24 h-24 lg:ml-32 ml-25 m-auto lg:w-40 lg:h-40 lg:-mt-24 -mt-14' src ={imageUrl} alt="Profile" ></img>
        {/* bio */}
        <div className="text-lg pt-10 pl-10">
          {displayBio}
        </div>
        {/* edit profile image */}
        <div className="mt-10 flex-col lg:flex-row item-center pr-4">
        <label className='px-1 mx-1 mb-2 h-8 p-0 flex item-center text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800'>
      
          <p className="m-auto">Upload Image</p>
        <input hidden type="file" onChange={handleFileChange} />
       
       
        
        </label>

        {/* temporary edit bio */}
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        <button onClick={handleBioSave}>Save Bio</button>
          </div>
          </div>
        </div>

      );
    };

export default UserProfile;

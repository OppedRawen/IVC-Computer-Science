import { getStorage, ref, getDownloadURL } from "@firebase/storage";

const storage = getStorage();

export const getImageURL = async (directory, imageName) => {
    const storageRef = ref(storage, `${directory}/${imageName}`);
    
    try {
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error getting download URL:", error);
        return null;
    }
}

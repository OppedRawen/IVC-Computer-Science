import React, { useState } from 'react';

const ImageUploader = () => {
    const [imageURL, setImageURL] = useState('');
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME; // Replace with your Cloud Name
    const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET; 
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset',  UPLOAD_PRESET); // Replace with your Upload Preset Name

        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setImageURL(data.secure_url);
    }

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            {imageURL && <img src={imageURL} alt="Uploaded content" />}
        </div>
    );
}

export default ImageUploader;
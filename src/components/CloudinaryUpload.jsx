import { useState } from 'react';
import Axios from 'axios';

const CloudinaryUpload = ({ setImageUrls }) => {
  const [imageSelected, setImageSelected] = useState([]);
  const [secureUrls, setSecureUrls] = useState([]);

  const uploadImage = async (event) => {
    event.preventDefault();
    setSecureUrls([]);
    const uploadPromises = imageSelected.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "d8soydn5");
      return Axios.post("https://api.cloudinary.com/v1_1/doqrneqxd/image/upload", formData)
        .then((response) => response.data.secure_url);
    });
  
    try {
      const secureUrls = await Promise.all(uploadPromises);
      setSecureUrls(secureUrls);
      setImageUrls(secureUrls);
      console.log(secureUrls);
    } catch (error) {
      // Handle any errors that might occur during the requests
      console.error("Error uploading images:", error);
    }
  };
  
  return (
    <>
      <div>
        <input type='file' name="files[]" multiple onChange={(event)=>{const filesArray = Array.from(event.target.files);
                                                                        setImageSelected(filesArray);}}/>
        <button onClick={uploadImage}>Upload</button>
        <ul>
          {secureUrls.map((secureUrl, index) => (
            <li key={index}>
              <img
                style={{ width: 200 }}
                src={secureUrl}
                alt={`Image ${index}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CloudinaryUpload;
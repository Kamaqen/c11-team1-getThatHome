import { useState } from 'react';
import Axios from 'axios';
import {Image} from 'cloudinary-react';

const CloudinaryUpload = ({ setImageUrls }) => {
  const [imageSelected, setImageSelected] = useState([]);
  const [secureUrls, setSecureUrls] = useState([]);

  const uploadImage = async (event) => {
    event.preventDefault();
    setSecureUrls([]);
    for (const file of imageSelected) {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "d8soydn5")

      await Axios.post("https://api.cloudinary.com/v1_1/doqrneqxd/image/upload", formData).then((response)=>{
        setSecureUrls((prevSecureUrls) => [...prevSecureUrls, response.data.secure_url]);
      })
    }
    setImageUrls(secureUrls);
    console.log(secureUrls);
  };
  

  return (
    <>
      <div>
        <input type='file' name="files[]" multiple onChange={(event)=>{setImageSelected(event.target.files)}}/>
        <button onClick={uploadImage}>Upload</button>
        <ul>
          {secureUrls.map((secureUrl) => (
            <li key={secureUrl}>
              <Image
                style={{width: 200}}
                cloudName="doqrneqxd"
                publicId={secureUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CloudinaryUpload;
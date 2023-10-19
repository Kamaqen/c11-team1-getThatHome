import { useState } from 'react';
import Axios from 'axios';
import Button from '../Button';
import styled from '@emotion/styled';

const PhotoContainer = styled.div`
  width: 600px;
  height: 136px;
  background-color: #F5F5F6;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CardContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background: #E1E2E1;
    color: #373737;
    width: 120px;
    height: 120px;
    margin-left: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

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
      console.error("Error uploading images:", error);
    }
  };
  
  return (
    <>
      <div>
        <input type='file' name="files[]" multiple onChange={(event)=>{const filesArray = Array.from(event.target.files);
                                                                        setImageSelected(filesArray);}}/>
        <Button onClick={uploadImage}>Upload</Button>
        <p style={{fontSize:"12px", marginBottom:"15px"}}>Only images, max 5MB</p>
        <PhotoContainer>
          {secureUrls.length > 0 ? secureUrls.map((secureUrl, index) => (
            <CardContainer key={index}>
              <img
                style={{ width: 200 }}
                src={secureUrl}
                alt={`Image ${index}`}
              />
            </CardContainer>
          ))
        : <CardContainer>No photos yet</CardContainer>}
        </PhotoContainer>
      </div>
    </>
  )
}

export default CloudinaryUpload;
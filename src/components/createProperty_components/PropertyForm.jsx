import React from 'react';
import styled from '@emotion/styled';
import CloudinaryUpload from './CloudinaryUpload';
import { createProperty } from '../../services/property-services';
import InputSignUp from '../InputSignUpForm';
import Button from '../Button';


const MainBackground = styled.div`
  width: 1440px;
  height: 1096px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #ffffff;
  width: 1200px;
  height: 1096px;
  border-radius: 8px;
  gap: 16px;
`;
const Caption = styled.p`
  font-family: var(--font-secondary);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4000000059604645px;
  text-align: left;
  margin-top: 4px;
  color: #8e8e8e;
`;
const InputSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PropertyForm = () => {
  const userID = sessionStorage.getItem("userId");
  const [formData, setFormData] = React.useState({
    rent_value: '',
    bedrooms: '',
    bathrooms: '',
    property_type: '',
    operation_type: 'rent',
    urls: "",
    description: '',
    address: '',
    pet_friendly: false,
    area: '',
    property_price: '',
    maintenance_price: '',
    is_active: true,
    longitude: '',
    latitude: '',
    user_id: userID
  });
  const [imageUrls, setImageUrls] = React.useState([]);
  const [operationType, setOperationType] = React.useState("rent");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      if (type === "checkbox") {
        return {
          ...prevFormData,
          [name]: checked,
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  };

  const handleRent = () => {
    setOperationType("rent");
    formData.operation_type = "rent";
  };

  const handleSale = () => {
    setOperationType("sale");
    formData.operation_type = "sale";
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.urls = imageUrls;
    createProperty(formData);
    console.log(formData);
  };

  return (
    <>
    <MainBackground>
    {operationType === "rent" ?
    <InputSignUpContainer>
    <h5 className="headline5">Create Property Listing</h5>
    <SignUpForm onSubmit={handleSubmit}>
    <div>
    <p>Operation Type</p>
    <button onClick={handleRent}>Rent</button>
    <button onClick={handleSale}>Sale</button>
    </div>
      <InputSignUp
        label="Address"
        name="address"
        placeholder="start typing to autocomplete"
        value={formData.address}
        onChange={handleChange}
      />
      <InputSignUp
        label="Montly rent"
        name="rent_value"
        type= "number"
        placeholder="2000"
        value={formData.rent_value}
        onChange={handleChange}
      />
      <InputSignUp
        label="Maintenance"
        name="maintenance_price"
        type = "number"
        placeholder="100"
        value={formData.maintenance_price}
        onChange={handleChange}
      />
      <div className="flex flex-row" >
      <label>Property type</label>
      <InputSignUp
        type="radio"
        name="property_type"
        value="apartment"
        checked={formData.property_type === "apartment"}
        onChange={handleChange}
      />
      <label htmlFor="property_type_apartment">Apartment</label>
      <InputSignUp
        type="radio"
        name="property_type"
        value="house"
        checked={formData.property_type === "house"}
        onChange={handleChange}
      />
      <label htmlFor="property_type_house">House</label>
      </div>
      <div className="flex flex-row">
        <InputSignUp
          label="Bedrooms"
          name="bedrooms"
          type="number"
          value={formData.bedrooms}
          onChange={handleChange}
        >
        </InputSignUp>
        <InputSignUp
          label="Bathrooms"
          name="bathrooms"
          type="number"
          value={formData.bathrooms}
          onChange={handleChange}
        >
        </InputSignUp>
        <InputSignUp
          label="Area in m2"
          name="area"
          type="number"
          placeholder="##"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      <InputSignUp
        label="Pet friendly"
        name="pet_friendly"
        type="checkbox"
        checked={formData.pet_friendly}
        onChange={handleChange}
      />
      <p>Allowing pets increases the likehood of renters liking the property by 9001%. <br/>
      It also makes you a better person</p>
      <InputSignUp
        label="About this property"
        name="description"
        type="text"
        placeholder="My apartment is great because..."
        value={formData.description}
        onChange={handleChange}
      />
      <p>Renter will read this first, so highlight any features or important information the apartment has.</p>
      <div>
      <p>Photos</p>
      <p>Upload as many photos as you wish</p>
      <div>
        <CloudinaryUpload setImageUrls={setImageUrls}/>
      </div>
      </div>
      <Button type="submit">Submit</Button>
      </SignUpForm>
      </InputSignUpContainer>
    : ""}
   {operationType === "sale" ? (
    <InputSignUpContainer>
    <h5 className="headline5">Create Property Listing</h5>
    <SignUpForm onSubmit={handleSubmit}>
    <div>
    <p>Operation Type</p>
    <button onClick={handleRent}>Rent</button>
    <button onClick={handleSale}>Sale</button>
    </div>
      <InputSignUp
        label="Address"
        name="address"
        placeholder="start typing to autocomplete"
        value={formData.address}
        onChange={handleChange}
      />
      <InputSignUp
        label="Price"
        name="property_price"
        type="number"
        placeholder="2000"
        value={formData.property_price}
        onChange={handleChange}
      />
      <div className="flex flex-row">
        <label>Property type</label>
        <InputSignUp
          type="radio"
          name="property_type"
          value="apartment"
          checked={formData.property_type === "apartment"}
          onChange={handleChange}
        />
        <label htmlFor="property_type_apartment">Apartment</label>
        <InputSignUp
          type="radio"
          name="property_type"
          value="house"
          checked={formData.property_type === "house"}
          onChange={handleChange}
        />
        <label htmlFor="property_type_house">House</label>
      </div>
      <div className="flex flex-row">
        <InputSignUp
          label="Bedrooms"
          name="bedrooms"
          type="number"
          value={formData.bedrooms}
          onChange={handleChange}
        />
        <InputSignUp
          label="Bathrooms"
          name="bathrooms"
          type="number"
          value={formData.bathrooms}
          onChange={handleChange}
        />
        <InputSignUp
          label="Area in m2"
          name="area"
          type="number"
          placeholder="##"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      <InputSignUp
        label="About this property"
        name="description"
        type="text"
        placeholder="My apartment is great because..."
        value={formData.description}
        onChange={handleChange}
      />
      <p>Renter will read this first, so highlight any features or important information the apartment has.</p>
      <div>
        <p>Photos</p>
        <p>Upload as many photos as you wish</p>
        <div>
          <CloudinaryUpload setImageUrls={setImageUrls}/>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </SignUpForm>
  </InputSignUpContainer>
) : null}
    </MainBackground>
    </>
  );
};

export default PropertyForm;
import React from 'react';
import styled from '@emotion/styled';
import Input from './Inputlau';
import CloudinaryUpload from './CloudinaryUpload';

const StyledLabel = styled.label`
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 4px;
`;

const StyledForm = styled.form`
    width: 823px;
    text-align: start;
    margin-bottom: 32px;
    z-index: 1;
    font-size: ${(props) => props.font};
    line-height: 48px;
    color: ${(props) => (props.color ? props.color : "#373737")};
`;

const PropertyForm = () => {
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
  });
  const [imageUrls, setImageUrls] = React.useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.urls = imageUrls;
    console.log(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="Address"
        name="address"
        placeholder="start typing to autocomplete"
        value={formData.address}
        onChange={handleChange}
      />
      <Input
        label="Montly rent"
        name="rent_value"
        placeholder="2000"
        value={formData.rent_value}
        onChange={handleChange}
      />
      <Input
        label="Maintenance"
        name="maintenance_price"
        placeholder="100"
        value={formData.maintenance_price}
        onChange={handleChange}
      />
      <div className="flex flex-row" >
      <StyledLabel>Property type</StyledLabel>
      <Input
        type="radio"
        name="property_type"
        value="Apartment"
        checked={formData.property_type === "Apartment"}
        onChange={handleChange}
      />
      <label htmlFor="property_type_apartment">Apartment</label>
      <Input
        type="radio"
        name="property_type"
        value="House"
        checked={formData.property_type === "House"}
        onChange={handleChange}
      />
      <label htmlFor="property_type_house">House</label>
      </div>
      <div className="flex flex-row">
        <Input
          label="Bedrooms"
          name="bedrooms"
          type="number"
          value={formData.bedrooms}
          onChange={handleChange}
        >
        </Input>
        <Input
          label="Bathrooms"
          name="bathrooms"
          type="number"
          value={formData.bathrooms}
          onChange={handleChange}
        >
        </Input>
        <Input
          label="Area in m2"
          name="area"
          placeholder="##"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Pet friendly"
        name="pet_friendly"
        type="checkbox"
        checked={formData.pet_friendly}
        onChange={handleChange}
      />
      <p>Allowing pets increases the likehood of renters liking the property by 9001%. <br/>
      It also makes you a better person</p>
      <Input
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
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default PropertyForm;
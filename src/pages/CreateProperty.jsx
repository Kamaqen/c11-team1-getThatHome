import React from 'react';
import styled from '@emotion/styled';
import Radiobox from '../components/Radiobox';
import { useNavigate } from 'react-router-dom';
import { createProperty } from '../services/property-services';
import Section from '../components/Section';
import { InputPropertyFormAddress, InputPropertyFormFacilities, InputPropertyFormPricing, InputPropertyFormTextBox } from '../components/InputPropertyForm';
import CloudinaryUpload from '../components/createProperty_components/CloudinaryUpload';
import Button from '../components/Button';
import { ButtonContainer, InputPropertyFormContainer, RadioBoxGroup, SignUpForm, SquareRadioInput, StyledDiv, StyledLabel } from '../components/createProperty_components/CreatePropertyStyles';
import Input from '../components/Inputs';
import { RiMoneyDollarCircleLine } from "react-icons/ri"

const MoneySymbol = <RiMoneyDollarCircleLine/>

const Rectangle = styled.div`
  width: 1px;
  align-self: stretch;
  background: var(--LightGray, #8E8E8E);
`

const PropertyForm = () => {
  const navigate = useNavigate();
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

  const handleChangeOperation = (name, name2, name3) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: "",
        [name2]: "",
        [name3]: false,
      };
    });
  }

  const handleRent = () => {
    handleChangeOperation("property_price");
    setOperationType("rent");
    formData.operation_type = "rent";
  };

  const handleSale = () => {
    handleChangeOperation("rent_value", "maintenance_price", "pet_friendly");
    setOperationType("sale");
    formData.operation_type = "sale";
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.urls = imageUrls;
    console.log(formData);
    createProperty(formData);
    navigate("/my_properties")
  };

  return (
    <>
    <Section align="flex-start">
    <InputPropertyFormContainer>
    <div className="headline4">Create a property listing</div>
    <SignUpForm onSubmit={handleSubmit}>
    <RadioBoxGroup>
    <div className='overline'>Operation Type</div>
    <ButtonContainer>
    <Radiobox style={{padding:"8px"}} variant="Active" onClick={handleRent}>
      Rent
    </Radiobox>
    <Rectangle/>
    <Radiobox variant="Inactive" onClick={handleSale}>
      Sale
    </Radiobox>
    </ButtonContainer>
    </RadioBoxGroup>
      <Input
        label={"Address"}
        name={"address"}
        placeholder={"start typing to autocomplete"}
        value={formData.address}
        onChange={handleChange}
      />
      { operationType === "rent" ?
      <>
      <Input
        label="Monthly rent"
        name="rent_value"
        type= "number"
        placeholder="2000"
        value={formData.rent_value}
        onChange={handleChange}
        icon1={MoneySymbol}
      />
      <Input
        label="Maintenance"
        name="maintenance_price"
        type = "number"
        placeholder="100"
        value={formData.maintenance_price}
        onChange={handleChange}
      />
      </>
      : 
      <InputPropertyFormPricing
        label="Price"
        name="property_price"
        type="number"
        placeholder="2000"
        value={formData.property_price}
        onChange={handleChange}
      />
      } 
      <StyledLabel>Property type</StyledLabel>
      <StyledDiv>
      <div>
      <SquareRadioInput
        type="radio"
        name="property_type"
        value="apartment"
        checked={formData.property_type === "apartment"}
        onChange={handleChange}
      />
      <label htmlFor="property_type_apartment">Apartment</label>
      </div>
      <div>
      <SquareRadioInput
        type="radio"
        name="property_type"
        value="house"
        checked={formData.property_type === "house"}
        onChange={handleChange}
      />
      <label htmlFor="property_type_house">House</label>
      </div>
      </StyledDiv>
      <div className="flex flex-row">
        <InputPropertyFormFacilities
          label="Bedrooms"
          name="bedrooms"
          type="number"
          value={formData.bedrooms}
          onChange={handleChange}
        />
        <InputPropertyFormFacilities
          label="Bathrooms"
          name="bathrooms"
          type="number"
          value={formData.bathrooms}
          onChange={handleChange}
        />
        <InputPropertyFormFacilities
          label="Area in m2"
          name="area"
          type="number"
          placeholder="##"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      { operationType === "rent" ?
      <>
      <div style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
      <SquareRadioInput
        name="pet_friendly"
        type="checkbox"
        checked={formData.pet_friendly}
        onChange={handleChange}
      />
      <label htmlFor="pet_friendly">Pets allowed</label>
      </div>
      <p style={{fontSize:"12px"}}>Allowing pets increases the likehood of renters liking the property by 9001%. <br/>
      It also makes you a better person</p>
      </>
      : null}
      <InputPropertyFormTextBox
        label="About this property"
        name="description"
        type="text"
        placeholder="My apartment is great because..."
        value={formData.description}
        onChange={handleChange}
      />
      <p style={{fontSize:"12px"}}>Renter will read this first, so highlight any features or important information the apartment has.</p>
      <div>
      <p style={{fontSize:"20px", fontWeight: "600", marginBottom:"15px"}}>Photos</p>
      <p style={{fontSize:"12px", textTransform:"uppercase", fontWeight: "400", marginBottom:"15px"}}>Upload as many photos as you wish</p>
      <div>
        <CloudinaryUpload setImageUrls={setImageUrls}/>
      </div>
      </div>
      <Button type="submit">Publish Property Listing</Button>
      </SignUpForm>
      </InputPropertyFormContainer>
    </Section>
    </>
  );
};

export default PropertyForm;
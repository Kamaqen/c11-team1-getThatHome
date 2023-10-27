import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Radiobox from "../components/Radiobox";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProperties,
  showProperty,
  updateProperty,
} from "../services/property-services";
import Section from "../components/Section";
import {
  InputPropertyFormFacilities,
  InputPropertyFormTextBox,
} from "../components/InputPropertyForm";
import CloudinaryUpload from "../components/createProperty_components/CloudinaryUpload";
import Button from "../components/Button";
import {
  ButtonContainer,
  InputPropertyFormContainer,
  RadioBoxGroup,
  SignUpForm,
  SquareRadioInput,
  StyledDiv,
  StyledLabel,
} from "../components/createProperty_components/CreatePropertyStyles";
import Input from "../components/Inputs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const MoneySymbol = <RiMoneyDollarCircleLine />;

const Rectangle = styled.div`
  width: 1px;
  align-self: stretch;
  background: var(--LightGray, #8e8e8e);
`;

const EditForm = ({ setData }) => {
  const { id } = useParams();
  const propertyId = id;
  const navigate = useNavigate();
  const userID = sessionStorage.getItem("userId");
  const [propertyData, setPropertyData] = useState({});
  const [formData, setFormData] = useState({
    rent_value: 0,
    bedrooms: 0,
    bathrooms: 0,
    property_type: "",
    operation_type: "rent",
    urls: [],
    description: "",
    address: "",
    pet_friendly: false,
    area: "",
    property_price: 0,
    maintenance_price: 0,
    is_active: true,
    longitude: "",
    latitude: "",
    user_id: userID,
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

  const handleChangeOperation = (name, name2) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: "",
        [name2]: "",
      };
    });
  };

  const handleRent = () => {
    handleChangeOperation("property_price");
    setOperationType("rent");
    formData.operation_type = "rent";
  };

  const handleSale = () => {
    handleChangeOperation("rent_value", "maintenance_price");
    setOperationType("sale");
    formData.operation_type = "sale";
  };

  async function handleShowProperty() {
    try {
      const property = await showProperty(propertyId);
      console.log();
      setPropertyData(property);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  }

  const handleUpdateProperty = async () => {
    const updatedProperties = await getProperties();
    setData(updatedProperties);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageUrls.length !== 0) {
      formData.urls = imageUrls;
    }
    console.log(formData);
    await updateProperty(propertyId, formData);
    handleUpdateProperty();
    navigate("/my_properties");
  };

  useEffect(() => {
    handleShowProperty();
  }, []);

  useEffect(() => {
    setFormData(() => ({
      bedrooms: propertyData.bedrooms,
      bathrooms: propertyData.bathrooms,
      address: propertyData.address,
      rent_value: propertyData.rent_value,
      property_type: propertyData.property_type,
      operation_type: propertyData.operation_type,
      urls: propertyData.urls,
      description: propertyData.description,
      pet_friendly: propertyData.pet_friendly,
      area: propertyData.area,
      property_price: propertyData.property_price,
      maintenance_price: propertyData.maintenance_price,
      is_active: propertyData.is_active,
      user_id: propertyData.user_id,
    }));
  }, [propertyData]);

  return (
    <>
      <Section align="flex-start">
        <InputPropertyFormContainer>
          <div className="headline4">Edit your property listing</div>
          {formData.area === "" ? (
            // Display a loading indicator while data is being fetched
            <div>Loading...</div>
          ) : (
            <SignUpForm onSubmit={handleSubmit}>
              <RadioBoxGroup>
                <div className="overline">Operation Type</div>
                <ButtonContainer>
                  <Radiobox
                    style={{ padding: "8px" }}
                    variant={operationType === "rent" ? "Active" : "Inactive"}
                    onClick={handleRent}
                  >
                    Rent
                  </Radiobox>
                  <Rectangle />
                  <Radiobox
                    style={{ padding: "8px", borderRadius: "0px 8px 8px 0px" }}
                    variant={operationType === "sale" ? "Active" : "Inactive"}
                    onClick={handleSale}
                  >
                    Sale
                  </Radiobox>
                </ButtonContainer>
              </RadioBoxGroup>
              {operationType === "rent" ? (
                <>
                  <Input
                    label="Monthly rent"
                    name="rent_value"
                    type="number"
                    placeholder="2000"
                    value={formData.rent_value}
                    onChange={handleChange}
                    width={"356px"}
                    icon1={MoneySymbol}
                  />
                  <Input
                    label="Maintenance"
                    name="maintenance_price"
                    type="number"
                    placeholder="100"
                    value={formData.maintenance_price}
                    onChange={handleChange}
                    icon1={MoneySymbol}
                    width={"356px"}
                  />
                </>
              ) : (
                <Input
                  label="Price"
                  name="property_price"
                  type="number"
                  placeholder="2000"
                  value={formData.property_price}
                  onChange={handleChange}
                  width={"356px"}
                  icon1={MoneySymbol}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                }}
              >
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
              </div>
              <div className="flex flex-row">
                <InputPropertyFormFacilities
                  label="Area in m2"
                  name="area"
                  type="number"
                  placeholder="##"
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>
              {operationType === "rent" ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <StyledLabel>Pet Policy</StyledLabel>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <SquareRadioInput
                        name="pet_friendly"
                        type="checkbox"
                        checked={formData.pet_friendly}
                        onChange={handleChange}
                      />
                      <label htmlFor="pet_friendly">Pets allowed</label>
                    </div>
                    <p style={{ fontSize: "12px" }}>
                      Allowing pets increases the likehood of renters liking the
                      property by 9001%. <br />
                      It also makes you a better person
                    </p>
                  </div>
                </>
              ) : null}
              <InputPropertyFormTextBox
                label="About this property"
                name="description"
                type="text"
                placeholder="My apartment is great because..."
                value={formData.description}
                onChange={handleChange}
              />
              <p style={{ fontSize: "12px" }}>
                Renter will read this first, so highlight any features or
                important information the apartment has.
              </p>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  Photos
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    textTransform: "uppercase",
                    fontWeight: "400",
                    marginBottom: "15px",
                  }}
                >
                  Upload as many photos as you wish
                </p>
                <div>
                  <CloudinaryUpload setImageUrls={setImageUrls} />
                </div>
              </div>
              <Button type="submit">Publish Property Listing</Button>
            </SignUpForm>
          )}
        </InputPropertyFormContainer>
      </Section>
    </>
  );
};

export default EditForm;

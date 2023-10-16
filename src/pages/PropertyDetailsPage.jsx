import styled from "@emotion/styled";
import { ErrorBoundary } from "react-error-boundary";
import HeadersSection from "../components/propertyDetailsPage_components/HeadersSection";
import ContactCard from "../components/ContactCard";
import LocationSection from "../components/propertyDetailsPage_components/LocationSection";
import ErrorFallback from "../components/ErrorFallback";
import AboutSection from "../components/propertyDetailsPage_components/AboutSection";
import DetailsSection from "../components/propertyDetailsPage_components/DetailsSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { showProperty } from "../services/property-services";
import Carousel from "../components/ImagesCarrousell";

const NavBarProv = styled.div`
  position: relative;
  top: 0px;
  height: 72px;
  width: 100%;
  margin: auto;
  background-color: #f48fb1;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SectionProperty = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding: 64px 120px;
  background: white;
`;

const PropertyDetailsPage = () => {
  // const data = JSON.parse(localStorage.getItem("propertiesData"));
  // const id = parseInt(window.location.pathname.split("/")[2]);
  // const property = data?.find((item) => item.id === id);
  const [currentProperty, setCurrentProperty] = useState({});
  const { id } = useParams();

  showProperty(id);

  useEffect(() => {
    showProperty(id).then((res) => {
      console.log(res);
      setCurrentProperty(res);
      localStorage.setItem("propertyData", JSON.stringify(res));
    });
  }, [id]);

  const { urls } = currentProperty;
  console.log(urls);

  const [addressPrimary = "", address1 = "", address2 = ""] = (
    currentProperty?.address || ""
  ).split(",");
  const addressSecundaty = `${address1.trim()}, ${address2.trim()}`;

  return (
    <div className="flex flex-column a-center">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log("hello");
        }}
      >
        <SectionProperty>
          <div className="flex flex-column">
            <Carousel images={urls} />
            <HeadersSection
              addressPrimary={addressPrimary}
              addressSecundaty={addressSecundaty}
              rent_value={currentProperty.rent_value}
              maintenance_price={currentProperty.maintenance_price}
            />
            <DetailsSection
              bed={currentProperty.bed}
              bath={currentProperty.bath}
              area={currentProperty.area}
              pet={currentProperty.pet}
            />
            <AboutSection description={currentProperty?.description} />
            <LocationSection address={addressPrimary} />
          </div>
          <ContactCard login="false" id={id} />
        </SectionProperty>
      </ErrorBoundary>
    </div>
  );
};

export default PropertyDetailsPage;

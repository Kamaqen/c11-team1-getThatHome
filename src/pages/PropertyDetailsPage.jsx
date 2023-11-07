import styled from "@emotion/styled";
import { ErrorBoundary } from "react-error-boundary";
import HeadersSection from "../components/propertyDetailsPage_components/HeadersSection";
import ContactCard from "../components/ContactCard";
import LocationSection from "../components/propertyDetailsPage_components/LocationSection";
import ErrorFallback from "../components/ErrorFallback";
import AboutSection from "../components/propertyDetailsPage_components/AboutSection";
import DetailsSection from "../components/propertyDetailsPage_components/DetailsSection";
import { useParams } from "react-router-dom";
import ImagesCarousel from "../components/ImagesCarousel";

const SectionProperty = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding: 138px 120px;
  background: white;
`;

const PropertyDetailsPage = ({ data, setShowModal }) => {
  const login = sessionStorage.getItem("userId");
  const role = sessionStorage.getItem("userRole");
  // const data = JSON.parse(localStorage.getItem("propertiesData"));
  const { id } = useParams();
  const property = data?.find((item) => item.id == id);

  const [addressPrimary = "", address1 = "", address2 = ""] = (
    property?.address || ""
  ).split(",");
  const addressSecundaty = `${address1.trim()}, ${address2.trim()}`;
  const handleClick = () => {
    console.log("lediste click");
    setShowModal(true);
  };
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
            <ImagesCarousel images={property?.urls} />
            <HeadersSection
              addressPrimary={addressPrimary}
              addressSecundaty={addressSecundaty}
              rent_value={new Intl.NumberFormat().format(property.rent_value)}
              maintenance_price={new Intl.NumberFormat().format(
                property.maintenance_price
              )}
              property_price={new Intl.NumberFormat().format(
                property.property_price
              )}
              operation_type={property.operation_type}
            />
            <DetailsSection
              bed={property.bedrooms}
              bath={property.bathrooms}
              area={property.area}
              pet={property.pet_friendly}
            />
            <AboutSection description={property?.description} />
            <LocationSection address={addressPrimary} />
          </div>
          <ContactCard
            handleClick={handleClick}
            login={login}
            role={role}
            userId={property.user_id}
            propertyId={property.id}
          />
        </SectionProperty>
      </ErrorBoundary>
    </div>
  );
};

export default PropertyDetailsPage;

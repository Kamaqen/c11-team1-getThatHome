import styled from "@emotion/styled";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "../components/Footer";
import ImagesCarrousell from "../components/ImagesCarrousell";
import HeadersSection from "../components/propertyDetailsPage_components/HeadersSection";
import ContactCard from "../components/ContactCard";
import LocationSection from "../components/propertyDetailsPage_components/LocationSection";
import ErrorFallback from "../components/ErrorFallback";
import AboutSection from "../components/propertyDetailsPage_components/AboutSection";
import DetailsSection from "../components/propertyDetailsPage_components/DetailsSection";
import { singleProperty } from "../STORE";

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
    const property = singleProperty;

    const [addressPrimary = "", address1 = "", address2 = ""] = (
        property?.address || ""
    ).split(",");
    const addressSecundaty = `${address1.trim()}, ${address2.trim()}`;

    return (
        <div className="flex flex-column a-center">
            <NavBarProv />
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => {
                    console.log("hello");
                }}>
                <SectionProperty>
                    <div className="flex flex-column">
                        <ImagesCarrousell images={property.urls} />
                        <HeadersSection
                            addressPrimary={addressPrimary}
                            addressSecundaty={addressSecundaty}
                            rent_value={property.rent_value}
                            maintenance_price={property.maintenance_price}
                        />
                        <DetailsSection
                            bed={property.bed}
                            bath={property.bath}
                            area={property.area}
                            pet={property.pet}
                        />
                        <AboutSection description={property?.description} />
                        <LocationSection address={addressPrimary} />
                    </div>
                    <ContactCard login="false" />
                </SectionProperty>
            </ErrorBoundary>
            <Footer page="other" />
        </div>
    );
};

export default PropertyDetailsPage;

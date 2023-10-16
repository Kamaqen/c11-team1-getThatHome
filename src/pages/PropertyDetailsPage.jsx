import styled from "@emotion/styled";
import { ErrorBoundary } from "react-error-boundary";
import ImagesCarrousell from "../components/ImagesCarrousell";
import HeadersSection from "../components/propertyDetailsPage_components/HeadersSection";
import ContactCard from "../components/ContactCard";
import LocationSection from "../components/propertyDetailsPage_components/LocationSection";
import ErrorFallback from "../components/ErrorFallback";
import AboutSection from "../components/propertyDetailsPage_components/AboutSection";
import DetailsSection from "../components/propertyDetailsPage_components/DetailsSection";
import { singleProperty } from "../STORE";
import { useState } from "react";

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

const PropertyDetailsPage = () => {
    const login = sessionStorage.getItem("userId");
    const role = sessionStorage.getItem("userRole");
    const data = JSON.parse(localStorage.getItem("propertiesData"));
    const id = parseInt(window.location.pathname.split("/")[2]);
    const propertyCorrect = data?.find((item) => item.id === id);
    const property = propertyCorrect || singleProperty;
    console.log(property);

    const [addressPrimary = "", address1 = "", address2 = ""] = (
        property?.address || ""
    ).split(",");
    const addressSecundaty = `${address1.trim()}, ${address2.trim()}`;

    return (
        <div className="flex flex-column a-center">
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
                            bed={property.bedrooms}
                            bath={property.bathrooms}
                            area={property.area}
                            pet={property.pet_friendly}
                        />
                        <AboutSection description={property?.description} />
                        <LocationSection address={addressPrimary} />
                    </div>
                    <ContactCard login={login} role={role} />
                </SectionProperty>
            </ErrorBoundary>
        </div>
    );
};

export default PropertyDetailsPage;

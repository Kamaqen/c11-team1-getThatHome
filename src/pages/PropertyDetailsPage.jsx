import styled from "@emotion/styled";
import Footer from "../components/footer";
import ImagesCarrousell from "../components/ImagesCarrousell";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import Maps from "../components/Maps";
import ContactCard from "../components/ContactCard";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";

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
    gap: 64px;
    width: 100%;
    overflow: hidden;
    padding: 64px 120px;
    background: white;
`;
const ProTitle = styled.h3`
    padding: 4px 0;
    font-size: 36px;
`;
const ProPrice = styled.p`
    font-size: 36px;
`;
const ProDetails = styled.p`
    font-size: 20px;
`;
const ProDetails2 = styled.p`
    font-size: 24px;
`;
const ProDetails3 = styled(ProDetails)`
    color: #bf5f82;
    font-weight: 500;
`;
const DivRow = styled.div`
    padding: 16px 32px;
    width: 100%;
    max-width: 766px;
    display: flex;
    justify-content: space-between;
    align-items: top;
`;
const DivCol = styled(DivRow)`
    flex-direction: column;
    gap: 16px;
`;
const DivDetails = styled(DivRow)`
    border-top: 1px solid #bf5f82;
    border-bottom: 1px solid #bf5f82;
`;
const ParrDetails = styled.p`
    padding: 8px 0;
    text-align-last: start;
    line-height: 24px;
    letter-spacing: 0.5px;
`;

const PropertyDetailsPage = () => {
    const data = JSON.parse(localStorage.getItem("propertiesData"));
    const id = parseInt(window.location.pathname.split("/")[2]);
    const property = data?.find((item) => item.id === id);

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
                    <div>
                        <ImagesCarrousell images={property.urls} />
                        <DivRow>
                            <div className="flex flex-column">
                                <ProTitle>{addressPrimary}</ProTitle>
                                <p>{addressSecundaty}</p>
                            </div>
                            <div className="flex flex-column a-end gap-sm">
                                <ProPrice>
                                    <RiMoneyDollarCircleLine />
                                    {property?.rent_value.toLocaleString()}
                                </ProPrice>
                                <ProDetails>
                                    + {property?.maintenance_price}
                                </ProDetails>
                            </div>
                        </DivRow>
                        <DivDetails>
                            <div className="flex a-center j-center">
                                <ProDetails2>
                                    <BiBed style={{ fontSize: "32px" }} />{" "}
                                    {property?.bedrooms} bedrooms
                                </ProDetails2>
                            </div>
                            <div className="flex">
                                <ProDetails2>
                                    <BiBath style={{ fontSize: "32px" }} />{" "}
                                    {property?.bathrooms} bathrooms
                                </ProDetails2>
                            </div>
                            <div className="flex">
                                <ProDetails2>
                                    <BiArea style={{ fontSize: "32px" }} />{" "}
                                    {property?.area} m2
                                </ProDetails2>
                            </div>
                            <div className="flex">
                                <ProDetails2>
                                    <MdPets style={{ fontSize: "32px" }} />{" "}
                                    {property?.pet_friendly
                                        ? "Pets allowed"
                                        : "No pets allowed"}
                                </ProDetails2>
                            </div>
                        </DivDetails>
                        <DivCol>
                            <ProDetails3>About this property</ProDetails3>
                            <ParrDetails>{property?.description}</ParrDetails>
                        </DivCol>
                        <DivCol>
                            <ProDetails3>Location</ProDetails3>
                            <Maps address={addressPrimary} />
                        </DivCol>
                    </div>
                    <ContactCard login="false" />
                </SectionProperty>
            </ErrorBoundary>
            <Footer page="other" />
        </div>
    );
};

export default PropertyDetailsPage;

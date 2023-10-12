import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ImagesCarrousell from "../components/ImagesCarrousell";
import { singleProperty } from "../STORE";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import Maps from "../components/Maps";
import AbsoluteCard from "../components/AbsoluteCard";

const {
    price,
    operation,
    type,
    mantenimiento,
    address,
    bed,
    bath,
    area,
    pet,
    footer,
} = singleProperty;
const address1 = address.split(",")[0];
const address2 = address.split(",")[1];

const NavBarProv = styled.div`
    position: relative;
    top: 0px;
    height: 72px;
    width: 100%;
    margin: auto;
    background-color: #f48fb1;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
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
    return (
        <div className="flex flex-column a-center">
            <NavBarProv />
            <Section>
                <ImagesCarrousell images={singleProperty.img} />
                <DivRow>
                    <div className="flex flex-column">
                        <ProTitle>{address1}</ProTitle>
                        <p>{address2}</p>
                    </div>
                    <div className="flex flex-column a-end gap-sm">
                        <ProPrice>
                            <RiMoneyDollarCircleLine />
                            {singleProperty.price.toLocaleString()}
                        </ProPrice>
                        <ProDetails>+ {mantenimiento}</ProDetails>
                    </div>
                </DivRow>
                <DivDetails>
                    <div className="flex a-center j-center">
                        <ProDetails2>
                            <BiBed style={{ fontSize: "32px" }} /> {bed}{" "}
                            bedrooms
                        </ProDetails2>
                    </div>
                    <div className="flex">
                        <ProDetails2>
                            <BiBath style={{ fontSize: "32px" }} /> {bath}{" "}
                            bathrooms
                        </ProDetails2>
                    </div>
                    <div className="flex">
                        <ProDetails2>
                            <BiArea style={{ fontSize: "32px" }} /> {area} m2
                        </ProDetails2>
                    </div>
                    <div className="flex">
                        <ProDetails2>
                            <MdPets style={{ fontSize: "32px" }} />{" "}
                            {pet ? "Pets allowed" : "No pets allowed"}
                        </ProDetails2>
                    </div>
                </DivDetails>
                <DivCol>
                    <ProDetails3>About this property</ProDetails3>
                    <ParrDetails>
                        3 Bedroom/2 Bathroom apartment available for ASAP
                        move-in! Apartment features hardwood floors throughout,
                        virtual doorman, Central AC/heat, dishwasher and a
                        microwave. The kitchen has custom cabinetry and the
                        living room is big enough to fit a dinner table, a couch
                        and a tv set up.
                    </ParrDetails>
                </DivCol>
                <DivCol>
                    <ProDetails3>Location</ProDetails3>
                    <Maps address={address1} />
                </DivCol>
                <AbsoluteCard login="false" />
            </Section>
            <Footer page="other" />
        </div>
    );
};

export default PropertyDetailsPage;

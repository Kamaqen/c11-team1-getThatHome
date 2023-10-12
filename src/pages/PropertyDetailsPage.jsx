import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ImagesCarrousell from "../components/ImagesCarrousell";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import Maps from "../components/Maps";
import AbsoluteCard from "../components/AbsoluteCard";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-services";

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

// Esta constante se usara una vez que funcione la navegacion
// asi se obtiene el id de la propiedad
// const id= window.location.pathname.split("/")[2];

const PropertyDetailsPage = () => {
    const [data, setData] = useState([]);

    // Esta constante "id" se usa para probar la pagina
    const id = 5;
    const dataLocal = JSON.parse(localStorage.getItem("propertiesData"));
    const {
        address,
        area,
        bathrooms,
        bedrooms,
        description,
        image,
        maintenance_price,
        pet_friendly,
        rent_value,
    } = dataLocal[id - 1];

    // Se divide la address para mostrarla en dos lineas (HTML)
    // Se envia a la API de mapas solo la "addressPrimary"
    const [addressPrimary = "", address1 = "", address2 = ""] = (
        address || ""
    ).split(",");
    const addressSecundaty = `${address1.trim()}, ${address2.trim()}`;

    // Esta variable "images" es provisional, se debe revisar en la API
    // que se envie un array para mapearlo en el carrusel
    const images = [image];

    useEffect(() => {
        getProperties().then((res) => {
            setData(res);
            console.log(res);
            localStorage.setItem("propertiesData", JSON.stringify(res));
        });
    }, []);

    return (
        <div className="flex flex-column a-center">
            <NavBarProv />
            <Section>
                <ImagesCarrousell images={images} />
                <DivRow>
                    <div className="flex flex-column">
                        <ProTitle>{addressPrimary}</ProTitle>
                        <p>{addressSecundaty}</p>
                    </div>
                    <div className="flex flex-column a-end gap-sm">
                        <ProPrice>
                            <RiMoneyDollarCircleLine />
                            {rent_value.toLocaleString()}
                        </ProPrice>
                        <ProDetails>+ {maintenance_price}</ProDetails>
                    </div>
                </DivRow>
                <DivDetails>
                    <div className="flex a-center j-center">
                        <ProDetails2>
                            <BiBed style={{ fontSize: "32px" }} /> {bedrooms}{" "}
                            bedrooms
                        </ProDetails2>
                    </div>
                    <div className="flex">
                        <ProDetails2>
                            <BiBath style={{ fontSize: "32px" }} /> {bathrooms}{" "}
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
                            {pet_friendly ? "Pets allowed" : "No pets allowed"}
                        </ProDetails2>
                    </div>
                </DivDetails>
                <DivCol>
                    <ProDetails3>About this property</ProDetails3>
                    <ParrDetails>{description}</ParrDetails>
                </DivCol>
                <DivCol>
                    <ProDetails3>Location</ProDetails3>
                    <Maps address={addressPrimary} />
                </DivCol>
                <AbsoluteCard login="false" />
            </Section>
            <Footer page="other" />
        </div>
    );
};

export default PropertyDetailsPage;

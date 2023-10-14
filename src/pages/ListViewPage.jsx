import Section from "../components/Section";
import Footer from "../components/footer";
import styled from "@emotion/styled";
import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-services";
import FiltersBar from "../components/FiltersBar";

const NavBarProv = styled.div`
    position: relative;
    top: 0px;
    height: 72px;
    width: 100%;
    margin: auto;
    background-color: #f48fb1;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;
const StyledDiv = styled.div`
    display: flex;
    padding: 32px;
    background: blue;
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    padding: 32px;
    row-gap: 32px;
    column-gap: 64px;
`;
const ListViewPage = () => {
    const [data, setData] = useState();
    const [filter, setFilter] = useState({
        price: { priceMin: "", priceMax: "" },
        type: "all",
        bedrooms: "any",
        bathrooms: "any",
        pet_friendly: true,
        area: { areaMin: "", areaMax: "" },
        operation_type: "all",
    });
    useEffect(() => {
        getProperties().then((res) => setData(res));
        localStorage.setItem("properties", JSON.stringify(data));
    }, []);
    const handleClick = (type, value) => {
        console.log("le diste click a ", type, value);
    };

    return (
        <div className="flex flex-column a-center">
            <NavBarProv />
            <Section>
                <FiltersBar handleClick={handleClick} />
                <StyledDiv>
                    <CardContainer>
                        {data?.map((item) => (
                            <CardComponent
                                key={item.id}
                                img={item.urls}
                                price={item.rent_value}
                                operation={item.operation_type}
                                type={item.property_type}
                                address={item.address}
                                bed={item.bedrooms}
                                bath={item.bathrooms}
                                area={item.area}
                                pet={item.pet_friendly}
                            />
                        ))}
                    </CardContainer>
                </StyledDiv>
            </Section>
            <Footer page="other" />
        </div>
    );
};

export default ListViewPage;

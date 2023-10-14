import Section from "../components/Section";
import Footer from "../components/footer";
import styled from "@emotion/styled";
import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-services";
import FilterBar from "../components/filter_modal_components/FilterBar";

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

    useEffect(() => {
        if (localStorage.getItem("propertiesData")) {
            setData(JSON.parse(localStorage.getItem("propertiesData")));
            console.log("si hay data en el local storage");
        }
        getProperties().then((res) => {
            console.log(" no hay data en el local storage");
            setData(res);
            localStorage.setItem("propertiesData", JSON.stringify(res));
        });
    }, []);

    return (
        <div className="flex flex-column a-center">
            <NavBarProv />
            <Section>
                <FilterBar />
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

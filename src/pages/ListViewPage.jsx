import Section from "../components/Section";
import styled from "@emotion/styled";
import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-services";
import FilterBar from "../components/listViewPage_components/FilterBar";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 1130px;
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px 0px;
    row-gap: 32px;
    column-gap: 64px;
`;
const ListViewPage = () => {
    const [originalData, setOriginalData] = useState([]);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({});

    useEffect(() => {
        getProperties().then((res) => {
            setOriginalData(res);
            setData(res);
            console.log("Se cargó el data del servicio");
        });
        const filterLocal = JSON.parse(localStorage.getItem("filter"));
        if (filterLocal) {
            setFilter(filterLocal);
            console.log("Se cargó el filter del localStorage");
        }
    }, []);

    useEffect(() => {
        let filteredData = originalData;

        if (filter && Object.keys(filter).length > 0) {
            filteredData = originalData.filter((item) => {
                let result = true;
                if (filter.operation_type) {
                    result =
                        result && item.operation_type === filter.operation_type;
                }
                if (filter.property_type.length) {
                    result =
                        result &&
                        filter.property_type.includes(item.property_type);
                }
                if (filter.address) {
                    result =
                        result &&
                        item.address
                            .toLowerCase()
                            .includes(filter.address.toLowerCase());
                }
                if (filter.bedrooms) {
                    result = result && item.bedrooms >= filter.bedrooms;
                }
                if (filter.bathrooms) {
                    result = result && item.bathrooms >= filter.bathrooms;
                }
                if (filter.pet_friendly) {
                    result =
                        result && item.pet_friendly === filter.pet_friendly;
                }
                if (filter.price.length) {
                    result =
                        result &&
                        item.rent_value >= filter.price[0] &&
                        item.rent_value <= filter.price[1];
                }
                return result;
            });
        }
        setData(filteredData);
    }, [filter, originalData]);

    const DataLength = data?.length;

    return (
        <Section align="flex-start">
            <div className="flex flex-column a-center">
                <StyledDiv>
                    <FilterBar setFilter={setFilter} />
                    <p className="headline6 mt-md self-start ">
                        {DataLength} Properties found
                    </p>

                    <CardContainer>
                        {data?.map((item) => (
                            <Link
                                key={item.id}
                                to={`/property_details/${item.id}`}
                                style={{ textDecoration: "none" }}>
                                <CardComponent
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
                            </Link>
                        ))}
                    </CardContainer>
                </StyledDiv>
            </div>{" "}
        </Section>
    );
};

export default ListViewPage;

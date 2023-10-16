import Section from "../components/Section";
import styled from "@emotion/styled";
import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";
import { getProperties } from "../services/property-services";
import FilterBar from "../components/listViewPage_components/FilterBar";

// const NavBarProv = styled.div`
//     position: relative;
//     top: 0px;
//     height: 72px;
//     width: 100%;
//     margin: auto;
//     background-color: #f48fb1;
//     box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
//`;
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
    const [filter, setFilter] = useState();

    useEffect(() => {
        const fetchData = async () => {
            let storedData = localStorage.getItem("propertiesData");

            if (storedData) {
                setData(JSON.parse(storedData));
                console.log("Se cargaron datos del localStorage.");
            } else {
                try {
                    const apiData = await getProperties();
                    setData(apiData);
                    localStorage.setItem(
                        "propertiesData",
                        JSON.stringify(apiData)
                    );
                    console.log(
                        "Se cargaron datos desde la API y se almacenaron en el localStorage."
                    );
                } catch (error) {
                    console.error("Error al obtener datos de la API: ", error);
                }
            }
        };

        fetchData();
    }, []);

    console.log(filter);

    useEffect(() => {
        if (data && filter) {
            const filteredData = data.filter((item) => {
                const priceInRange =
                    !filter.price.length ||
                    ((filter.price[0] === "" ||
                        item.rent_value >= parseInt(filter.price[0])) &&
                        (filter.price[1] === "" ||
                            item.rent_value <= parseInt(filter.price[1])));

                const isPropertyTypeValid =
                    !filter.property_type.length ||
                    (filter.property_type.length === 1 &&
                        filter.property_type.includes(item.property_type));

                const bedroomsMatch =
                    !filter.bedrooms ||
                    item.bedrooms === parseInt(filter.bedrooms);
                const bathroomsMatch =
                    !filter.bathrooms ||
                    item.bathrooms === parseInt(filter.bathrooms);
                const petFriendlyMatch =
                    !filter.pet_friendly ||
                    item.pet_friendly === filter.pet_friendly;

                const areaInRange =
                    !filter.area ||
                    ((!filter.area.min ||
                        item.area >= parseInt(filter.area.min)) &&
                        (!filter.area.max ||
                            item.area <= parseInt(filter.area.max)));

                return (
                    priceInRange &&
                    isPropertyTypeValid &&
                    bedroomsMatch &&
                    bathroomsMatch &&
                    petFriendlyMatch &&
                    areaInRange
                );
            });

            setData(filteredData);
            console.log("Se filtraron los datos:", filteredData);
        }
    }, [filter]);

    return (
        <div className="flex flex-column a-center">
            <Section>
                <FilterBar filter={filter} setFilter={setFilter} />
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
        </div>
    );
};

export default ListViewPage;

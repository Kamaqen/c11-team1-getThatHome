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
    max-width: 1130px;
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
    const DataLength = data?.length;

    return (
        <Section align="flex-start">
            <div className="flex flex-column a-center">
                <StyledDiv>
                    <FilterBar filter={filter} setFilter={setFilter} />
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

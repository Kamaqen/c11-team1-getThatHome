import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getSavedProperties } from "../../services/user-properties-services";
import Section from "../Section";
import CardComponent from "../CardComponent";

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
const Favorites = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem("savedPropertiesData")) {
      setData(JSON.parse(localStorage.getItem("savedPropertiesData")));
    }
    getSavedProperties().then((res) => {
      setData(res);
      localStorage.setItem("savedPropertiesData", JSON.stringify(res));
    });
  }, []);

  return (
    <div className="flex flex-column a-center">
      <Section>
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

export default Favorites;
// import { Link } from "react-router-dom";
import CardComponent from "../CardComponent";
import styled from "@emotion/styled";
import CardList from "../Cardlist";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 0px;
  row-gap: 32px;
  column-gap: 64px;
`;

export const ActiveProperties = ({ data, onClose }) => {
  const activeProperties = data.filter(
    (property) => property.is_active === true
  );

  const DataLength = activeProperties?.length;

  return (
    <div>
      <CardList length={DataLength}>
        {activeProperties?.map((item) => (
          <CardComponent
            key={item.id}
            id={item.id}
            img={item.urls}
            description={item.description}
            property_price={item.property_price}
            maintenance={item.maintenance_price}
            rent={item.rent_value}
            operation={item.operation_type}
            type={item.property_type}
            address={item.address}
            bed={item.bedrooms}
            bath={item.bathrooms}
            area={item.area}
            pet={item.pet_friendly}
            userId={item.user_id}
            active={item.is_active}
            footer={"footer"}
            onClose={onClose}
          />
        ))}
      </CardList>
    </div>
  );
};

import { Link } from "react-router-dom";
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

export const ActiveProperties = ({ data }) => {
  const activeProperties = data.filter(
    (property) => property.is_active === true
  );

  const DataLength = activeProperties?.length;

  return (
    <div>
      <CardList length={DataLength}>
        {activeProperties?.map((item) => (
          <Link
            key={item.id}
            to={`/property_details/${item.id}`}
            style={{ textDecoration: "none" }}
          >
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
      </CardList>
    </div>
  );
};

import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const DivRow = styled.div`
  padding: 16px 0px;
  width: 100%;
  margin: auto;
  max-width: 766px;
  display: flex;
  justify-content: space-between;
  align-items: top;
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
const HeadersSection = ({
  addressPrimary,
  addressSecundaty,
  rent_value,
  maintenance_price,
  property_price,
}) => {
  return (
    <DivRow>
      <div className="flex flex-column">
        <ProTitle>{addressPrimary}</ProTitle>
        <p>{addressSecundaty}</p>
      </div>
      <div className="flex flex-column a-end gap-sm">
        <ProPrice>
          <RiMoneyDollarCircleLine />
          {rent_value || property_price}
        </ProPrice>
        <ProDetails>
          {maintenance_price ? `+ ${maintenance_price}` : ""}
        </ProDetails>
      </div>
    </DivRow>
  );
};

export default HeadersSection;

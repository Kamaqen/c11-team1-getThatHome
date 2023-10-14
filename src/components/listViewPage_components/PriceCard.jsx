import styled from "@emotion/styled";
import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";

const StyledInput = styled.input`
    width: 102px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--Pink, #f48fb1);
`;
const PriceCard = ({ onRequestClose }) => {
    return (
        <FilterCardContainer type="PriceCard">
            <p className="overline">PRICE Range</p>{" "}
            <div className="flex gap-sm a-center mb-md">
                <StyledInput type="text" placeholder="Min" />
                <p> - </p>
                <StyledInput type="text" placeholder="Max" />
            </div>
            <Button
                variant="Primary"
                size="sm"
                onClick={onRequestClose}
                style={{ alignSelf: "flex-end" }}>
                done
            </Button>
        </FilterCardContainer>
    );
};

export default PriceCard;

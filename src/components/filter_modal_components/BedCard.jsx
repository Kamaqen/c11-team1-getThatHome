import styled from "@emotion/styled";
import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";

const ButtonsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 36px;
    margin-top: 8px;
    background: green;
    border-radius: 8px;
    border: 1px solid var(--LightGray, #8e8e8e);
    overflow: hidden;
`;

const ButtonSmall = styled.button`
    background: white;
    color: #616161;
    width: 50;
    height: 36px;
    padding: 8px;
    font-size: 14px;
    border: none;
    &:hover {
        background: var(--Pink, #f48fb1);
        color: white;
    }
    &:focus {
        background: var(--Pink, #f48fb1);
        color: white;
    }
`;
const BedCard = ({ onRequestClose }) => {
    return (
        <FilterCardContainer type="BedCard">
            <p className="overline">beds</p>
            <ButtonsDiv>
                {["any", "1+", "2+", "3+", "4+"].map((item, index) => (
                    <ButtonSmall key={index}>{item}</ButtonSmall>
                ))}
            </ButtonsDiv>
            <p className="overline">baths</p>
            <ButtonsDiv className="mb-md">
                {["any", "1+", "2+", "3+", "4+"].map((item, index) => (
                    <ButtonSmall key={index}>{item}</ButtonSmall>
                ))}
            </ButtonsDiv>
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

export default BedCard;

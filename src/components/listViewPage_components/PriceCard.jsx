import styled from "@emotion/styled";
import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";
import { useState, useEffect } from "react";

const StyledInput = styled.input`
    width: 102px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--Pink, #f48fb1);
`;
const PriceCard = ({ onRequestClose, handleSetParams, filter }) => {
    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");

    const handleMinInputChange = (e) => {
        setMinValue(e.target.value);
    };
    const handleMaxInputChange = (e) => {
        setMaxValue(e.target.value);
    };
    const handleClicked = (e) => {
        e.preventDefault();
        handleSetParams("price", [minValue, maxValue]);
        onRequestClose();
    };

    return (
        <FilterCardContainer type="PriceCard">
            <p className="overline">PRICE Range</p>{" "}
            <form onSubmit={handleClicked}>
                <div className="flex gap-sm a-center mb-md">
                    <StyledInput
                        type="text"
                        placeholder="Min"
                        value={minValue}
                        onChange={handleMinInputChange}
                    />
                    <p> - </p>
                    <StyledInput
                        type="text"
                        placeholder="Max"
                        value={maxValue}
                        onChange={handleMaxInputChange}
                    />
                </div>
                <Button
                    variant="Primary"
                    size="sm"
                    type="submit"
                    style={{ alignSelf: "flex-end" }}>
                    done
                </Button>
            </form>
        </FilterCardContainer>
    );
};

export default PriceCard;

import styled from "@emotion/styled";
import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";
import { useState } from "react";
import Input from "../Inputs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

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
        if (minValue !== "" && maxValue !== "") {
            handleSetParams("price", [parseInt(minValue), parseInt(maxValue)]);
        }
        onRequestClose();
    };

    return (
        <FilterCardContainer type="PriceCard">
            <p className="overline">PRICE Range</p>{" "}
            <form onSubmit={handleClicked} className="flex flex-column">
                <div className="flex gap-sm a-center mb-md">
                    <Input
                        type="text"
                        placeholder="Min"
                        value={minValue}
                        onChange={handleMinInputChange}
                        icon1={<RiMoneyDollarCircleFill />}
                    />
                    <p> - </p>
                    <Input
                        type="text"
                        placeholder="Max"
                        value={maxValue}
                        onChange={handleMaxInputChange}
                        icon1={<RiMoneyDollarCircleFill />}
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

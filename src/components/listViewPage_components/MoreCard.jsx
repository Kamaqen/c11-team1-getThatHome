import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledInput = styled.input`
    width: 102px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--Pink, #f48fb1);
`;
const MoreCard = ({ onRequestClose, handleSetParams }) => {
    const [minArea, setMinArea] = useState("");
    const [maxArea, setMaxArea] = useState("");

    const handleCheck = (e) => {
        if (e.target.checked) {
            handleSetParams("pet_friendly", true);
        } else {
            handleSetParams("pet_friendly", false);
        }
    };

    const handleMinInputChange = (e) => {
        setMinArea(e.target.value);
    };
    const handleMaxInputChange = (e) => {
        setMaxArea(e.target.value);
    };
    const handleClicked = (e) => {
        e.preventDefault();
        handleSetParams("area", [minArea, maxArea]);
        onRequestClose();
    };

    return (
        <FilterCardContainer type="MoreCard">
            <div className="flex ">
                <div>
                    <input
                        className="check"
                        type="checkbox"
                        id="pets"
                        onChange={handleCheck}
                    />
                    <label className="gray" htmlFor="pets">
                        Pets Allowed
                    </label>
                </div>
            </div>
            <div>
                <p className="overline">Area in m2</p>
                <div className="flex gap-sm a-center mb-md">
                    <StyledInput
                        type="text"
                        placeholder="Min"
                        onChange={handleMinInputChange}
                    />
                    <StyledInput
                        type="text"
                        placeholder="Max"
                        onChange={handleMaxInputChange}
                    />
                </div>
                <Button variant="Primary" size="sm" onClick={handleClicked}>
                    done
                </Button>
            </div>
        </FilterCardContainer>
    );
};

export default MoreCard;

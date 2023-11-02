import React from "react";
import styled from "@emotion/styled";

const StyledSelect = styled.select`
    width: 200px;
    padding: 8px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: #8d8b8b;
    letter-spacing: 1.2px;
`;

const StyledOption = styled.option`
    font-size: 16px;
    font-weight: 300px;
`;
const StyledLabel = styled.label`
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.5px;
`;

const SelectLanding = ({ type, label, options, onChange }) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className="flex flex-column a-start">
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledSelect name={type} id={type} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <StyledOption key={index} value={option}>
                        {option}
                    </StyledOption>
                ))}
            </StyledSelect>
        </div>
    );
};

export default SelectLanding;

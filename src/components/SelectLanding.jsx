import React from "react";
import styled from "@emotion/styled";

const StyledSelect = styled.select`
    width: 200px;
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: #333;
`;

const StyledOption = styled.option`
    color: red;
    font-size: 16px;
    font-weight: 300px;
`;
const StyledLabel = styled.label`
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.5px;
`;
const StyledDiv = styled.div`
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 2px solid #e1e2e1;
    margin-right: 4px;
`;

const SelectLanding = ({ type, label, options, onChange }) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <StyledDiv>
            <StyledLabel htmlFor={type}>{label}</StyledLabel>
            <StyledSelect name={type} id={type} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <StyledOption key={index} value={option}>
                        {option}
                    </StyledOption>
                ))}
            </StyledSelect>
        </StyledDiv>
    );
};

export default SelectLanding;

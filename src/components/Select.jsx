import React from "react";
import styled from "@emotion/styled";
import "../styles/typography.css";
import { RiCheckFill } from "react-icons/ri";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { GrRadialSelected } from "react-icons/gr";
import { GrRadial } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const checkedtrueIcon = <RiCheckFill />;
const checkedfalseIcon = <RiCheckboxBlankLine />;
const selectedtrueIcon = <GrRadialSelected />;
const selectedfalseIcon = <GrRadial />;
const closelineIcon = <IoMdClose />;
const arrowdownslineIcon = <RiArrowDownSLine />;

const SelectTag = styled.div`
    display: inline-flex;
    padding: 4px 8px;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: #f48fb126;
`;

const RadioButtons = styled.input`
    width: 20px;
    height: 20px;
    stroke-width: 1px;
    stroke: #f48fb1;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    padding: 2px;
    align-items: flex-start;
    gap: 10px;
    border: 1px solid #f48fb1;
    background: #fff;
`;
const MultiSelectText = styled.div`
    font-size: ${(props) => (props.text ? props.text : "10px")};
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;
const MultiSelectInput = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #f48fb1;
    background: #fff;
`;

const MultiselectOption = styled.div`
    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px #00000040;
    background: #fff;
`;

const OptionCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

const MultiSelect = ({ title, selectText, options }) => {
    return (
        <>
            <MultiSelectText>{title}</MultiSelectText>
            <MultiSelectInput className="">
                {selectText}

                {arrowdownslineIcon}
            </MultiSelectInput>
        </>
    );
};

export default MultiSelect;

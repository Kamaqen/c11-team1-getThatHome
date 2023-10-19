import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import { createPortal } from "react-dom";
import Button from "../Button";
import Input from "../Inputs";

const StyledBar = styled.div`
    width: 518px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 40px;
    gap: 8px;
    justify-content: center;
`;
const StyledSelect = styled.select`
    box-sizing: border-box;
    display: flex;
    width: 185px;
    height: 40px;
    padding: 8px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 0px;
    border: 1px solid #f48fb1;
    background: white;
    font-size: 16px;
    color: #373737;
    :hover {
        border: 1px solid #bf5f82;
    }
    :focus-within {
        border: 1px solid #bf5f82;
    }
    ::placeholder {
        color: #8e8e8e;
    }
`;
const StyledDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px;
    gap: 16px;
`;

const FilterBar = ({ setFilter, filter }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCardType, setSelectedCardType] = useState(null);
    const [filterParams, setFilterParams] = useState({
        area: "",
        bedrooms: "",
        bathrooms: "",
        operation_type: "",
        pet_friendly: false,
        price: [],
        property_type: [],
    });

    useEffect(() => {
        setFilter(filterParams);
    }, [filterParams, setFilter]);

    const handleSetParams = (type, value) => {
        setFilterParams({ ...filterParams, [type]: value });
    };
    const openModal = (type) => {
        setSelectedCardType(type);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedCardType(null);
        setIsModalOpen(false);
    };
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "sale") {
            setFilterParams((prevFilter) => ({
                ...prevFilter,
                operation_type: "sale",
            }));
        } else if (selectedValue === "rent") {
            setFilterParams((prevFilter) => ({
                ...prevFilter,
                operation_type: "rent",
            }));
        }
    };

    const { price, bedrooms, bathrooms, property_type } = filterParams;

    const textButtonPrice = () => {
        if (price.length === 0) {
            return "Price";
        }
        const minPrice = price[0]
            ? isNaN(price[0])
                ? ">="
                : `$${(price[0] / 1000).toFixed(1)}K`
            : ">=";
        const maxPrice = price[1]
            ? isNaN(price[1])
                ? ">="
                : `$${(price[1] / 1000).toFixed(1)}K`
            : ">=";
        return `${minPrice} - ${maxPrice}`;
    };

    const textButtonProperty = () => {
        if (property_type.length === 0) {
            return "Property";
        }
        if (property_type.length === 1) {
            return property_type[0] === "apartments" ? "Apartment" : "Houses";
        }
        if (property_type.length === 2) {
            return "Houses & Apartments";
        }
    };

    const textButtonBed = () => {
        if (bedrooms.length === 0 && bathrooms.length === 0) {
            return "Beds & Baths";
        }
        const beds = bedrooms ? bedrooms : "0";
        const baths = bathrooms ? bathrooms : "0";
        return `${beds}+ BD, ${baths}+ BA`;
    };

    return (
        <StyledDiv>
            <Input type="text" placeholder="Search by address" width="240px" />
            <StyledBar>
                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="PriceCard"
                        size="def"
                        onClick={() => openModal("PriceCard")}>
                        {textButtonPrice()}
                    </Button>
                </div>

                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="PropCard"
                        size="def"
                        onClick={() => openModal("PropCard")}>
                        {textButtonProperty()}
                    </Button>
                </div>
                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="BedCard"
                        size="def"
                        onClick={() => openModal("BedCard")}>
                        {textButtonBed()}
                    </Button>
                </div>
                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="MoreCard"
                        size="def"
                        onClick={() => openModal("MoreCard")}
                        icon2="true">
                        More
                    </Button>
                </div>

                {isModalOpen &&
                    createPortal(
                        <FilterModal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Filter Modal"
                            ariaHideApp={false}
                            card={selectedCardType}
                            handleSetParams={handleSetParams}
                            filter={filter}
                        />,
                        document.body
                    )}
            </StyledBar>
            <StyledSelect name="" id="" onChange={handleSelectChange}>
                <option default value="all">
                    Select an option
                </option>
                <option value="sale">Buying</option>
                <option value="rent">Renting</option>
            </StyledSelect>
        </StyledDiv>
    );
};

export default FilterBar;

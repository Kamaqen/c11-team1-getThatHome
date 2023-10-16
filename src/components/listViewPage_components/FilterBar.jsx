import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import { createPortal } from "react-dom";
import Button from "../Button";
import Input from "../Inputs";

const StyledBar = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 40px;
    gap: 8px;
    justify-content: center;
`;
const StyledSelect = styled.select`
    box-sizing: border-box;
    display: flex;
    width: 356px;
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
    padding: 0px;
`;

const FilterBar = ({ setFilter, filter }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCardType, setSelectedCardType] = useState(null);
    const [filterParams, setFilterParams] = useState({
        price: [],
        property_type: "",
        bedrooms: "",
        bathrooms: "",
        pet_friendly: false,
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

    return (
        <StyledDiv>
            <Input type="text" placeholder="Search by address" />
            <StyledBar>
                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="PriceCard"
                        size="def"
                        onClick={() => openModal("PriceCard")}>
                        Price
                    </Button>
                </div>

                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="PropCard"
                        size="def"
                        onClick={() => openModal("PropCard")}>
                        Property
                    </Button>
                </div>
                <div className="flex a-center j-center">
                    <Button
                        variant="Primary"
                        id="BedCard"
                        size="def"
                        onClick={() => openModal("BedCard")}>
                        Beds & Baths
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
            <StyledSelect name="" id="">
                <option default value="all">
                    Buying & Renting
                </option>
                <option value="">Buying</option>
                <option value="">Renting</option>
            </StyledSelect>
        </StyledDiv>
    );
};

export default FilterBar;

import styled from "@emotion/styled";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { createPortal } from "react-dom";
import Button from "../Button";

const StyledBar = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 40px;
    gap: 8px;
    justify-content: center;
`;

const FilterBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCardType, setSelectedCardType] = useState(null);

    const openModal = (type) => {
        console.log(type);
        setSelectedCardType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCardType(null);
        setIsModalOpen(false);
    };
    return (
        <div className="flex" style={{ gap: "96px" }}>
            <input type="text" />
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
                        Beds & baths
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
                        />,
                        document.body
                    )}
            </StyledBar>
            <select name="" id="">
                <option default value="all">
                    Buying & Renting
                </option>
                <option value="">Buying</option>
                <option value="">Renting</option>
            </select>
        </div>
    );
};

export default FilterBar;

import styled from "@emotion/styled";
import { useState } from "react";
import FilterCards from "./FilterCards";
import FilterModal from "./FilterModal";
import Button from "./Button";

const StyledBar = styled.div`
    width: 100%;
    background: #808080;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 40px auto;
    justify-content: center;
`;

const FiltersBar = () => {
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
        <div className="flex flex-column">
            <StyledBar>
                <input type="text" />
                <button
                    type="Primary"
                    id="PriceCard"
                    size="def"
                    onClick={() => openModal("PriceCard")}>
                    Price
                </button>
                <button
                    type="Primary"
                    id="PropCard"
                    size="def"
                    onClick={() => openModal("PropCard")}>
                    Property
                </button>
                <button
                    type="Primary"
                    id="BedCard"
                    size="def"
                    onClick={() => openModal("BedCard")}>
                    Beds & baths
                </button>
                <button
                    type="Primary"
                    id="MoreCard"
                    size="def"
                    onClick={() => openModal("MoreCard")}>
                    More
                </button>
                <select name="" id="">
                    <option default value="all">
                        Buying & Renting
                    </option>
                    <option value="">Buying</option>
                    <option value="">Renting</option>
                </select>
                <FilterModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Filter Modal"
                    ariaHideApp={false}
                    card={selectedCardType}>
                    <button onClick={closeModal}>Cerrar</button>
                </FilterModal>
            </StyledBar>
        </div>
    );
};

export default FiltersBar;

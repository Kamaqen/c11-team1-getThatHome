import styled from "@emotion/styled";
import PriceCard from "./PriceCard";
import PropCard from "./PropCard";
import BedCard from "./BedCard";
import MoreCard from "./MoreCard";

const StyledBar = styled.div`
    box-sizing: border-box;
    width: 558px;
    margin: auto;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    justify-content: center;
    position: absolute;
    top: 108px;
    left: 50%;
    transform: translateX(-50%);
`;

const FilterModal = ({ card, onRequestClose, handleSetParams, filter }) => {
    console.log("la card es", card);
    return (
        <>
            <StyledBar>
                {card === "PriceCard" && (
                    <PriceCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filter={filter}
                    />
                )}
                {card === "PropCard" && (
                    <PropCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filter={filter}
                    />
                )}
                {card === "BedCard" && (
                    <BedCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filter={filter}
                    />
                )}
                {card === "MoreCard" && (
                    <MoreCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filter={filter}
                    />
                )}
            </StyledBar>
        </>
    );
};

export default FilterModal;

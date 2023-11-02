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
    top: 180px;
    left: 50%;
    transform: translateX(-25%);
`;

const FilterModal = ({
    card,
    onRequestClose,
    handleSetParams,
    filterParams,
    setFilterParams,
}) => {
    return (
        <>
            <StyledBar>
                {card === "PriceCard" && (
                    <PriceCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filterParams={filterParams}
                        setFilterParams={setFilterParams}
                    />
                )}
                {card === "PropCard" && (
                    <PropCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filterParams={filterParams}
                    />
                )}
                {card === "BedCard" && (
                    <BedCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filterParams={filterParams}
                    />
                )}
                {card === "MoreCard" && (
                    <MoreCard
                        onRequestClose={onRequestClose}
                        handleSetParams={handleSetParams}
                        filterParams={filterParams}
                    />
                )}
            </StyledBar>
        </>
    );
};

export default FilterModal;

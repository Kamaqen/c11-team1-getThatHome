import styled from "@emotion/styled";
import FilterCards from "./FilterCards";

const StyledBar = styled.div`
    width: 100%;
    background: #808080;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 40px auto;
    justify-content: center;
`;

const ButtonsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 36px;
    margin-top: 8px;
`;
const FilterModal = ({ card }) => {
    console.log("la card es", card);
    return (
        <StyledBar>
            {card === "PriceCard" ? (<FilterCards type="PriceCard">
                <p className="overline">PRICE Range</p>
                <div className="flex ">
                    <input type="text" placeholder="Min" />
                    <input type="text" placeholder="Max" />
                </div>
                <button>done</button>
            </FilterCards>): card === "PropCard" ? (<FilterCards type="PropCard">
                <p className="overline">Property Type</p>
                <div className="flex ">
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
                <button>done</button>
            </FilterCards>): card === "BedCard" ? (<FilterCards type="BedCard">
                <p className="overline">beds</p>
                <ButtonsDiv>
                    <button>Any</button>
                    <button>1+</button>
                    <button>2+</button>
                    <button>3+</button>
                    <button>4+</button>
                </ButtonsDiv>
                <p className="overline">baths</p>
                <ButtonsDiv>
                    <button>Any</button>
                    <button>1+</button>
                    <button>2+</button>
                    <button>3+</button>
                    <button>4+</button>
                </ButtonsDiv>
                <button>done</button>
            </FilterCards>)}
            
            
            
            <FilterCards type="MoreCard">
                <div className="flex ">
                    <input type="checkbox" />
                    <p>Pets Allowed</p>
                </div>
                <div>
                    <p className="overline">Area in m2</p>
                    <div className="flex ">
                        <input type="text" placeholder="Min" />
                        <input type="text" placeholder="Max" />
                    </div>
                </div>
            </FilterCards>
        </StyledBar>
    );
};

export default FilterModal;

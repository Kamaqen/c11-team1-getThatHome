import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";

const PropCard = ({ onRequestClose }) => {
    return (
        <FilterCardContainer type="PropCard">
            <p className="overline">Property Type</p>
            <div className="flex  a-center mb-md">
                <div>
                    <input className="check" type="checkbox" id="houses" />
                    <label className="gray" htmlFor="houses">
                        Houses
                    </label>
                </div>
                <div>
                    <input className="check" type="checkbox" id="apartments" />
                    <label className="gray" htmlFor="apartments">
                        Apartments
                    </label>
                </div>
            </div>
            <Button
                variant="Primary"
                size="sm"
                onClick={onRequestClose}
                style={{ alignSelf: "flex-end" }}>
                done
            </Button>
        </FilterCardContainer>
    );
};

export default PropCard;

import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";
import styled from "@emotion/styled";

const StyledInput = styled.input`
    width: 102px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--Pink, #f48fb1);
`;
const MoreCard = ({ onRequestClose }) => {
    return (
        <FilterCardContainer type="MoreCard">
            <div className="flex ">
                <div>
                    <input className="check" type="checkbox" id="pets" />
                    <label className="gray" htmlFor="pets">
                        Pets Allowed
                    </label>
                </div>
            </div>
            <div>
                <p className="overline">Area in m2</p>
                <div className="flex gap-sm a-center mb-md">
                    <StyledInput type="text" placeholder="Min" />
                    <StyledInput type="text" placeholder="Max" />
                </div>
                <Button variant="Primary" size="sm" onClick={onRequestClose}>
                    done
                </Button>
            </div>
        </FilterCardContainer>
    );
};

export default MoreCard;

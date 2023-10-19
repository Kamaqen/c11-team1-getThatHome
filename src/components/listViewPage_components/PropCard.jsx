import FilterCardContainer from "./FilterCardContainer";
import Button from "../Button";
import { useState } from "react";

const PropCard = ({ onRequestClose, handleSetParams }) => {
  const [propType, setPropType] = useState([]);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setPropType([...propType, e.target.id]);
    } else {
      setPropType(propType.filter((type) => type !== e.target.id));
    }
  };

  const handleDoneClick = () => {
    handleSetParams("property_type", propType);
    onRequestClose();
  };
  return (
    <FilterCardContainer type="PropCard">
      <p className="overline">Property Type</p>
      <div className="flex  a-center mb-md">
        <div>
          <input
            className="check"
            type="checkbox"
            id="house"
            onChange={handleCheck}
          />
          <label className="gray" htmlFor="houses">
            House
          </label>
        </div>
        <div>
          <input
            className="check"
            type="checkbox"
            id="apartment"
            onChange={handleCheck}
          />
          <label className="gray" htmlFor="apartments">
            Apartment
          </label>
        </div>
      </div>
      <Button
        variant="Primary"
        size="sm"
        onClick={handleDoneClick}
        style={{ alignSelf: "flex-end" }}
      >
        done
      </Button>
    </FilterCardContainer>
  );
};
export default PropCard;

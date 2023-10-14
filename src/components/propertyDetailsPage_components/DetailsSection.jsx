import styled from "@emotion/styled";
import { BiBath, BiArea, BiBed } from "react-icons/bi";
import { MdPets } from "react-icons/md";

const StyledDiv = styled.div`
    padding: 16px 32px;
    width: 100%;
    max-width: 766px;
    display: flex;
    justify-content: space-between;
    align-items: top;
    border-top: 1px solid #bf5f82;
    border-bottom: 1px solid #bf5f82;
`;
const DetailsSection = ({ bed, bath, area, pet }) => {
    return (
        <StyledDiv>
            <div className="flex a-center j-center">
                <p className="headline5">
                    <BiBed style={{ fontSize: "32px" }} /> {bed} bedrooms
                </p>
            </div>
            <div className="flex">
                <p className="headline5">
                    <BiBath style={{ fontSize: "32px" }} /> {bath} bathrooms
                </p>
            </div>
            <div className="flex">
                <p className="headline5">
                    <BiArea style={{ fontSize: "32px" }} /> {area} m2
                </p>
            </div>
            <div className="flex">
                <p className="headline5">
                    <MdPets style={{ fontSize: "32px" }} />{" "}
                    {pet ? "Pets allowed" : "No pets allowed"}
                </p>
            </div>
        </StyledDiv>
    );
};

export default DetailsSection;

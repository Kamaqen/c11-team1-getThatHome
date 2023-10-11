import styled from "@emotion/styled";
import SelectLanding from "./SelectLanding";

const StyledDiv = styled.div`
    border-radius: 8px;
    border-right: 1px solid #e1e2e1;
    text-align: center;
    position: absolute;
    top: 320px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 72px;
    background: #ffffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ButtonProv = styled.button`
    width: 96px;
    height: 40px;
    background-color: #f48fb1;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    :hover {
        background-color: #f06292;
    }
    :active {
        background-color: #ec407a;
    }
`;

const SearchLanding = () => {
    return (
        <StyledDiv className="flex flex-row j-around a-center ">
            <SelectLanding
                type="type"
                label="I’m Looking for"
                options={["An appartment", "An House"]}
            />
            <SelectLanding
                type="operation"
                label="I want To"
                options={["Rent", "Buy"]}
            />
            <SelectLanding
                type="address"
                label="Where"
                options={["Favorite district"]}
            />
            <ButtonProv>Search</ButtonProv>
        </StyledDiv>
    );
};

export default SearchLanding;

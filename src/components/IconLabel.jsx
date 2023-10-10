import styled from "@emotion/styled";

const StyledDiv = styled.div`
    display: flex;
    gap: 8px;
    margin: 4px 10px;
`;
const IconLabel = ({ icon, label }) => {
    return (
        <StyledDiv>
            {icon}
            <p>{label}</p>
        </StyledDiv>
    );
};

export default IconLabel;

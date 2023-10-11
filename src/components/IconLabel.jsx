import styled from "@emotion/styled";

const IconContainer = styled.div`
    font-size: 24px;
    margin-right: 8px;
`;
const IconLabel = ({ icon, label }) => {
    return (
        <div className="flex a-center">
            <IconContainer>{icon}</IconContainer>
            <p>{label}</p>
        </div>
    );
};

export default IconLabel;

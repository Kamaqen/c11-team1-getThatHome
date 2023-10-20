import styled from "@emotion/styled";

const IconContainer = styled.div`
    font-size: 24px;
    margin-right: 8px;
`;
const LinkStyle = styled.a`
    text-decoration: none;
    color: #000;
    :hover {
        color: #bf5f82;
        font-weight: 600;
    }
`;
const IconLabel = ({ icon, label, url }) => {
    return (
        <LinkStyle target="_blank" href={url} className="flex a-center">
            <IconContainer>{icon}</IconContainer>
            <p>{label}</p>
        </LinkStyle>
    );
};

export default IconLabel;

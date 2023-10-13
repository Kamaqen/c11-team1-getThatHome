import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledSection = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 64px 120px;
    position: relative;
    background: ${(props) => (props.color ? props.color : "white")};
`;

const StyledImageSection = styled(StyledSection)`
    padding: 64px 0px 0px 0px;
`;

const Section = ({ children, color, isImageSection }) => {
    return isImageSection ? (
        <StyledImageSection color={color}>{children}</StyledImageSection>
    ) : (
        <StyledSection color={color}>{children}</StyledSection>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    isImageSection: PropTypes.string,
};

export default Section;

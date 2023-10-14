import styled from "@emotion/styled";
import React from "react";

const StyledDetails = styled.p`
    padding: 8px 0;
    text-align-last: start;
    line-height: 24px;
    letter-spacing: 0.5px;
`;
const AboutSection = ({ description }) => {
    return (
        <div className="flex flex-column gap-md">
            <p className="headline6 pink">About this property</p>
            <StyledDetails>{description}</StyledDetails>
        </div>
    );
};

export default AboutSection;

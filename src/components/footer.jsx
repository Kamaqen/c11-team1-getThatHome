import styled from "@emotion/styled";
import IconLabel from "./IconLabel";
import { DiRubyRough } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import PropTypes from "prop-types";

const rubyIcon = <DiRubyRough />;
const reactIcon = <DiReact />;
const ghIcon = <AiFillGithub />;

const FooterWrapper = styled.footer`
    border-top: 2px solid #bf5f82;
    padding: 16px 0px;
    width: 100%;
    justify-content: center;
    height: ${(props) => (props.page === "home" ? "73px" : "124px")};
    background: #f5f5f6;
`;
const FooterContainer = styled.div`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const StyledDiv = styled.div`
    gap: 4px;
`;
const TeamDiv = styled.div`
    flex-wrap: wrap;
    gap: 4px;
    width: 360px;
    height: 68px;
    margin: auto;
`;

const FooterLogo = styled.img`
    width: 134px;
`;

const Footer = ({ page }) => {
    return (
        <FooterWrapper className="flex" page={page}>
            {page !== "home" ? (
                <FooterContainer className="flex container">
                    <StyledDiv className="flex flex-column text-left">
                        <FooterLogo src="src/assets/Logo.png" />
                        <p>© 2023 - Find That Home</p>
                        <p>Codeable - Cohort 11 Final Project</p>
                    </StyledDiv>
                    <StyledDiv className="flex flex-column">
                        <p>
                            Build with <span>❤</span> by:
                        </p>
                        <TeamDiv className="flex flex-column">
                            <IconLabel icon={ghIcon} label="Alonso Pérez" />
                            <IconLabel icon={ghIcon} label="Dante Vásquez" />
                            <IconLabel icon={ghIcon} label="Jimmy Cahuas" />
                            <IconLabel icon={ghIcon} label="Jorge Capcha" />
                            <IconLabel icon={ghIcon} label="Jorge Estrada" />
                            <IconLabel icon={ghIcon} label="Laura Lugo" />
                        </TeamDiv>
                    </StyledDiv>
                    <StyledDiv className="flex flex-column text-left">
                        <p>Source code:</p>
                        <IconLabel
                            icon={rubyIcon}
                            label="Ruby on Rails REST API"
                        />
                        <IconLabel
                            icon={reactIcon}
                            label="React Responsive SPA"
                        />
                    </StyledDiv>
                </FooterContainer>
            ) : (
                <FooterContainer className="flex container">
                    <p>© 2023 - Find That Home</p>
                    <StyledDiv className="flex flex-column a-center">
                        <p>Source Code</p>
                        <StyledDiv className="flex flex-row">
                            <IconLabel
                                icon={rubyIcon}
                                label="Ruby on Rails REST API"
                            />
                            <IconLabel
                                icon={reactIcon}
                                label="React Responsive SPA"
                            />
                        </StyledDiv>
                    </StyledDiv>
                    <p>Codeable - Cohort 11 Final Project</p>
                </FooterContainer>
            )}
        </FooterWrapper>
    );
};

Footer.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Footer;

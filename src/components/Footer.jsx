import styled from "@emotion/styled";
import IconLabel from "./IconLabel";
import { DiRubyRough } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import PropTypes from "prop-types";
import teamMembers from "../STORE";
import logoUrl from "/src/assets/Logo.png";

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
  position: fixed-bottom;
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

const Footer = ({ location }) => {
  return (
    <FooterWrapper className="flex" location={location}>
      {location !== "/main" ? (
        <FooterContainer className="flex container">
          <StyledDiv className="flex flex-column text-left">
            <FooterLogo src={logoUrl} />
            <p>© 2023 - Find That Home</p>
            <p>Codeable - Cohort 11 Final Project</p>
          </StyledDiv>
          <StyledDiv className="flex flex-column">
            <p>
              Built with <span>❤</span> by:
            </p>
            <TeamDiv className="flex flex-column">
              {teamMembers.map((member) => (
                <IconLabel
                  key={member.name}
                  icon={ghIcon}
                  label={member.name}
                  url={member.github}
                />
              ))}
            </TeamDiv>
          </StyledDiv>
          <StyledDiv className="flex flex-column text-left">
            <p>Source code:</p>
            <IconLabel
              icon={rubyIcon}
              label="Ruby on Rails REST API"
              url="https://guides.rubyonrails.org/api_app.html"
            />
            <IconLabel
              icon={reactIcon}
              label="React Responsive SPA"
              url="https://es.react.dev/"
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
                url="https://guides.rubyonrails.org/api_app.html"
              />
              <IconLabel
                icon={reactIcon}
                label="React Responsive SPA"
                url="https://es.react.dev/"
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
  location: PropTypes.string.isRequired,
};

export default Footer;

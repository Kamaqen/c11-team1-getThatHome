import styled from "@emotion/styled";
import Section from "../Section";
import SearchLanding from "../SearchLanding";
import landingUrl from "src/assets/landing-img.svg";

const StyledImg = styled.img`
  margin-top: -72px;
  width: 130%;
  object-fit: cover;
`;
const TextDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledP = styled.p`
  width: 823px;
  text-align: center;
  margin-bottom: 32px;
  z-index: 1;
  font-size: ${(props) => props.font};
  line-height: 48px;
  color: ${(props) => (props.color ? props.color : "#373737")};
`;

const SearchSection = () => {
  return (
    <Section isImageSection="true">
      <StyledImg src={landingUrl} />
      <TextDiv className="flex flex-column a-center gap-md">
        <StyledP font="64px" top="50px">
          Meet your new Home
        </StyledP>
        <p style={{ fontSize: "24px" }}>
          The easiest way to find where you belong
        </p>
      </TextDiv>
      <SearchLanding />
    </Section>
  );
};

export default SearchSection;

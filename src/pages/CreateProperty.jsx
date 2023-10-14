import styled from "@emotion/styled";
import Section from "../components/Section";
import PropertyForm from "../components/PropertyForm";
import Footer from "../components/Footer";

const NavBarProv = styled.div`
    position: relative;
    top: 0px;
    height: 72px;
    width: 100%;
    margin: auto;
    background-color: #f48fb1;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

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

const CreateProperty = () => {

  return (
    <div>
    <NavBarProv>
        <button>Login</button>
    </NavBarProv>
    <Section>
      <StyledP
        font="36px"
        mb="32px"
        className="flex flex-column a-start j-center">
        Create a property listing
      </StyledP>
      <PropertyForm/>
    </Section>
    <Footer page="Create-Property"/>
    </div>
  )
}

export default CreateProperty
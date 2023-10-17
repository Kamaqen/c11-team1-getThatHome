import styled from "@emotion/styled";
import Section from "../components/Section";
import Footer from "../components/Footer";
import PropertyForm from "../components/createProperty_components/PropertyForm";

const NavBarProv = styled.div`
    position: relative;
    top: 0px;
    height: 72px;
    width: 100%;
    margin: auto;
    background-color: #f48fb1;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
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
    <section>
      <StyledP
        font="36px"
        mb="32px"
        className="flex flex-column a-start j-center">
        Create a property listing
      </StyledP>
      <PropertyForm/>
    </section>
    </div>
  )
}

export default CreateProperty
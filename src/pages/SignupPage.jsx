import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";

const Mainbackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ajusta la altura según tus necesidades */
`;

const ContentContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: transladeY(50%);
`;

const ColorDiv = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.color};
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
`;

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <Mainbackground>
        <ColorDiv color="#F48FB126"></ColorDiv>
        <ColorDiv color="#FFFFFF"></ColorDiv>
        <ContentContainer>
          <p>div donde vienen los p y el card container. Debe tener el</p>
          <Text className="flex flex column">
            Selecciona el perfil con el que te identificas
          </Text>
          <Text className="flex flex column">¿Qué estás buscando?</Text>
          <p className="className flex"> container </p>

          <div className="j-center classNamea-center">
            card 1 gap 54 px entre cards
          </div>
          <div className="j-center classNamea-center">
            card 2 gap 54 px entre cards
          </div>
        </ContentContainer>
      </Mainbackground>
      <Footer />
    </div>
  );
};

export default SignupPage;
